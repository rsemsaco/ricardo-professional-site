import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import './styles/tokens.css'
import './styles/global.css'
import './styles/layout.css'
import './styles/themes.css'
import './styles/experience.css'
import './styles/psychology.css'
import './styles/data.css'
import './styles/premium.css'
import './styles/refinements.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
