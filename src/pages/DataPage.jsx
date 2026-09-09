import FoundationHero from '../sections/FoundationHero.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function DataPage() {
  return (
    <div className="experience-page experience-page--data">
      <div className="data-field" aria-hidden="true" />
      <div className="data-node data-node--one" aria-hidden="true" />
      <div className="data-node data-node--two" aria-hidden="true" />
      <div className="data-node data-node--three" aria-hidden="true" />

      <div className="page-container">
        <FoundationHero
          eyebrow="Experiência Dados"
          title="Da informação dispersa à estrutura."
          description="A fundação técnica e visual está pronta para receber projetos, consultoria, análise de dados, automações e tecnologia na próxima etapa."
          mode="data"
          photoLabel="Fotografia — Dados"
          photoPath={siteConfig.media.dataProfile}
          statusLabel="Fundação preparada para a Etapa 2"
        />

        <section className="foundation-preview" aria-label="Estrutura futura da experiência Dados">
          <span>Consultoria & Gestão</span>
          <span>Pesquisa</span>
          <span>Automações</span>
          <span>Projetos</span>
          <span>Cursos</span>
        </section>
      </div>
    </div>
  )
}
