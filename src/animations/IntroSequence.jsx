export default function IntroSequence({ active }) {
  if (!active) return null

  return (
    <div className="intro-sequence" aria-hidden="true">
      <div className="intro-sequence__grain" />
      <div className="intro-sequence__orb intro-sequence__orb--one" />
      <div className="intro-sequence__orb intro-sequence__orb--two" />
      <div className="intro-sequence__center">
        <span className="intro-sequence__monogram">RM</span>
        <div className="intro-sequence__trace"><i /></div>
        <strong>RICARDO MAGGESSI</strong>
        <span>entre o humano e o tecnológico</span>
      </div>
    </div>
  )
}
