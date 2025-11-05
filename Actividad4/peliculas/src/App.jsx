import Contenedor from './Contenedor'
import Interprete from './Interprete'
import { peliculas } from './data/peliculas'

function App() {
  return (
    <>
      <section aria-labelledby="main-section-title" className="w-full max-w7xl text-center">
        <h1 className='contenedor_h1'>Mis Interprete</h1>
      </section>

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

      <article className="cards-grid">
        {peliculas
          .filter(pelicula => pelicula.clasificacion === "Drama")
          .map(pelicula =>
            pelicula.actores.map((actor, index) => (
              <Contenedor key={index}>
                <Interprete
                  nombre={actor.nombre}
                  foto={actor.imagen}
                  esNota10={pelicula.nota === 10}
                >
                  {actor.biografia}
                </Interprete>
              </Contenedor>
            ))
          )}
      </article>
    </>
  )
}

export default App
