/* import { useState } from 'react' */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Interprete from "./Interprete"

function Contenedor({ children }) {
  // simple wrapper that becomes a card; children is expected to be an <Interprete /> element
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="w-[400px] h-[600px] bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >

      {children}
    </main>
  )
}

export default Contenedor
