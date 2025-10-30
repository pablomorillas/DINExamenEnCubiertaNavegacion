/* import { useState } from 'react' */
import Contenedor from './Contenedor'
import Interprete from './Interprete'

function App() {

  return (
    <>
      <h1 className='contenedor_h1'>Mis Intérpretes</h1>

      <div className="cards-grid">
        <Contenedor>
          <Interprete nombre = "Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
            Biografía: Marlon Brando fue un influyente actor estadounidense...
          </Interprete>
        </Contenedor>

        <Contenedor>
          <Interprete nombre = "Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
            Biografía: Al Pacino es un actor y director de cine estadounidense...
          </Interprete>
        </Contenedor>

        <Contenedor>
          <Interprete nombre = "Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
            Biografía: Marlon Brando fue un influyente actor estadounidense...
          </Interprete>
        </Contenedor>

        <Contenedor>
          <Interprete nombre = "Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
            Biografía: Al Pacino es un actor y director de cine estadounidense...
          </Interprete>
        </Contenedor>
      </div>
    </>
  )
}

export default App
