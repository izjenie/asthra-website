import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const models = [
  { name: 'DeepSeek-R1', params: '671B', precision: 'FP8', status: 'Available', desc: 'Reasoning-focused large language model with advanced chain-of-thought capabilities.' },
  { name: 'DeepSeek-V3.2', params: '671B', precision: 'FP8', status: 'Available', desc: 'General-purpose LLM with strong performance across coding, math, and reasoning tasks.' },
  { name: 'Kimi-K2.6', params: '1T', precision: 'INT4', status: 'Available', desc: 'Long-context model supporting up to 2M tokens for extensive document analysis.' },
  { name: 'GLM-5.1', params: '754B', precision: 'FP8', status: 'Available', desc: 'Bilingual model with robust cross-lingual reasoning and multilingual capabilities.' },
  { name: 'Minimax-2.5', params: '230B', precision: 'FP8', status: 'Available', desc: 'High-efficiency inference model optimized for enterprise conversational AI.' },
  { name: 'DeepSeek-V4', params: '1.6T', precision: 'FP8', status: 'Coming Soon', desc: 'Next-generation architecture with enhanced reasoning and tool-use capabilities.' },
]

export default function Models() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const header = headerRef.current
    const list = listRef.current
    if (!section || !header || !list) return

    gsap.from(header.children, {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    const items = list.querySelectorAll('.model-row')
    gsap.from(items, {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: list,
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
      className="relative w-full"
      style={{ backgroundColor: '#000000', zIndex: 5 }}
      id="models"
    >
      <div className="py-[5vw] px-[5vw]">
        <div ref={headerRef} className="text-center mb-[3vw]">
          <div className="text-eyebrow mb-3">MODEL INVENTORY</div>
          <h2 className="text-h2 mx-auto max-w-[60vw]" style={{ color: '#ececec' }}>
            Full-parameter frontier models. Zero compromise.
          </h2>
          <p className="text-base md:text-lg mx-auto max-w-[50vw] mt-3" style={{ color: '#b0b0b2' }}>
            Every model runs at full parameter count on your premises. Mixed precision optimized per model. No distillation. No quantization loss.
          </p>
        </div>

        <div
          ref={listRef}
          className="max-w-[80vw] mx-auto"
        >
          {models.map((model, i) => (
            <div
              key={model.name}
              className="model-row"
              style={{
                borderBottom: '1px solid #222226',
                borderTop: i === 0 ? '1px solid #222226' : 'none',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-4 px-4 md:px-6 gap-3 md:gap-0 hover:bg-[#0c0c0e] transition-colors duration-300">
                {/* Left: Number + Name */}
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className="text-xs font-medium flex-shrink-0"
                    style={{ color: '#3898ec', minWidth: '24px' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="font-display text-lg md:text-xl font-medium"
                    style={{ color: '#ececec' }}
                  >
                    {model.name}
                  </div>
                </div>

                {/* Right: Params + Precision + Status */}
                <div className="flex items-center gap-4 md:gap-6 flex-wrap">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: '#646466' }}>Params</div>
                      <div className="text-sm font-medium" style={{ color: '#ececec' }}>{model.params}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: '#646466' }}>Precision</div>
                      <div className="text-sm font-medium" style={{ color: '#ececec' }}>{model.precision}</div>
                    </div>
                  </div>

                  <div
                    className="px-3 py-1 text-xs rounded-full font-medium flex-shrink-0"
                    style={{
                      backgroundColor: model.status === 'Available' ? 'rgba(56, 152, 236, 0.15)' : 'rgba(176, 176, 178, 0.1)',
                      color: model.status === 'Available' ? '#3898ec' : '#b0b0b2',
                      border: `1px solid ${model.status === 'Available' ? 'rgba(56, 152, 236, 0.3)' : 'rgba(176, 176, 178, 0.2)'}`,
                    }}
                  >
                    {model.status}
                  </div>
                </div>
              </div>

              {/* Description row */}
              <div className="px-4 md:px-6 pb-4 md:pb-4 pt-0 md:pt-0 -mt-1 md:mt-0">
                <p className="text-sm" style={{ color: '#646466' }}>
                  {model.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spec Banner */}
        <div className="max-w-[80vw] mx-auto mt-[3vw] grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Max Parameters', value: '1.6T' },
            { label: 'Context Window', value: '2M Tokens' },
            { label: 'Inference Engine', value: 'vLLM / TGI' },
            { label: 'Precision', value: 'FP8 / INT4' },
          ].map((spec) => (
            <div
              key={spec.label}
              className="text-center p-3 md:p-4"
              style={{ border: '1px solid #222226', borderRadius: '4px' }}
            >
              <div className="text-label mb-1" style={{ color: '#646466' }}>
                {spec.label}
              </div>
              <div className="font-display text-base md:text-lg" style={{ color: '#ececec' }}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
