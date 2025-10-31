import Contenedor from './Contenedor'
import Interprete from './Interprete'
import {peliculas} from './data/peliculas'

function App() {
  return (
    <>
      <h1 className='contenedor_h1'>Mis Intérpretes</h1>

      {/* <div className="cards-grid">
        {peliculas.map(pelicula => (
          pelicula.actores.map((actor, index) => (
            <Contenedor key={index}>
              <Interprete
                nombre={actor.nombre}
                foto={actor.imagen}>
                {actor.biografia}
              </Interprete>
            </Contenedor>
          ))
        ))}
      </div> */}

      <div className="cards-grid">
        {peliculas.filter(peliculas => peliculas.clasificacion === "Drama")
        .map(pelicula => (
          pelicula.actores.map((actor, index) => (
            <Contenedor key={index}>
              <Interprete
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10}>
                {actor.biografia}
              </Interprete>
            </Contenedor>
          ))
        ))}
      </div>
    </>
  )
}

export default App
