export default function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-header__text">{text}</p> : null}
    </header>
  )
}
