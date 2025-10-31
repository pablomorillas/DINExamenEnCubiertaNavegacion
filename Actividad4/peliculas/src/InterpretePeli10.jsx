function InterpretePeli10(props) {
  const {nombre, foto, esNota10} = props
  return (
    <div className="card__content">
      <img src={foto} alt={nombre} />
      <div className="card__body">
        <h2 className={`"card__title" ${esNota10 ? "text-red-500" : '' }`}>{nombre}</h2>
        <p className="card__text">{props.children}</p>
      </div>
    </div>
  )
}

export default InterpretePeli10