import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Platform() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    // Content blocks animation
    const blocks = content.querySelectorAll('.platform-block')
    blocks.forEach((block) => {
      gsap.from(block, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: block,
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
      {/* Platform Content */}
      <div
        ref={contentRef}
        id="platform"
        className="relative px-[5vw] py-12 md:py-16"
        style={{ zIndex: 3, backgroundColor: 'rgba(0,0,0,0.9)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vw] max-w-[90vw] mx-auto">
          {/* Hardware Block */}
          <div className="platform-block">
            <div className="text-eyebrow mb-4">HARDWARE</div>
            <h2 className="text-h2 mb-6" style={{ color: '#ececec' }}>
              Purpose-Built for the AI Era
            </h2>
            <p className="text-paragraph-large mb-6" style={{ color: '#b0b0b2' }}>
              The appliance is not merely a server, but a specialized inference engine. Innovative use of system RAM and optimized processors achieve GPU-level performance at a fraction of traditional costs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Processors', value: 'Dual AMD' },
                { label: 'Memory', value: '1.2TB' },
                { label: 'Model Support', value: 'up to 1.6T Parameters' },
                { label: 'Form Factor', value: '2U Rackmount' },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="p-4"
                  style={{ border: '1px solid #222226', borderRadius: '4px' }}
                >
                  <div className="text-label mb-1" style={{ color: '#646466' }}>
                    {spec.label}
                  </div>
                  <div className="text-base font-medium" style={{ color: '#ececec' }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Block */}
          <div className="platform-block">
            <div className="text-eyebrow mb-4">SOFTWARE</div>
            <h2 className="text-h2 mb-6" style={{ color: '#ececec' }}>
              Intelligence, Operationalized
            </h2>
            <p className="text-paragraph-large mb-6" style={{ color: '#b0b0b2' }}>
              While the hardware provides the power, the software delivers the business value. Four layers of the Asthra Enterprise Suite transform raw compute into measurable outcomes.
            </p>
            <div className="space-y-4">
              {[
                { name: 'Document Intelligence', desc: 'Automated data analysis and extraction' },
                { name: 'Knowledge Base Engine', desc: 'Secure internal RAG capabilities' },
                { name: 'AI Assistant', desc: 'Natural language queries across enterprise data' },
                { name: 'Workflow Automation', desc: 'Operational integration with ERP and CRM' },
              ].map((layer, i) => (
                <div
                  key={layer.name}
                  className="flex items-start gap-4 p-4"
                  style={{ border: '1px solid #222226', borderRadius: '4px' }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-medium rounded-full"
                    style={{ backgroundColor: '#3898ec', color: '#000' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-base font-medium mb-1" style={{ color: '#ececec' }}>
                      {layer.name}
                    </div>
                    <div className="text-sm" style={{ color: '#b0b0b2' }}>
                      {layer.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
