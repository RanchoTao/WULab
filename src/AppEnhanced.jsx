import { useEffect, useRef, useState } from 'react'

const researchDirections = [
  {
    index: '01',
    title: '广义统计物理与复杂网络',
    en: 'Generalized Statistical Physics',
    body: '融合进化博弈论、生态位理论与统计建模，发展高维动态全息互作网络模型 idopNetwork，识别复杂系统中的结构、规律与演化趋势。',
    tags: ['idopNetwork', 'Dynamic Networks', 'Statistical Physics'],
  },
  {
    index: '02',
    title: '拓扑统计学',
    en: 'Topological Statistics',
    body: '将拓扑学的概念与工具引入统计物理和数据分析框架，面向高维、动态、异构与含噪数据建立新的统计理论与计算方法。',
    tags: ['TDA', 'High-dimensional Data', 'Topology'],
  },
  {
    index: '03',
    title: '统计拓扑与高阶互作',
    en: 'Statistical Topology',
    body: '以现代拓扑理论为基础，研究适用于高阶互作复杂网络的数学工具，连接非欧数据分析、复杂系统建模与可解释智能。',
    tags: ['Higher-order Interaction', 'Non-Euclidean Data', 'Complex Systems'],
  },
]

const publications = [
  {
    year: '2026',
    journal: 'The Innovation',
    title: 'Statistical learning of stochastic complex systems via the Yau-Yau nonlinear filter',
    desc: '以 Yau-Yau 非线性滤波为核心，探索随机复杂系统的统计学习框架。',
    href: 'https://doi.org/10.1016/j.xinn.2026.101267',
  },
  {
    year: '2026',
    journal: 'Communications Physics',
    title: 'Multi-task learning of complex networks via nonlinear ordinary differential equations',
    desc: '通过非线性常微分方程统一学习复杂网络结构与动力学任务。',
    href: 'https://doi.org/10.1038/s42005-026-02687-4',
  },
  {
    year: '2026',
    journal: 'Drug Discovery Today',
    title: 'IdopNetworks: How to infer the individualized genetic architecture of genomics for precision medicine',
    desc: '面向精准医学，从群体平均走向个体化基因组网络结构推断。',
    href: 'https://doi.org/10.1016/j.drudis.2026.104733',
  },
]

const organizationMembers = [
  '刘婧媛',
  '崔跃华',
  '刘军',
  '方复全',
  '饶毅',
  '朱利平',
  '杨帆',
  '吴杰',
  '丘成栋',
  '龚新奇',
  '邬荣领',
]

const newsCategories = [
  {
    id: 'news-updates',
    eyebrow: 'NEWS',
    title: '新闻动态',
    desc: '实验室新闻、重要通知、实验室成员采访及相关人物报道。',
    items: [
      {
        date: '2025 · 02',
        tag: '实验室动态',
        title: '复杂系统拓扑统计理论及应用北京市重点实验室正式挂牌成立',
        href: 'https://kw.beijing.gov.cn/xwdt/kcyx/xwdtscyqld/202502/t20250214_4010193.html',
      },
    ],
  },
  {
    id: 'academic-events',
    eyebrow: 'EVENTS',
    title: '学术活动',
    desc: '实验室主办、承办或深度参与的会议、研讨会、讲座与学术交流活动。',
    items: [
      {
        date: '2026 · 02',
        tag: '学术活动',
        title: 'Topological Statistics, Data and Intelligence 学术活动在 BIMSA 举办',
        href: 'https://www.bimsa.cn/research_detail/TopStaDatandInt.html',
      },
    ],
  },
  {
    id: 'research-progress',
    eyebrow: 'RESEARCH',
    title: '研究进展',
    desc: '论文发表新闻稿、成果发布、科研项目进展及阶段性研究突破。',
    items: publications.map((paper) => ({
      date: paper.year,
      tag: paper.journal,
      title: paper.title,
      href: paper.href,
    })),
  },
]

const applications = [
  ['生物医学', 'Biomedicine', '从分子到个体构建高分辨率生物网络，服务疾病机制解析、个性化健康管理与精准药物设计。'],
  ['人工智能', 'Artificial Intelligence', '为非欧数据、复杂结构与动态系统建立可解释的数学统计底座，拓展机器学习建模范式。'],
  ['材料与环境', 'Materials & Environment', '将拓扑统计工具推广到材料科学、环境科学等复杂多尺度系统。'],
  ['社会与经济', 'Society & Economy', '以网络与复杂系统方法分析真实世界中的群体互动、传播与演化机制。'],
]

