(() => {
  const COUNTER_ID = 'busuanzi_container_site_pv'
  const SCRIPT_ID = 'busuanzi-site-counter-script'
  const STYLE_ID = 'wulab-visit-counter-style'

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return
    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = `
      .footer-meta-right {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 24px;
      }
      .site-visit-counter {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        color: rgba(255,255,255,.62);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .site-visit-counter svg {
        width: 15px;
        height: 15px;
        flex: 0 0 auto;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      #busuanzi_value_site_pv {
        color: rgba(255,255,255,.78);
        font-size: 10px;
        letter-spacing: .04em;
      }
      @media (max-width: 820px) {
        .footer-meta-right {
          justify-content: flex-start;
          gap: 18px;
          flex-wrap: wrap;
        }
      }
    `
    document.head.appendChild(style)
  }

  function loadCounterScript() {
    if (document.getElementById(SCRIPT_ID)) return
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    document.body.appendChild(script)
  }

  function attachCounter() {
    const footerBottom = document.querySelector('.footer-bottom')
    if (!footerBottom) return false
    if (document.getElementById(COUNTER_ID)) return true

    ensureStyles()

    const counterShell = document.createElement('span')
    counterShell.id = COUNTER_ID
    counterShell.style.display = 'none'
    counterShell.setAttribute('aria-label', '网站总访问量')
    counterShell.innerHTML = `
      <span class="site-visit-counter" title="网站总访问量">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
          <circle cx="12" cy="12" r="2.7"></circle>
        </svg>
        <span id="busuanzi_value_site_pv">--</span>
      </span>
    `

    const existingRight = footerBottom.lastElementChild
    if (existingRight) {
      const cluster = document.createElement('span')
      cluster.className = 'footer-meta-right'
      footerBottom.replaceChild(cluster, existingRight)
      cluster.appendChild(existingRight)
      cluster.appendChild(counterShell)
    } else {
      footerBottom.appendChild(counterShell)
    }

    loadCounterScript()
    return true
  }

  if (attachCounter()) return

  const observer = new MutationObserver(() => {
    if (attachCounter()) observer.disconnect()
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })
})()
