import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
      .from(headlineRef.current, { y: 40, opacity: 0, duration: 1.2 }, '-=0.5')
      .from(sublineRef.current, { y: 20, opacity: 0, duration: 1.0 }, '-=0.6')
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 1.0 }, '-=0.7')

    return () => { tl.kill() }
  }, [])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35 }}
      >
        <source src="/video_hero.mp4" type="video/mp4" />
      </video>

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #000000 80%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div ref={eyebrowRef} className="text-eyebrow mb-4">
          SOVEREIGN AI INFRASTRUCTURE
        </div>

        <h1
          ref={headlineRef}
          className="text-hero mb-4"
        >
          Frontier AI, Entirely Yours.
        </h1>

        <p
          ref={sublineRef}
          className="text-paragraph-large mx-auto max-w-2xl"
          style={{ color: '#b0b0b2' }}
        >
          Deploy full-parameter, locally hosted large language models on your premises. Zero data leakage. Zero per-token costs. Infinite possibilities.
        </p>

        <button
          ref={ctaRef}
          onClick={scrollToContact}
          className="mt-6 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-85"
          style={{ backgroundColor: '#3898ec', color: '#ececec' }}
        >
          Request a Deployment Assessment
        </button>
      </div>
    </section>
  )
}
