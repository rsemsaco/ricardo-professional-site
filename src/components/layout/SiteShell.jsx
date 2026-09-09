import ModeSwitch from '../navigation/ModeSwitch.jsx'
import { siteConfig } from '../../data/siteConfig.js'
import { navigationByMode } from '../../data/navigation.js'

export default function SiteShell({ children, mode, onModeChange }) {
  const navigation = navigationByMode[mode] || []

  return (
    <div className={`site-shell theme-${mode}`}>
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand-lockup" href="#conteudo-principal" aria-label="Ricardo Maggessi — início da página">
            <span className="brand-lockup__name">{siteConfig.brand.name}</span>
            <span className="brand-lockup__descriptor">{siteConfig.brand.descriptor}</span>
          </a>

          <nav className="section-nav" aria-label={`Navegação da experiência ${mode === 'psychology' ? 'Psicologia' : 'Dados'}`}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <ModeSwitch mode={mode} onModeChange={onModeChange} />
        </div>
      </header>

      <main id="conteudo-principal">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <strong>{siteConfig.brand.name}</strong>
            <span>{siteConfig.brand.signature}</span>
          </div>
          <nav className="footer-links" aria-label="Perfis profissionais">
            <a href={siteConfig.contact.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={siteConfig.contact.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={siteConfig.contact.social.lattes} target="_blank" rel="noreferrer">Lattes</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
