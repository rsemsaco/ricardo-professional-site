export default function ProfilePlaceholder({ mode, label, path, id }) {
  return (
    <figure id={id} className={`profile-placeholder profile-placeholder--${mode}`}>
      <div className="profile-placeholder__visual" aria-hidden="true">
        <span className="profile-placeholder__halo" />
        <span className="profile-placeholder__line" />
        <span className="profile-placeholder__mark">RM</span>
      </div>
      <figcaption className="profile-placeholder__caption">
        <div>
          <strong>{label}</strong>
          <span>Espaço reservado para a fotografia final.</span>
        </div>
        <code>{path}</code>
      </figcaption>
    </figure>
  )
}
