# WULab Website

复杂系统拓扑统计理论及应用北京市重点实验室官方网站前端。

**English name:** Beijing Key Laboratory of Topological Statistics and Applications for Complex Systems

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Current structure

The first public-facing version is a responsive single-page research website inspired by the information architecture and visual rhythm of major research-laboratory websites, especially SHLab, while using an independent WULab identity and original frontend implementation.

Sections:

- Hero / laboratory identity
- Mission
- Scientific research
- Theory × Data × Intelligence visual section
- Selected research outputs
- Application areas
- Academic team
- News & events
- About
- Join / contact

## Content sources

Initial factual content is based on public institutional sources and publication metadata. Before an official launch, all names, roles, contact information, branding, recruitment language and publication selections should be reviewed by the laboratory.

- Beijing Municipal Science & Technology Commission announcement: https://kw.beijing.gov.cn/xwdt/kcyx/xwdtscyqld/202502/t20250214_4010193.html
- BIMSA profile of Rongling Wu: https://www.bimsa.cn/zh-CN/detail/ronglingwu.html
- BIMSA workshop page: https://www.bimsa.cn/research_detail/TopStaDatandInt.html
- The Innovation paper: https://doi.org/10.1016/j.xinn.2026.101267
- Communications Physics paper: https://doi.org/10.1038/s42005-026-02687-4
- Drug Discovery Today paper: https://doi.org/10.1016/j.drudis.2026.104733

## Next recommended steps

1. Replace the provisional topology mark with the laboratory's approved logo.
2. Add official portraits and full member profiles after permissions are confirmed.
3. Split research, people, publications, news and recruitment into dedicated routes when content volume grows.
4. Connect news/publications to a small CMS or structured data source.
5. Add bilingual CN/EN routing.
6. Configure the official domain, analytics, sitemap, robots.txt and deployment workflow.
