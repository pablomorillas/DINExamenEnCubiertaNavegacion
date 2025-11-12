import Card from './components/Content'
import Interprete from './components/Interprete'
import {peliculas} from './data/peliculas'

function App() {
  return (
    <>
   <Router>
      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Card peliculas={peliculas} />} />
          <Route path="/interpretes" element={<Interprete />} />
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
