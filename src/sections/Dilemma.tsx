import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Dilemma() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const video = videoRef.current
    if (!section || !text || !video) return

    // Text parallax
    gsap.to(text, {
      y: -80,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    // Video scale reveal
    gsap.from(video.querySelector('video'), {
      scale: 0.85,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'center center',
        scrub: 1,
      },
    })

    // Text fade in
    gsap.from(text.querySelector('h2'), {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: text,
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
      className="relative w-full min-h-[150vh] flex"
      id="dilemma"
    >
      {/* Left Column - Sticky Text */}
      <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center bg-off-white">
        <div ref={textRef} className="px-[5vw]">
          <h2 className="text-h2" style={{ color: '#0a0a0a' }}>
            Data sovereignty shouldn't mean sacrificing cutting-edge intelligence.
          </h2>
          <p className="text-paragraph-large mt-6" style={{ color: '#646466' }}>
            Cloud APIs compromise data sovereignty and cost predictability, while traditional on-premise hardware is prohibitively expensive and complex.
          </p>
        </div>
      </div>

      {/* Right Column - Video */}
      <div ref={videoRef} className="w-1/2 h-[150vh] relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="sticky top-0 w-full h-screen object-cover"
        >
          <source src="/video_banking.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
