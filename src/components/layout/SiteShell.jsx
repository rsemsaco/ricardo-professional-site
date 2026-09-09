import ModeSwitch from '../navigation/ModeSwitch.jsx'
import { siteConfig } from '../../data/siteConfig.js'

export default function SiteShell({ children, mode, onModeChange }) {
  return (
    <div className={`site-shell theme-${mode}`}>
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand-lockup" aria-label="Ricardo Maggessi">
            <span className="brand-lockup__name">{siteConfig.brand.name}</span>
            <span className="brand-lockup__descriptor">
              {siteConfig.brand.descriptor}
            </span>
          </div>

          <ModeSwitch mode={mode} onModeChange={onModeChange} />
        </div>
      </header>

      <main id="conteudo-principal">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>{siteConfig.brand.name}</span>
          <span>Entre o humano e o tecnológico.</span>
        </div>
      </footer>
    </div>
  )
}
