import { useLayoutEffect } from 'react'
import AppEnhanced from './AppEnhanced.jsx'

export default function HomePage() {
  useLayoutEffect(() => {
    const teamUrl = `${import.meta.env.BASE_URL}team.html`

    const applyHomepageOverrides = () => {
      const teamSection = document.getElementById('team')
      if (teamSection) teamSection.remove()

      document.querySelectorAll('a[href="#team"]').forEach((link) => {
        link.setAttribute('href', teamUrl)
      })
    }

    applyHomepageOverrides()

    const observer = new MutationObserver(applyHomepageOverrides)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return <AppEnhanced />
}
