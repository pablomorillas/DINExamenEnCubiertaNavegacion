/* import { useState } from 'react' */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Interprete from "./Interprete"

function Contenedor({children}) {
  // simple wrapper that becomes a card; children is expected to be an <Interprete /> element
  return (
    <div className="card">
      {children}
    </div>
  )
}

export default Contenedor
