import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: 'CyberTrust', tag: 'SOC 2 Type II' },
  { name: 'Banking Standard', tag: 'Central Bank Regulation' },
  { name: 'PrivaSafe', tag: 'HIPAA Certified' },
  { name: 'ISO', tag: 'ISO 27001' },
]

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const header = headerRef.current
    const grid = gridRef.current
    if (!section || !header || !grid) return

    gsap.from(header.children, {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    const items = grid.querySelectorAll('.partner-card')
    gsap.from(items, {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-[6vw] px-[5vw]"
      style={{ backgroundColor: '#ececec' }}
      id="trust"
    >
      <div ref={headerRef} className="text-center mb-[4vw]">
        <div className="text-eyebrow mb-4" style={{ color: '#3898ec' }}>
          TRUSTED BY INDUSTRY LEADERS
        </div>
        <h2 className="text-h2" style={{ color: '#0a0a0a' }}>
          Compliance and sovereignty, certified.
        </h2>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[80vw] mx-auto"
      >
        {partners.map((partner, i) => (
          <div
            key={partner.name}
            className="partner-card flex flex-col items-center justify-center p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #b0b0b2',
              borderRadius: '8px',
              minHeight: '160px',
            }}
          >
            {/* Logo image */}
            <img
              src={`/img_logo_${i + 1}.jpg`}
              alt={partner.name}
              className="w-full h-auto max-h-20 object-contain mb-4"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            {/* Fallback text if image fails */}
            <div className="text-center">
              <div className="text-sm font-semibold mb-1" style={{ color: '#0a0a0a' }}>
                {partner.name}
              </div>
              <div className="text-xs" style={{ color: '#646466' }}>
                {partner.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
