function Interprete(props) {
  const { nombre, foto, calificacion } = props
  return (
    <article
      tabIndex="0"
      aria-label={`Intérprete ${nombre}${calificacion ? ', destacado' : ''}`}
      className="flex flex-col items-start gap-3 p-4 rounded-lg"
    >
      <figure className="w-full aspect-square rounded-lg overflow-hidden">
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-contain"
        />
        <figcaption className="sr-only">{props.children}</figcaption>
      </figure>
      <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${
                    calificacion ? "text-red-600" : "text-gray-800"
                    }`}
                >
                    <strong>{nombre}</strong>
                    {calificacion && <em>Calificación: ${calificacion}</em>}
                </h2>
            </header>
      <p className="card__text">{props.children}</p>
    </article>
  )
}

export default Interprete