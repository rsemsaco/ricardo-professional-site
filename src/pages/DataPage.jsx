import ActionLink from '../components/content/ActionLink.jsx'
import Reveal from '../components/content/Reveal.jsx'
import SectionHeader from '../components/content/SectionHeader.jsx'
import FoundationHero from '../sections/FoundationHero.jsx'
import { dataContent } from '../data/dataContent.js'
import { siteConfig } from '../data/siteConfig.js'

const nodes = Array.from({ length: 18 }, (_, index) => index)

export default function DataPage() {
  return (
    <div className="experience-page experience-page--data">
      <div className="data-ambient" aria-hidden="true">
        <div className="data-field" />
        {nodes.map((node) => <span key={node} className="ambient-node" style={{ '--node-index': node }} />)}
      </div>

      <div className="page-container">
        <FoundationHero
          {...dataContent.hero}
          mode="data"
          photoLabel="Fotografia — Dados"
          photoPath={siteConfig.media.dataProfile}
          photoId="data-profile"
          primaryAction={dataContent.hero.primaryCta}
          secondaryAction={dataContent.hero.secondaryCta}
          credential="Análise de Dados & Negócios · Psicologia · Tecnologia"
        />

        <Reveal className="data-positioning">
          <p className="eyebrow">{dataContent.positioning.eyebrow}</p>
          <h2>{dataContent.positioning.title}</h2>
          <p>{dataContent.positioning.text}</p>
          <div className="mini-flow" aria-hidden="true"><span>problema</span><i /><span>estrutura</span><i /><span>dado</span><i /><span>decisão</span></div>
        </Reveal>

        <section id="solucoes" className="content-section data-services">
          <Reveal><SectionHeader eyebrow="Soluções" title="Três frentes para organizar, analisar e construir." /></Reveal>
          <div className="service-grid">
            {dataContent.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 80} className="service-card">
                <div className="service-card__top"><span>{service.index}</span><span>→</span></div>
                <h3>{service.title}</h3><strong>{service.tagline}</strong><p>{service.text}</p>
                <ActionLink messageKey={service.messageKey} variant="secondary">{service.cta}</ActionLink>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="content-section data-health">
          <Reveal className="health-panel">
            <div><p className="eyebrow">{dataContent.health.eyebrow}</p><h2>{dataContent.health.title}</h2></div>
            <div><p>{dataContent.health.text}</p><div className="tag-row">{dataContent.health.chips.map((chip) => <span key={chip}>{chip}</span>)}</div></div>
          </Reveal>
        </section>

        <section className="content-section data-roles">
          <Reveal><SectionHeader eyebrow="Atuação" title="Cargos que conectam produto, saúde, educação e dados." /></Reveal>
          <div className="role-list">
            {dataContent.roles.map((item, index) => (
              <Reveal key={item.role + item.organization} delay={index * 60} className="role-row">
                <span className="role-row__index">0{index + 1}</span><div><strong>{item.role}</strong><h3>{item.organization}</h3></div><p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projetos" className="content-section data-projects">
          <Reveal><SectionHeader eyebrow="Projetos" title="Problemas reais transformados em estrutura." text="Projetos em saúde, pesquisa, automação, ciência aberta e IA aplicada — apresentados sem antecipar resultados que ainda não estejam documentados." /></Reveal>
          <div className="project-grid">
            {dataContent.projects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 3) * 70} className={`project-card ${project.pending ? 'is-pending' : ''}`}>
                <div className="project-card__meta"><span>{project.type}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
                <h3>{project.title}</h3><strong>{project.kicker}</strong><p>{project.text}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="cases" className="content-section data-cases">
          <Reveal><SectionHeader eyebrow="Cases" title="Projetos que começaram com um problema concreto." text="Os trechos abaixo são preservados como depoimentos de projetos anteriores. A autorização de reprodução pública deve ser confirmada antes do lançamento." /></Reveal>
          <div className="testimonial-grid">
            {dataContent.testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 70} className="testimonial-card">
                <span className="quote-mark" aria-hidden="true">“</span><blockquote>{item.quote}</blockquote>
                <div className="testimonial-card__person"><strong>{item.name}</strong><span>{item.role}</span></div>
                <p className="testimonial-card__project"><strong>Projeto realizado por Ricardo</strong>{item.project}</p>
                <small>{item.note}</small>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section data-skills">
          <Reveal><SectionHeader eyebrow="Hard Skills" title="Ferramentas são meios. O foco continua sendo o problema." /></Reveal>
          <div className="skill-grid">
            {dataContent.skills.map((cluster, index) => (
              <Reveal key={cluster.title} delay={index * 60} className="skill-cluster">
                <h3>{cluster.title}</h3><div className="skill-list">{cluster.items.map((item) => <span key={item}>{item}</span>)}</div>
              </Reveal>
            ))}
          </div>
          <Reveal className="computing-band">
            <div><p className="eyebrow">{dataContent.computingEducation.eyebrow}</p><h3>{dataContent.computingEducation.title}</h3></div><p>{dataContent.computingEducation.text}</p>
          </Reveal>
        </section>

        <section id="cursos" className="content-section data-courses">
          <Reveal><SectionHeader eyebrow="Cursos & Educação" title="Conhecimento também é produto." /></Reveal>
          <div className="course-grid">
            {dataContent.courses.map((course, index) => (
              <Reveal key={course.title} delay={index * 80} className="course-card">
                <span className="eyebrow">{course.type}</span><h3>{course.title}</h3><strong>{course.subtitle}</strong><p>{course.text}</p>
                {course.messageKey ? <ActionLink messageKey={course.messageKey} variant="secondary">Quero saber quando lançar</ActionLink> : null}
              </Reveal>
            ))}
          </div>

          <Reveal className="speaking-panel">
            <div><p className="eyebrow">{dataContent.speaking.eyebrow}</p><h2>{dataContent.speaking.title}</h2><ActionLink messageKey={dataContent.speaking.messageKey}>{dataContent.speaking.cta}</ActionLink></div>
            <div className="speaking-topics">{dataContent.speaking.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
          </Reveal>
        </section>

        <section className="data-final-cta">
          <div className="decision-network" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <span key={index} style={{ '--network-index': index }} />)}</div>
          <Reveal>
            <p className="eyebrow">{dataContent.finalCta.eyebrow}</p><h2>{dataContent.finalCta.title}</h2><p>{dataContent.finalCta.text}</p>
            <ActionLink messageKey={dataContent.finalCta.messageKey}>{dataContent.finalCta.cta}</ActionLink>
          </Reveal>
        </section>
      </div>
    </div>
  )
}
