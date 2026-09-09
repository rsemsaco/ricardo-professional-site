export default function ProfilePlaceholder({ mode, label, path }) {
  return (
    <figure className={`profile-placeholder profile-placeholder--${mode}`}>
      <div className="profile-placeholder__visual" aria-hidden="true">
        <span className="profile-placeholder__ring" />
        <span className="profile-placeholder__mark">RM</span>
      </div>
      <figcaption className="profile-placeholder__caption">
        <strong>{label}</strong>
        <span>Imagem reservada para a etapa de fotografia.</span>
        <code>{path}</code>
      </figcaption>
    </figure>
  )
}
