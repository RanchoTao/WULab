import { useEffect, useRef, useState } from 'react'

const researchDirections = [
  {
    index: '01',
    title: '广义统计物理与复杂网络',
    en: 'Generalized Statistical Physics',
    body: '融合进化博弈论、生态位理论与统计建模，发展高维动态全息互作网络模型 idopNetwork，识别复杂系统中的结构、规律与演化趋势。',
  },
  {
    index: '02',
    title: '拓扑统计学',
    en: 'Topological Statistics',
    body: '将拓扑学的概念与工具引入统计物理和数据分析框架，面向高维、动态、异构与含噪数据建立新的统计理论与计算方法。',
  },
  {
    index: '03',
    title: '统计拓扑与高阶互作',
    en: 'Statistical Topology',
    body: '研究适用于高阶互作复杂网络的数学工具，连接非欧数据分析、复杂系统建模与可解释智能。',
  },
]

const publications = [
  {
    year: '2026',
    journal: 'The Innovation',
    title: 'Statistical learning of stochastic complex systems via the Yau-Yau nonlinear filter',
    href: 'https://doi.org/10.1016/j.xinn.2026.101267',
  },
  {
    year: '2026',
    journal: 'Communications Physics',
    title: 'Multi-task learning of complex networks via nonlinear ordinary differential equations',
    href: 'https://doi.org/10.1038/s42005-026-02687-4',
  },
  {
    year: '2026',
    journal: 'Drug Discovery Today',
    title: 'IdopNetworks: How to infer the individualized genetic architecture of genomics for precision medicine',
    href: 'https://doi.org/10.1016/j.drudis.2026.104733',
  },
]

const people = [
  ['丘成桐', 'Shing-Tung Yau', '学术委员会主席', '几何、拓扑与数学物理'],
  ['邬荣领', 'Rongling Wu', '实验室主任', '应用统计学、数学生物学、计算医学'],
  ['龚新奇', 'Xinqi Gong', '实验室副主任', '计算科学与交叉研究'],
]

const heroNews = [
  {
    type: '研究进展',
    date: '2026 · 07',
    title: 'idopNetworks：面向精准医学的个体化基因组网络研究发表',
    summary: '从群体平均走向个体化结构推断，探索复杂生物系统的高分辨率网络建模。',
    href: 'https://doi.org/10.1016/j.drudis.2026.104733',
  },
  {
    type: '学术活动',
    date: '2026 · 02',
    title: 'Topological Statistics, Data and Intelligence 学术活动在 BIMSA 举办',
    summary: '围绕拓扑统计、复杂数据与智能方法展开跨学科交流。',
    href: 'https://www.bimsa.cn/research_detail/TopStaDatandInt.html',
  },
  {
    type: '实验室动态',
    date: '2025 · 02',
    title: '复杂系统拓扑统计理论及应用北京市重点实验室正式挂牌成立',
    summary: '面向复杂系统与现代数据科学，推进统计、拓扑、网络和交叉应用的协同研究。',
    href: 'https://kw.beijing.gov.cn/xwdt/kcyx/xwdtscyqld/202502/t20250214_4010193.html',
  },
]

function FlowBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let width = 0
    let height = 0
    let dpr = 1

    const blobs = [
      { x: .18, y: .78, r: .38, speed: .00020, phase: 0.3, color: [42, 125, 180], alpha: .28 },
      { x: .43, y: .18, r: .36, speed: .00014, phase: 1.8, color: [55, 135, 210], alpha: .28 },
      { x: .70, y: .32, r: .42, speed: .00012, phase: 3.2, color: [33, 102, 180], alpha: .22 },
      { x: .88, y: .75, r: .46, speed: .00016, phase: 4.6, color: [28, 65, 125], alpha: .25 },
    ]

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'screen'

      blobs.forEach((blob, i) => {
        const driftX = Math.sin(time * blob.speed + blob.phase) * width * .12
        const driftY = Math.cos(time * blob.speed * .83 + blob.phase * 1.3) * height * .10
        const x = blob.x * width + driftX
        const y = blob.y * height + driftY
        const radius = Math.max(width, height) * blob.r * (1 + Math.sin(time * .00022 + i) * .05)
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        const [r, g, b] = blob.color
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${blob.alpha})`)
        gradient.addColorStop(.42, `rgba(${r}, ${g}, ${b}, ${blob.alpha * .45})`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      })

      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="flow-background" ref={canvasRef} aria-hidden="true" />
}

function LabMark() {
  return (
    <span className="lab-mark" aria-hidden="true">
      <svg viewBox="0 0 70 46" fill="none">
        <path d="M3 35 20 11h20L23 35H3Z" fill="currentColor" opacity=".95" />
        <path d="M28 35 45 11h22L50 35H28Z" fill="currentColor" opacity=".68" />
        <path d="M8 39h50" stroke="currentColor" strokeWidth="2" opacity=".45" />
        <circle cx="20" cy="11" r="3" fill="currentColor" />
        <circle cx="45" cy="11" r="3" fill="currentColor" />
        <circle cx="23" cy="35" r="3" fill="currentColor" />
        <circle cx="50" cy="35" r="3" fill="currentColor" />
      </svg>
    </span>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c.8-3.3 3-5 6.5-5s5.7 1.7 6.5 5" />
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const nav = [
    ['首页', '#top', false],
    ['科学研究', '#research', true],
    ['科研动态', '#news', true],
    ['科研成果', '#publications', true],
    ['关于我们', '#about', false],
    ['加入我们', '#join', true],
  ]

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="返回首页">
        <LabMark />
        <span className="brand-copy">
          <strong>复杂系统拓扑统计理论及应用北京市重点实验室</strong>
          <small>Beijing Key Laboratory of Topological Statistics</small>
        </span>
      </a>

      <nav className={open ? 'nav open' : 'nav'} aria-label="主导航">
        {nav.map(([label, href, arrow]) => (
          <a key={label} href={href} onClick={() => setOpen(false)} className={label === '首页' ? 'active' : ''}>
            {label}{arrow && <span>⌄</span>}
          </a>
        ))}
      </nav>

      <div className="header-right">
        <a className="user-link" href="#join" aria-label="联系我们"><UserIcon /></a>
        <button className="menu-btn" aria-label="切换导航" aria-expanded={open} onClick={() => setOpen(!open)}>
          <i /><i />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActive((v) => (v + 1) % heroNews.length), 4800)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">
      <FlowBackground />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-mesh" aria-hidden="true" />

      <div className="hero-title-wrap">
        <h1>复杂系统拓扑统计理论及应用北京市重点实验室</h1>
        <p>Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems</p>
      </div>

      <div className="hero-news-shell">
        <div className="hero-news-grid">
          {heroNews.map((item, index) => (
            <a
              className={`hero-news-card ${active === index ? 'is-active' : ''}`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.title}
              onMouseEnter={() => setActive(index)}
            >
              <div className="hero-news-meta"><span>{item.type}</span><time>{item.date}</time></div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <b>了解更多 ↗</b>
            </a>
          ))}
        </div>

        <div className="hero-pagination" aria-label="新闻轮播分页">
          {heroNews.map((_, index) => (
            <button
              key={index}
              className={active === index ? 'active' : ''}
              aria-label={`切换到第 ${index + 1} 条新闻`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, intro }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />

        <section className="mission-strip">
          <div className="page-shell mission-inner">
            <span>BEIJING · BIMSA</span>
            <p>从复杂数据中发现结构，从真实系统中提炼规律。</p>
            <div><b>依托 BIMSA</b><i />联合共建：中国人民大学数学学院</div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="page-shell">
            <SectionTitle
              eyebrow="SCIENTIFIC RESEARCH"
              title="科学研究"
              intro="围绕复杂系统的结构、动力学与高阶互作，形成从理论创新到计算方法再到真实应用的研究链条。"
            />
            <div className="research-grid">
              {researchDirections.map((item) => (
                <article className="research-card" key={item.index}>
                  <div className="research-index">{item.index}</div>
                  <p>{item.en}</p>
                  <h3>{item.title}</h3>
                  <div className="research-rule" />
                  <span>{item.body}</span>
                  <b>↗</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-band">
          <div className="page-shell dark-band-inner">
            <div>
              <span>THEORY × DATA × INTELLIGENCE</span>
              <h2>用数学理解复杂世界的结构。</h2>
            </div>
            <p>拓扑统计将“形状”本身纳入统计推断，使网络、流形、高阶互作与动态结构能够进入统一的数学框架。</p>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="page-shell">
            <SectionTitle eyebrow="SELECTED OUTPUTS" title="代表性研究进展" />
            <div className="publication-list">
              {publications.map((paper) => (
                <a href={paper.href} target="_blank" rel="noreferrer" className="publication-row" key={paper.title}>
                  <div><strong>{paper.year}</strong><span>{paper.journal}</span></div>
                  <h3>{paper.title}</h3>
                  <b>↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section people-section" id="people">
          <div className="page-shell">
            <SectionTitle
              eyebrow="PEOPLE"
              title="学术团队"
              intro="以数学、统计、计算与生命科学的深度交叉为核心，建设开放协作的研究团队。"
            />
            <div className="people-grid">
              {people.map(([name, en, role, field]) => (
                <article className="person-card" key={name}>
                  <div className="person-photo" />
                  <div className="person-copy">
                    <p>{role}</p>
                    <h3>{name}</h3>
                    <span>{en}</span>
                    <small>{field}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="page-shell about-grid">
            <div>
              <SectionTitle eyebrow="ABOUT" title="关于实验室" />
            </div>
            <div className="about-copy">
              <p>复杂系统拓扑统计理论及应用北京市重点实验室聚焦复杂系统中的统计规律、拓扑结构与数据智能问题，推动数学理论、计算方法与交叉应用协同发展。</p>
              <p>实验室依托北京雁栖湖应用数学研究院（BIMSA），联合中国人民大学数学学院建设，面向开放科学与国际合作持续汇聚优秀研究力量。</p>
            </div>
          </div>
        </section>

        <section className="join-section" id="join">
          <div className="page-shell join-inner">
            <span>JOIN US</span>
            <h2>与我们一起研究复杂世界。</h2>
            <p>欢迎青年学者、博士后、研究生与优秀本科生加入实验室，开展数学、统计、人工智能与生命科学交叉研究。</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-inner">
          <div>
            <strong>复杂系统拓扑统计理论及应用北京市重点实验室</strong>
            <span>Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems</span>
          </div>
          <p>Beijing · Huairou · BIMSA</p>
        </div>
      </footer>
    </div>
  )
}