const navItems = [
  {
    label: '科学研究',
    href: '#research',
    children: [
      ['研究方向', '#research-directions'],
      ['科研成果', '#publications'],
    ],
  },
  { label: '研究团队', href: '#team' },
  {
    label: '科研动态',
    href: '#news',
    children: [
      ['新闻动态', '#news-updates'],
      ['学术活动', '#academic-events'],
      ['研究进展', '#research-progress'],
    ],
  },
  { label: '联系我们', href: '#contact' },
]

function NetworkCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frame = 0
    let animationId
    let width = 0
    let height = 0
    let points = []

    const reset = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(42, Math.floor(width / 24))
      points = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: i % 9 === 0 ? 2.55 : 1.2 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
        depth: 0.72 + Math.random() * 0.28,
      }))
    }

    const draw = () => {
      frame += 1
      ctx.clearRect(0, 0, width, height)

      for (const p of points) {
        p.x += p.vx * p.depth
        p.y += p.vy * p.depth
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i]
          const b = points[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 158) {
            const opacity = 0.2 * (1 - dist / 158) * Math.min(a.depth, b.depth)
            ctx.strokeStyle = `rgba(102, 224, 255, ${opacity})`
            ctx.lineWidth = 0.72
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      points.forEach((p, i) => {
        const isCore = i % 9 === 0
        const pulse = isCore
          ? 0.72 + Math.sin(frame * 0.018 + p.phase) * 0.24
          : 0.58 + Math.sin(frame * 0.01 + p.phase) * 0.1
        ctx.save()
        ctx.shadowBlur = isCore ? 18 : 7
        ctx.shadowColor = isCore ? 'rgba(91, 224, 255, .88)' : 'rgba(144, 220, 245, .4)'
        ctx.fillStyle = `rgba(${isCore ? '109, 231, 255' : '194, 234, 248'}, ${pulse})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationId = requestAnimationFrame(draw)
    }

    reset()
    draw()
    window.addEventListener('resize', reset)
    return () => {
      window.removeEventListener('resize', reset)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />
}

function LabMark() {
  return (
    <div className="lab-mark" aria-label="实验室标识">
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path d="M13 19 32 9l19 10v22L32 55 13 41Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="13" cy="19" r="3" />
        <circle cx="32" cy="9" r="3" />
        <circle cx="51" cy="19" r="3" />
        <circle cx="51" cy="41" r="3" />
        <circle cx="32" cy="55" r="3" />
        <circle cx="13" cy="41" r="3" />
        <circle cx="32" cy="32" r="4" />
        <path d="M13 19 32 32 51 19M13 41 32 32 51 41M32 9v23m0 23V32" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="返回首页">
        <LabMark />
        <span>
          <strong>拓扑统计北京市重点实验室</strong>
          <small>TOPOLOGICAL STATISTICS · BIMSA</small>
        </span>
      </a>

      <nav className={open ? 'nav open' : 'nav'} aria-label="主导航">
        {navItems.map((item) => (
          <div className={`nav-item ${item.children ? 'has-dropdown' : ''}`} key={item.label}>
            <a className="nav-link" href={item.href} onClick={closeMenu}>
              <span>{item.label}</span>
              {item.children && <span className="nav-chevron" aria-hidden="true">▼</span>}
            </a>
            {item.children && (
              <div className="nav-dropdown" aria-label={`${item.label}子菜单`}>
                {item.children.map(([label, href]) => (
                  <a key={href} href={href} onClick={closeMenu}>{label}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="header-actions">
        <a className="lang" href="#contact">CN / EN</a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="切换导航" aria-expanded={open}>
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, desc, light = false }) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {desc && <span>{desc}</span>}
    </div>
  )
}

function OrganizationChart() {
  return (
    <div className="org-chart" aria-label="实验室行政架构图">
      <div className="org-leader">
        <div className="org-avatar-ring">
          <img src={`${import.meta.env.BASE_URL}people/yau.jpg`} alt="丘成桐" />
        </div>
        <h3>丘成桐</h3>
        <p>SHING-TUNG YAU</p>
      </div>

      <div className="org-scroll">
        <div className="org-branch">
          {organizationMembers.map((name) => (
            <div className="org-member" key={name}>
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </div>
      <p className="org-legend">行政架构 · Organization Structure</p>
    </div>
  )
}

export default function AppEnhanced() {
  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero">
          <NetworkCanvas />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-aurora aurora-a" aria-hidden="true" />
          <div className="hero-aurora aurora-b" aria-hidden="true" />
          <div className="hero-orbit orbit-a" aria-hidden="true" />
          <div className="hero-orbit orbit-b" aria-hidden="true" />
          <div className="hero-vignette" aria-hidden="true" />

          <div className="hero-content page-shell">
            <div className="hero-kicker"><span /> BEIJING KEY LABORATORY</div>
            <h1>
              复杂系统<br />
              <em>拓扑统计</em>理论及应用
            </h1>
            <p className="hero-en">Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems</p>
            <p className="hero-lead">从非欧数据中发现结构，从复杂系统中提炼规律。</p>
            <div className="hero-actions">
              <a className="button primary" href="#research">探索研究 <span>↗</span></a>
              <a className="button ghost" href="#team">研究团队</a>
            </div>
          </div>

          <div className="hero-bottom page-shell">
            <div className="institution-strip">
              <span>依托单位</span>
              <strong>北京雁栖湖应用数学研究院 · BIMSA</strong>
              <i />
              <span>联合共建</span>
              <strong>中国人民大学数学学院</strong>
            </div>
            <a href="#research" className="scroll-hint">SCROLL <span>↓</span></a>
          </div>
        </section>

        <section className="intro-band">
          <div className="page-shell intro-layout">
            <p className="intro-index">01 / MISSION</p>
            <div className="intro-copy">
              <p>面向大数据与人工智能时代的复杂性挑战</p>
              <h2>建立连接统计、拓扑、网络与真实世界复杂系统的新理论。</h2>
            </div>
            <div className="intro-stats">
              <div><strong>3</strong><span>核心研究方向</span></div>
              <div><strong>2025</strong><span>正式挂牌成立</span></div>
              <div><strong>∞</strong><span>跨学科应用空间</span></div>
            </div>
          </div>
        </section>

        <section id="research" className="section research-section anchor-target">
          <div className="page-shell">
            <div id="research-directions" className="anchor-target">
              <SectionHeading
                eyebrow="SCIENTIFIC RESEARCH"
                title="科学研究"
                desc="围绕复杂系统的结构、动力学与高阶互作，形成从理论创新到计算方法再到真实应用的研究链条。"
              />
            </div>

            <div className="research-grid">
              {researchDirections.map((item) => (
                <article className="research-card" key={item.index}>
                  <div className="research-top">
                    <span className="research-index">{item.index}</span>
                    <span className="research-arrow">↗</span>
                  </div>
                  <p className="research-en">{item.en}</p>
                  <h3>{item.title}</h3>
                  <p className="research-body">{item.body}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="science-visual section-dark">
          <div className="page-shell visual-layout">
            <div className="visual-copy">
              <SectionHeading
                eyebrow="THEORY × DATA × INTELLIGENCE"
                title="拓扑，让复杂数据显露形状"
                desc="传统统计主要在欧氏空间中寻找规律，而现代复杂系统往往天然表现为网络、流形与高阶结构。实验室试图把这些“形状”本身纳入统计推断。"
                light
              />
              <div className="concept-list">
                <span><b>01</b> 非欧数据结构</span>
                <span><b>02</b> 动态网络建模</span>
                <span><b>03</b> 高阶互作推断</span>
                <span><b>04</b> 数学驱动智能</span>
              </div>
            </div>
            <div className="topology-figure" aria-hidden="true">
              <div className="topology-ring ring-1" />
              <div className="topology-ring ring-2" />
              <div className="topology-ring ring-3" />
              <div className="topology-core">T</div>
              {Array.from({ length: 12 }).map((_, i) => (
                <i key={i} style={{ '--i': i }} />
              ))}
              <p>TOPOLOGY<br />STATISTICS<br />COMPLEXITY</p>
            </div>
          </div>
        </section>

        <section id="publications" className="section publications-section anchor-target">
          <div className="page-shell">
            <div className="split-heading">
              <SectionHeading eyebrow="SELECTED OUTPUTS" title="科研成果" />
              <p>持续更新实验室在拓扑统计、复杂网络、数学生物学与科学智能方向的公开研究成果。</p>
            </div>

            <div className="publication-list">
              {publications.map((paper) => (
                <a className="publication-row" key={paper.title} href={paper.href} target="_blank" rel="noreferrer">
                  <div className="pub-meta"><strong>{paper.year}</strong><span>{paper.journal}</span></div>
                  <div className="pub-main"><h3>{paper.title}</h3><p>{paper.desc}</p></div>
                  <span className="pub-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="applications-section">
          <div className="page-shell">
            <SectionHeading eyebrow="APPLICATIONS" title="从数学理论走向复杂世界" />
            <div className="application-grid">
              {applications.map(([cn, en, desc], i) => (
                <article key={cn} className="application-card">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <p>{en}</p>
                  <h3>{cn}</h3>
                  <div className="application-line" />
                  <small>{desc}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section org-section anchor-target">
          <div className="page-shell">
            <div className="split-heading">
              <SectionHeading eyebrow="RESEARCH TEAM" title="研究团队" />
              <p className="org-intro">以跨学科协同为基础组织研究力量，并以行政架构图展示实验室核心成员关系。</p>
            </div>
            <OrganizationChart />
          </div>
        </section>

        <section id="news" className="section news-section anchor-target">
          <div className="page-shell">
            <div className="split-heading">
              <SectionHeading eyebrow="NEWS & EVENTS" title="科研动态" />
              <p>科研动态统一分为新闻动态、学术活动和研究进展三类，便于长期持续更新。</p>
            </div>

            <div className="news-category-grid">
              {newsCategories.map((category) => (
                <section className="news-category anchor-target" id={category.id} key={category.id}>
                  <div className="news-category-head">
                    <p>{category.eyebrow}</p>
                    <h3>{category.title}</h3>
                    <span>{category.desc}</span>
                  </div>
                  <div className="news-mini-list">
                    {category.items.map((item) => (
                      <a className="news-mini-card" href={item.href} target="_blank" rel="noreferrer" key={`${category.id}-${item.title}`}>
                        <div className="news-mini-meta"><span>{item.tag}</span><time>{item.date}</time></div>
                        <h4>{item.title}</h4>
                        <b>阅读详情 ↗</b>
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-dark">
          <div className="page-shell about-layout">
            <div>
              <p className="about-kicker">ABOUT THE LABORATORY</p>
              <h2>理论 — 应用 — 转化</h2>
            </div>
            <div className="about-copy">
              <p>复杂系统拓扑统计理论及应用北京市重点实验室依托北京雁栖湖应用数学研究院建设，与中国人民大学数学学院联合共建。</p>
              <p>实验室聚焦应用数学中的拓扑统计方向，围绕国家重大需求与现代复杂数据分析挑战，推动统计学与拓扑学、统计物理、图论、进化博弈论等分支交叉融合，建设从理论方法、计算软件到跨领域应用的完整研究链条。</p>
              <div className="about-links">
                <a href="https://www.bimsa.cn/" target="_blank" rel="noreferrer">BIMSA ↗</a>
                <a href="https://kw.beijing.gov.cn/xwdt/kcyx/xwdtscyqld/202502/t20250214_4010193.html" target="_blank" rel="noreferrer">成立公告 ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section anchor-target">
          <div className="page-shell contact-layout">
            <div className="contact-title">
              <p>CONTACT</p>
              <h2>联系我们</h2>
            </div>
            <div className="contact-cards">
              <article className="contact-card">
                <span>BEIJING KEY LABORATORY</span>
                <h3>复杂系统拓扑统计理论及应用北京市重点实验室</h3>
                <small>Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems</small>
                <p>北京市怀柔区怀北镇河防口村544号</p>
              </article>
              <article className="contact-card">
                <span>RENMIN UNIVERSITY OF CHINA</span>
                <h3>中国人民大学</h3>
                <p>北京市海淀区中关村大街59号</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell footer-main">
          <div className="footer-brand">
            <LabMark />
            <div>
              <strong>复杂系统拓扑统计理论及应用北京市重点实验室</strong>
              <span>Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems</span>
            </div>
          </div>
          <div className="footer-location-grid">
            <div className="footer-location">
              <h4>实验室地址</h4>
              <p>北京市怀柔区怀北镇河防口村544号</p>
            </div>
            <div className="footer-location">
              <h4>中国人民大学</h4>
              <p>北京市海淀区中关村大街59号</p>
            </div>
          </div>
        </div>
        <div className="page-shell footer-bottom">
          <span>© {new Date().getFullYear()} Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems</span>
          <span>Academic website · WULab</span>
        </div>
      </footer>
    </div>
  )
}
