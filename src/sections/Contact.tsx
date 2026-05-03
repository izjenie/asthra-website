import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const textItemsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formOpen, setFormOpen] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const indicator = indicatorRef.current
    const textItems = textItemsRef.current
    if (!section || !indicator || !textItems) return

    const items = textItems.querySelectorAll('.reveal-text')
    const winHeight = window.innerHeight

    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight

      // Update indicator height
      if (indicator) {
        indicator.style.height = `${(scrollY / (docHeight - winHeight)) * 100}%`
      }

      // Text reveal logic
      items.forEach((item) => {
        const el = item as HTMLElement
        const offsetCenter = el.offsetTop + el.offsetHeight / 2
        const progress = (scrollY + winHeight / 2 - offsetCenter + section.offsetTop) / winHeight

        if (offsetCenter <= scrollY + winHeight / 2 + section.offsetTop) {
          const val = gsap.utils.clamp(0, 1, gsap.utils.mapRange(0.3, 0.7, 0, 1, progress))
          el.style.filter = `blur(${gsap.utils.interpolate(10, 0, val)}px)`
          el.style.opacity = `${gsap.utils.interpolate(0.2, 1, val)}`
          el.style.transform = `perspective(1000px) rotateX(${gsap.utils.interpolate(90, 0, val)}deg)`
          el.style.color = '#ececec'
        } else {
          const val = gsap.utils.clamp(0, 1, gsap.utils.mapRange(0.3, 0.7, 0, 1, progress))
          el.style.filter = `blur(${gsap.utils.interpolate(0, 10, val)}px)`
          el.style.opacity = `${gsap.utils.interpolate(1, 0.2, val)}`
          el.style.transform = `perspective(1000px) rotateX(${gsap.utils.interpolate(0, -90, val)}deg)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ minHeight: '150vh', backgroundColor: '#000000' }}
      id="contact"
    >
      {/* Progress Line */}
      <div
        ref={indicatorRef}
        className="fixed left-1/2 top-0 w-px hidden md:block"
        style={{
          backgroundColor: '#3898ec',
          zIndex: 100,
          height: '0%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Content */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center px-[5vw]">
        <div ref={textItemsRef} className="text-center space-y-8">
          <div
            className="reveal-text font-display"
            style={{
              fontSize: 'clamp(32px, 5vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#ececec',
              filter: 'blur(10px)',
              opacity: 0.2,
              transform: 'perspective(1000px) rotateX(90deg)',
              transition: 'none',
            }}
          >
            Ready to Deploy
          </div>
          <div
            className="reveal-text font-display"
            style={{
              fontSize: 'clamp(32px, 5vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#ececec',
              filter: 'blur(10px)',
              opacity: 0.2,
              transform: 'perspective(1000px) rotateX(90deg)',
              transition: 'none',
            }}
          >
            Sovereign AI?
          </div>
          <div
            className="reveal-text font-display"
            style={{
              fontSize: 'clamp(32px, 5vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#ececec',
              filter: 'blur(10px)',
              opacity: 0.2,
              transform: 'perspective(1000px) rotateX(90deg)',
              transition: 'none',
            }}
          >
            Request Assessment
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setFormOpen(true)}
          className="mt-12 w-36 h-36 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
          style={{
            background: 'conic-gradient(from 0deg, #3898ec, transparent 60%, transparent)',
            padding: '2px',
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#000000' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ececec" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Contact Info */}
      <div className="relative px-[5vw] py-[10vw]" style={{ zIndex: 3 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3vw] max-w-[90vw] mx-auto">
          <div>
            <div className="text-label mb-3" style={{ color: '#646466' }}>SINGAPORE</div>
            <p className="text-sm" style={{ color: '#b0b0b2' }}>
              ASTHRA NUVENTURES PTE. LTD.<br />
              138 ROBINSON ROAD, #02-26<br />
              OXLEY TOWER, Singapore 68906<br />
              Enterprise Sales: sales@asthra.io
            </p>
          </div>
          <div>
            <div className="text-label mb-3" style={{ color: '#646466' }}>PARTNERSHIPS</div>
            <p className="text-sm" style={{ color: '#b0b0b2' }}>
              For partnerships inquiries:<br />
              partnerships@asthra.io
            </p>
          </div>
          <div>
            <div className="text-label mb-3" style={{ color: '#646466' }}>SUPPORT</div>
            <p className="text-sm" style={{ color: '#b0b0b2' }}>
              24/7 Enterprise Support<br />
              support@asthra.io
            </p>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {formOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setFormOpen(false)}
        >
          <div
            className="w-full max-w-lg p-8 relative"
            style={{ backgroundColor: '#0a0a0a', border: '1px solid #222226', borderRadius: '8px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-4 right-4 text-light-grey hover:text-off-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="text-eyebrow mb-2">GET STARTED</div>
            <h3 className="text-xl font-medium mb-6" style={{ color: '#ececec' }}>
              Request a Deployment Assessment
            </h3>

            <form
              ref={formRef}
              action="https://formsubmit.co/website@asthra.io"
              method="POST"
              className="space-y-4"
            >
              {/* formsubmit.co config */}
              <input type="hidden" name="_subject" value="New Deployment Assessment Request - asthra.io" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : 'https://asthra.io'} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              {[
                { label: 'Full Name', type: 'text', name: 'name' },
                { label: 'Company', type: 'text', name: 'company' },
                { label: 'Email', type: 'email', name: 'email' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-label block mb-1.5" style={{ color: '#646466' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-colors"
                    style={{
                      color: '#ececec',
                      border: '1px solid #222226',
                      borderRadius: '4px',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#3898ec'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#222226'
                    }}
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-85"
                style={{ backgroundColor: '#3898ec', color: '#ececec' }}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
