import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const industryDetails = [
  {
    id: 'banking',
    title: 'Banking & Finance',
    focus: 'AML transaction monitoring, credit risk analysis, KYC verification',
    regulatory: 'Compliance with Central Bank Regulation',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    focus: 'Clinical summarization, patient triage, medical record analysis',
    regulatory: 'Strict adherence to patient data privacy (HIPAA/local equivalents)',
  },
  {
    id: 'retail',
    title: 'Retail',
    focus: 'Demand forecasting, supplier contract intelligence, inventory optimization',
    regulatory: 'Data security for proprietary operational metrics',
  },
  {
    id: 'defense',
    title: 'Government & Defense',
    focus: 'Classified document analysis, secure inter-agency data sharing',
    regulatory: 'Absolute data sovereignty and national security mandates',
  },
]

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const details = detailsRef.current
    if (!section || !details) return

    // Detail cards animation
    const cards = details.querySelectorAll('.detail-card')
    cards.forEach((card) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'url(/img_government.jpg) no-repeat center center / cover',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Industry Details */}
      <div
        ref={detailsRef}
        id="solutions"
        className="relative px-[5vw] py-12 md:py-16"
        style={{ zIndex: 3, backgroundColor: 'rgba(0,0,0,0.9)' }}
      >
        <div className="text-center mb-[5vw]">
          <div className="text-eyebrow mb-4">SOLUTIONS</div>
          <h2 className="text-h2" style={{ color: '#ececec' }}>
            Tailored AI for Regulated Industries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vw] max-w-[90vw] mx-auto">
          {industryDetails.map((detail) => (
            <div
              key={detail.id}
              className="detail-card p-8"
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid #222226',
                borderRadius: '4px',
              }}
            >
              <div className="text-eyebrow mb-3">{detail.title.toUpperCase()}</div>
              <h3 className="text-xl font-medium mb-3" style={{ color: '#ececec' }}>
                {detail.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: '#b0b0b2' }}>
                <span className="font-medium" style={{ color: '#ececec' }}>Key Focus: </span>
                {detail.focus}
              </p>
              <p className="text-sm" style={{ color: '#646466' }}>
                <span className="font-medium" style={{ color: '#b0b0b2' }}>Regulatory: </span>
                {detail.regulatory}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
