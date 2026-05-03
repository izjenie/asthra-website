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
      className="relative w-full flex flex-col md:flex-row"
      id="dilemma"
    >
      {/* Text */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-off-white py-16 md:py-0 md:h-screen md:sticky md:top-0">
        <div ref={textRef} className="px-6 md:px-[5vw] max-w-xl">
          <h2 className="text-h2" style={{ color: '#0a0a0a' }}>
            Data sovereignty shouldn't mean sacrificing cutting-edge intelligence.
          </h2>
          <p className="text-paragraph-large mt-4" style={{ color: '#646466' }}>
            Cloud APIs compromise data sovereignty and cost predictability, while traditional on-premise hardware is prohibitively expensive and complex.
          </p>
        </div>
      </div>

      {/* Video */}
      <div ref={videoRef} className="w-full md:w-1/2 md:h-screen relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-64 md:h-screen object-cover"
        >
          <source src="/video_banking.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
