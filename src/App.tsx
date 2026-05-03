import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './sections/Header'
import Hero from './sections/Hero'
import Dilemma from './sections/Dilemma'
import Solution from './sections/Solution'
import Models from './sections/Models'
import Platform from './sections/Platform'

import About from './sections/About'
import Trust from './sections/Trust'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
    })
    lenisRef.current = lenis
    // @ts-ignore
    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="relative bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Dilemma />
        <Solution />
        <Models />
        <Platform />
        <About />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <div className="grain-overlay" />
    </div>
  )
}