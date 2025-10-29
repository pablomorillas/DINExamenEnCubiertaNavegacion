/* import { useState } from 'react' */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Interprete from "./Interprete"

function Contenedor({children}) {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Interprete>
      <div>
        {children}
      </div>
    </Interprete>
    </>
  )
}

export default Contenedor
