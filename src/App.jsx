import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { ScrollProgressBar, ScrollToTop } from './components/ScrollUI'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  const scrollProgress = useSmoothScroll()

  return (
    <div className="bg-dark text-light">
      {/* Global scroll UI */}
      <ScrollProgressBar scrollProgress={scrollProgress} />
      <ScrollToTop scrollProgress={scrollProgress} />

      <Navbar />
      <Hero />
      <Stats />
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

