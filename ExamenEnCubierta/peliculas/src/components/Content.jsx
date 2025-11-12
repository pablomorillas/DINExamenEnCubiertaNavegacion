/* import { useState } from 'react' */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function Content({ children }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
      </section>
      {children}
    </main>
  )
}

export default Content
