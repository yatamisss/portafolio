import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portafolio from './pages/Portafolio/Portafolio'
import Contacto from './pages/Contacto/Contacto'
import NotFound from './pages/NotFound/NotFound'
import FondoAnimado from './components/FondoAnimado/FondoAnimado'

function App() {

  return (
    <>
      {/* <FondoAnimado />*/}
      <FondoAnimado />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Portafolio />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App
