import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const blocksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const header = headerRef.current
    const blocks = blocksRef.current
    if (!section || !header || !blocks) return

    const isMobile = window.innerWidth < 768

    // On mobile, skip GSAP animations entirely — elements stay visible
    if (!isMobile) {
      gsap.from(header.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      const items = blocks.querySelectorAll('.about-block')
      gsap.from(items, {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: blocks,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-[8vw] px-[5vw] md:pt-[8vw] pt-20"
      style={{ backgroundColor: '#000000', zIndex: 10 }}
      id="about"
    >
      <div ref={headerRef} className="text-center mb-[5vw]">
        <div className="text-eyebrow mb-4">ABOUT US</div>
        <h2 className="text-h2 mx-auto max-w-[55vw]" style={{ color: '#ececec' }}>
          Intelligence should never come at the cost of sovereignty.
        </h2>
      </div>

      <div
        ref={blocksRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-[3vw] max-w-[90vw] mx-auto"
      >
        {/* Mission */}
        <div
          className="about-block p-8"
          style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid #222226',
            borderRadius: '4px',
          }}
        >
          <div className="text-eyebrow mb-4">OUR MISSION</div>
          <h3 className="text-xl font-medium mb-4" style={{ color: '#ececec' }}>
            Democratize Frontier AI
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#b0b0b2' }}>
            To democratize access to frontier AI for enterprises, ensuring that intelligence never comes at the cost of sovereignty. Every organization deserves cutting-edge AI without sacrificing data control.
          </p>
        </div>

        {/* Leadership */}
        <div
          className="about-block p-8"
          style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid #222226',
            borderRadius: '4px',
          }}
        >
          <div className="text-eyebrow mb-4">LEADERSHIP</div>
          <h3 className="text-xl font-medium mb-4" style={{ color: '#ececec' }}>
            Deep Expertise, Proven Track Record
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#b0b0b2' }}>
            Our founders bring a unique combination of deep semiconductor supply chain access, extensive enterprise integration experience, and proven track records in sovereign technology deployment across regulated industries.
          </p>
        </div>

        {/* Partnerships */}
        <div
          className="about-block p-8"
          style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid #222226',
            borderRadius: '4px',
          }}
        >
          <div className="text-eyebrow mb-4">PARTNERSHIPS</div>
          <h3 className="text-xl font-medium mb-4" style={{ color: '#ececec' }}>
            Strategic Hardware Alliances
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#b0b0b2' }}>
            Strategic partnerships with leading hardware providers, emphasizing the significant advantage of regional exclusivity. This ensures consistent supply, priority access, and localized support for our clients.
          </p>
        </div>
      </div>
    </section>
  )
}
