import FoundationHero from '../sections/FoundationHero.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function PsychologyPage() {
  return (
    <div className="experience-page experience-page--psychology">
      <div className="psychology-orb psychology-orb--one" aria-hidden="true" />
      <div className="psychology-orb psychology-orb--two" aria-hidden="true" />

      <div className="page-container">
        <FoundationHero
          eyebrow="Experiência Psicologia"
          title="Uma base humana, clínica e científica."
          description="Esta primeira etapa estabelece a linguagem visual e a estrutura que receberão a experiência completa de Psicologia na próxima fase."
          mode="psychology"
          photoLabel="Fotografia — Psicologia"
          photoPath={siteConfig.media.psychologyProfile}
          statusLabel="Fundação preparada para a Etapa 2"
        />

        <section className="foundation-preview" aria-label="Estrutura futura da experiência Psicologia">
          <span>FAP</span>
          <span>Atendimentos</span>
          <span>Experiência</span>
          <span>Formação</span>
          <span>Pesquisa</span>
        </section>
      </div>
    </div>
  )
}
