import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
        duration: 0.4,
        ease: 'power2.out',
      })
    }
  }, [visible])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      // @ts-ignore
      const lenis = window.__lenis
      if (lenis && lenis.scrollTo) {
        lenis.scrollTo(el, { offset: 0, duration: 1.5 })
      } else {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  const scrollToTop = () => {
    // @ts-ignore
    const lenis = window.__lenis
    if (lenis && lenis.scrollTo) {
      lenis.scrollTo(0, { duration: 1.5 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'Platform', id: 'platform' },
    { label: 'Models', id: 'models' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-14"
        style={{ background: 'transparent' }}
      >
        <div
          className="text-off-white text-xs tracking-[0.3em] font-medium cursor-pointer"
          onClick={scrollToTop}
        >
          ASTHRA
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-off-white text-xs tracking-wide hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:block text-off-white text-xs border border-off-white rounded-full px-4 py-1.5 hover:bg-off-white hover:text-black transition-all duration-300"
          >
            Request Assessment
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-off-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)' }}
        >
          <button
            className="absolute top-4 right-6 text-off-white p-1"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-display text-2xl text-off-white hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollTo('contact')}
            className="mt-4 text-off-white text-sm border border-off-white rounded-full px-6 py-2 hover:bg-off-white hover:text-black transition-all duration-300"
          >
            Request Assessment
          </button>
        </div>
      )}
    </>
  )
}
