import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Servicios from './components/Servicios.jsx'
import SobreNosotros from './components/SobreNosotros.jsx'
import Beneficios from './components/Beneficios.jsx'
import Contacto from './components/Contacto.jsx'
import Politicas from './components/Politicas.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <SobreNosotros />
        <Beneficios />
        <Contacto />
        <Politicas />
      </main>
      <Footer />
    </>
  )
}
