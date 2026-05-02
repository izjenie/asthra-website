import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    num: '01',
    title: 'Absolute Data Sovereignty',
    desc: 'Your data never leaves your facility. Full residency compliance guaranteed.',
    image: '/img_card_1.jpg',
  },
  {
    num: '02',
    title: 'Predictable Economics',
    desc: 'Fixed monthly subscription. No per-token costs. No cloud dependencies.',
    image: '/img_card_2.jpg',
  },
  {
    num: '03',
    title: 'Frontier Performance',
    desc: 'Capable of running 671B parameter models with optimized inference.',
    image: '/img_card_3.jpg',
  },
  {
    num: '04',
    title: 'Fully Managed Service',
    desc: 'Hardware, software, and updates bundled as a complete solution.',
    image: '/img_card_4.jpg',
  },
]

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const header = headerRef.current
    const cards = cardsRef.current
    if (!section || !header || !cards) return

    // Header animation
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

    // Cards staggered animation
    const cardElements = cards.querySelectorAll('.pillar-card')
    gsap.from(cardElements, {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cards,
        start: 'top 80%',
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
      className="relative w-full py-[10vw] px-[5vw]"
      style={{ backgroundColor: '#000000' }}
      id="solution"
    >
      <div ref={headerRef} className="text-center mb-[5vw]">
        <div className="text-eyebrow mb-4">THE SOLUTION</div>
        <h2 className="text-h2 mx-auto max-w-[50vw]" style={{ color: '#ececec' }}>
          AI-as-a-service, delivered entirely on-premise.
        </h2>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2vw]"
      >
        {pillars.map((pillar) => (
          <div
            key={pillar.num}
            className="pillar-card group relative overflow-hidden"
            style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid #222226',
              borderRadius: '4px',
            }}
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, #0a0a0a 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Text Content */}
            <div className="p-6">
              <div className="text-eyebrow mb-2" style={{ fontSize: '11px' }}>
                {pillar.num} {pillar.title.toUpperCase().split(' ')[0]}
              </div>
              <h3 className="text-lg font-medium mb-3" style={{ color: '#ececec' }}>
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#b0b0b2' }}>
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
