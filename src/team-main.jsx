import React from 'react'
import ReactDOM from 'react-dom/client'
import TeamPage from './TeamPage.jsx'
import './styles.css'
import './brighten.css'
import './navigation-org.css'
import './team-page.css'

ReactDOM.createRoot(document.getElementById('team-root')).render(
  <React.StrictMode>
    <TeamPage />
  </React.StrictMode>,
)
