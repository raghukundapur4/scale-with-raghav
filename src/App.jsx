import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import ProblemHook from './components/ProblemHook'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Process from './components/Process'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { ScrollProgressBar, ScrollToTop, MobileStickyCTA } from './components/ScrollUI'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  const scrollProgress = useSmoothScroll()

  return (
    <div className="bg-surface text-text-primary">
      <ScrollProgressBar scrollProgress={scrollProgress} />
      <ScrollToTop scrollProgress={scrollProgress} />
      <MobileStickyCTA scrollProgress={scrollProgress} />

      <Navbar />
      <Hero />
      <LogoMarquee />
      <ProblemHook />
      <Stats />
      <Portfolio />
      <Services />
      <WhyChoose />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
