function Interprete(props) {
  const { nombre, foto, esNota10 } = props 
  return (
    <article
      tabIndex="0"
      aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`}
      className="card__content"
    >
      <figure className="card__body">
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <figcaption className="sr-only">{props.children}</figcaption>
      </figure>
      <header>
        <h2>
          <strong>{nombre}</strong>
          {esNota10 && <em> – Intérprete destacado</em>}
        </h2>
      </header>
      <p className="card__text">{props.children}</p>
    </article>
  )
}

export default Interprete