import { useState } from 'react'

const base = import.meta.env.BASE_URL

const teamMembers = [
  {
    name: '刘婧媛',
    en: 'JINGYUAN LIU',
    photo: 'https://yurenhao.sizhengwang.cn/upload/resources/image/2020/09/29/343095.jpg',
    position: '35% 28%',
  },
  {
    name: '崔跃华',
    en: 'YUEHUA CUI',
    photo: 'https://directory.natsci.msu.edu/media/Directory/Profiles/Cui_202220221014102646.jpg',
  },
  {
    name: '刘军',
    en: 'JUN LIU',
    photo: 'https://www.stat.tsinghua.edu.cn/__local/2/88/D8/A95CAD492C908EC0913472BD84A_9B65899A_C54F.jpg',
  },
  {
    name: '方复全',
    en: 'FUQUAN FANG',
    photo: 'https://www.cms.org.cn/upload/editor/image/20171204/04082812269.jpg',
  },
  {
    name: '饶毅',
    en: 'YI RAO',
    photo: 'https://www.futureforum.org.cn/resource/data/uploads/95/58fcf4fa4c8c0a0afd827e1993b6e0d5.jpg',
  },
  {
    name: '朱利平',
    en: 'LIPING ZHU',
    photo: 'https://yjszs.zjgsu.edu.cn/_upload/article/images/c3/f3/b7bffef34dbbb833047cb272c97f/e506d406-5bb1-460b-8556-8b304939e90c.png',
  },
  {
    name: '杨帆',
    en: 'FAN YANG',
    photo: 'https://www.bimsa.cn/upload/img/01J265WYNMNWW6RXA0H0921HFQ.jpg',
  },
  {
    name: '吴杰',
    en: 'JIE WU',
    photo: 'https://hsc.beijing.gov.cn/hsc/ywdt8/zxdt72/543529537/2025021410352334150.jpg',
  },
  {
    name: '丘成栋',
    en: 'CHENGDONG QIU',
    photo: 'https://hsc.beijing.gov.cn/hsc/ywdt8/zxdt72/543529537/2025021410361088743.jpg',
  },
  {
    name: '龚新奇',
    en: 'XINQI GONG',
    photo: 'https://hsc.beijing.gov.cn/hsc/ywdt8/zxdt72/543529537/2025021410350331219.jpg',
  },
  {
    name: '邬荣领',
    en: 'RONGLING WU',
    photo: 'https://hsc.beijing.gov.cn/hsc/ywdt8/zxdt72/543529537/2025021410343895510.jpg',
  },
]

const navItems = [
  {
    label: '科学研究',
    href: `${base}#research`,
    children: [
      ['研究方向', `${base}#research-directions`],
      ['科研成果', `${base}#publications`],
    ],
  },
  { label: '研究团队', href: `${base}team.html`, active: true },
  {
    label: '科研动态',
    href: `${base}#news`,
    children: [
      ['新闻动态', `${base}#news-updates`],
      ['学术活动', `${base}#academic-events`],
      ['研究进展', `${base}#research-progress`],
    ],
  },
  { label: '联系我们', href: `${base}#contact` },
]

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
    <header className="site-header team-site-header">
      <a className="brand" href={base} aria-label="返回首页">
        <LabMark />
        <span>
          <strong>拓扑统计北京市重点实验室</strong>
          <small>TOPOLOGICAL STATISTICS · BIMSA</small>
        </span>
      </a>

      <nav className={open ? 'nav open' : 'nav'} aria-label="主导航">
        {navItems.map((item) => (
          <div className={`nav-item ${item.children ? 'has-dropdown' : ''}`} key={item.label}>
            <a className={`nav-link ${item.active ? 'active' : ''}`} href={item.href} onClick={closeMenu}>
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
        <a className="lang" href={`${base}#contact`}>CN / EN</a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="切换导航" aria-expanded={open}>
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Portrait({ person, leader = false }) {
  return (
    <div className={leader ? 'team-portrait leader-portrait' : 'team-portrait'}>
      <span aria-hidden="true">{person.name.slice(0, 1)}</span>
      <img
        src={person.photo}
        alt={person.name}
        loading={leader ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer"
        style={{ objectPosition: person.position || '50% 28%' }}
        onError={(event) => { event.currentTarget.style.display = 'none' }}
      />
    </div>
  )
}

export default function TeamPage() {
  const leader = {
    name: '丘成桐',
    en: 'SHING-TUNG YAU',
    photo: `${base}people/team/yau-shingtung.jpg`,
    position: '50% 22%',
  }

  return (
    <div className="team-page">
      <Header />

      <main>
        <section className="team-page-heading">
          <div className="page-shell team-heading-grid">
            <div>
              <p>RESEARCH TEAM</p>
              <h1>研究团队</h1>
            </div>
            <div className="team-heading-copy">
              <span>ORGANIZATION STRUCTURE</span>
              <p>以跨学科协同为基础组织研究力量，并以行政架构图展示实验室核心成员关系。</p>
            </div>
          </div>
        </section>

        <section className="team-tree-section">
          <div className="page-shell team-tree-shell">
            <div className="team-leader-node">
              <Portrait person={leader} leader />
              <h2>{leader.name}</h2>
              <p>{leader.en}</p>
            </div>

            <div className="team-tree-scroll">
              <div className="team-branch">
                {teamMembers.map((person) => (
                  <article className="team-node" key={person.name}>
                    <Portrait person={person} />
                    <h3>{person.name}</h3>
                    <p>{person.en}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="team-tree-caption">行政架构 · Organization Structure</div>
          </div>
        </section>
      </main>

      <footer className="footer team-footer">
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
