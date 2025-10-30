function Interprete(props) {
  const {nombre, foto} = props
  return (
    <>
      <div>
        <img src={foto} alt={nombre} />
        <div className="card__body">
          <h2 className="card__title">{nombre}</h2>
          <p className="card__text">{props.children}</p>
        </div>
      </div>
    </>
  )
}

export default Interprete
