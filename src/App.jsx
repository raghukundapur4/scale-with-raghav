import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
