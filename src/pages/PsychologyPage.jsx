import ActionLink from '../components/content/ActionLink.jsx'
import Reveal from '../components/content/Reveal.jsx'
import SectionHeader from '../components/content/SectionHeader.jsx'
import FoundationHero from '../sections/FoundationHero.jsx'
import { psychologyContent } from '../data/psychologyContent.js'
import { siteConfig } from '../data/siteConfig.js'

export default function PsychologyPage() {
  const bookingEnabled = siteConfig.psychology.bookingEnabled && Boolean(siteConfig.psychology.crp)
  const credential = siteConfig.psychology.crp
    ? `Ricardo Maggessi · Psicólogo · CRP ${siteConfig.psychology.crp}`
    : 'Psicologia USP · FAP · Saúde e contexto hospitalar'

  const hero = bookingEnabled
    ? psychologyContent.hero
    : {
        ...psychologyContent.hero,
        title: 'Psicologia que acontece na relação.',
        description:
          'Minha trajetória em Psicologia conecta formação clínica supervisionada em FAP, experiência hospitalar, pesquisa e uma leitura contextual do comportamento humano.',
      }

  return (
    <div className="experience-page experience-page--psychology">
      <div className="psychology-ambient" aria-hidden="true">
        <span className="psychology-orb psychology-orb--one" />
        <span className="psychology-orb psychology-orb--two" />
        <svg className="psychology-ambient__curve" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M-40 250 C 230 30, 460 420, 720 180 S 1020 110, 1240 250" />
        </svg>
      </div>

      <div className="page-container">
        <FoundationHero
          {...hero}
          mode="psychology"
          photoLabel="Ricardo · Psicologia"
          photoPath={siteConfig.media.psychologyProfile}
          photoId="psychology-profile"
          primaryAction={{
            label: bookingEnabled ? 'Agendar consulta' : 'Psicoterapia — em breve',
            messageKey: siteConfig.psychology.bookingMessageKey,
            disabled: !bookingEnabled,
            ariaLabel: bookingEnabled ? 'Agendar consulta por WhatsApp' : 'Psicoterapia em breve',
          }}
          secondaryAction={psychologyContent.hero.secondaryCta}
          credential={credential}
          notice={!bookingEnabled ? siteConfig.psychology.pendingNotice : null}
        />

        <Reveal className="psychology-statement">
          <p>O que acontece nas nossas relações muitas vezes também aparece dentro da terapia.</p>
        </Reveal>

        <section id="abordagem" className="content-section psychology-fap">
          <Reveal>
            <SectionHeader eyebrow={psychologyContent.fap.eyebrow} title={psychologyContent.fap.title} text={psychologyContent.fap.lead} />
          </Reveal>

          <div className="principle-grid">
            {psychologyContent.fap.principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="principle-card">
                <span className="principle-card__index">{item.index}</span>
                <span className="principle-card__label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="therapy-phrases">
            {psychologyContent.fap.phrases.map((phrase, index) => (
              <Reveal key={phrase} delay={index * 60}>
                <blockquote>{phrase}</blockquote>
              </Reveal>
            ))}
          </div>
        </section>

        {bookingEnabled ? (
          <section id="atendimentos" className="content-section psychology-care">
            <Reveal>
              <SectionHeader eyebrow={psychologyContent.demands.eyebrow} title={psychologyContent.demands.title} text={psychologyContent.demands.intro} />
            </Reveal>
            <div className="demand-cloud">
              {psychologyContent.demands.items.map((item, index) => (
                <Reveal key={item} delay={(index % 5) * 45} className="demand-chip"><span>{item}</span></Reveal>
              ))}
            </div>

            <div className="modality-block">
              <Reveal><SectionHeader eyebrow={psychologyContent.modalities.eyebrow} title={psychologyContent.modalities.title} /></Reveal>
              <div className="modality-grid">
                {psychologyContent.modalities.items.map((item, index) => (
                  <Reveal key={item.title} delay={index * 70} className="modality-card">
                    <span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section id="atendimentos" className="content-section psychology-prelaunch-section">
            <Reveal className="psychology-prelaunch-panel">
              <div>
                <p className="eyebrow">Área clínica · pré-lançamento</p>
                <h2>Psicoterapia — em breve.</h2>
                <p>
                  Esta versão pública apresenta minha trajetória, abordagem e experiência em Psicologia. Informações de atendimento, modalidades e agendamento serão disponibilizadas quando a área profissional estiver habilitada para publicação.
                </p>
              </div>
              <div className="prelaunch-orbit" aria-hidden="true"><span /><span /><span /></div>
            </Reveal>
          </section>
        )}

        <section id="experiencia" className="content-section psychology-experience">
          <Reveal><SectionHeader eyebrow={psychologyContent.experience.eyebrow} title={psychologyContent.experience.title} /></Reveal>
          <div className="metric-grid">
            {psychologyContent.experience.metrics.map((item, index) => (
              <Reveal key={item.value + item.label} delay={index * 70} className="metric-card">
                <strong>{item.value}</strong><span>{item.label}</span>
              </Reveal>
            ))}
          </div>

          <div className="hospital-block">
            <Reveal><SectionHeader eyebrow={psychologyContent.hospital.eyebrow} title={psychologyContent.hospital.title} text={psychologyContent.hospital.intro} /></Reveal>
            <div className="hospital-path" aria-label="Áreas de experiência no HCor">
              {psychologyContent.hospital.areas.map((area, index) => (
                <Reveal key={area.title} delay={(index % 3) * 60} className="hospital-stop">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{area.title}</h3><p>{area.text}</p></div>
                </Reveal>
              ))}
            </div>
            <div className="spotlight-grid">
              {psychologyContent.hospital.spotlights.map((item, index) => (
                <Reveal key={item.label} delay={index * 80} className="spotlight-card">
                  <span className="eyebrow">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="formacao" className="content-section psychology-formation">
          <Reveal><SectionHeader eyebrow={psychologyContent.formation.eyebrow} title={psychologyContent.formation.title} text={psychologyContent.formation.intro} /></Reveal>
          <div className="formation-grid">
            {psychologyContent.formation.cards.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="formation-card">
                <strong>{item.value}</strong><h3>{item.title}</h3><p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pesquisa" className="content-section psychology-research">
          <Reveal><SectionHeader eyebrow={psychologyContent.research.eyebrow} title={psychologyContent.research.title} /></Reveal>
          <div className="research-grid">
            {psychologyContent.research.items.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 70} className="research-card">
                <h3>{item.title}</h3><p>{item.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="education-band">
            <div><p className="eyebrow">{psychologyContent.education.eyebrow}</p><h3>{psychologyContent.education.title}</h3></div>
            <p>{psychologyContent.education.text}</p>
          </Reveal>
        </section>

        <section className="psychology-final-cta">
          <Reveal>
            <p className="eyebrow">{bookingEnabled ? psychologyContent.finalCta.eyebrow : 'Próxima etapa'}</p>
            <h2>{bookingEnabled ? psychologyContent.finalCta.title : 'Psicoterapia — em breve.'}</h2>
            <p>{bookingEnabled ? psychologyContent.finalCta.text : 'A área de atendimento será ativada nesta mesma experiência quando as informações profissionais forem atualizadas.'}</p>
            {bookingEnabled ? <ActionLink messageKey={siteConfig.psychology.bookingMessageKey}>Agendar consulta</ActionLink> : null}
          </Reveal>
        </section>
      </div>

      <p className="clinical-note">
        Conteúdo profissional e informativo. O atendimento psicológico não está habilitado nesta versão pública de pré-lançamento.
      </p>
    </div>
  )
}
