import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHome = location.pathname === '/'
  const navBg = scrolled || !isHome

  return (
    <>
      {/* ── HEADER ── */}
      <header
        style={{ height: 72, zIndex: 1000 }}
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          navBg
            ? 'bg-[#171916] border-b border-white/[0.08] shadow-xl'
            : 'bg-gradient-to-b from-[#171916]/80 to-transparent backdrop-blur-[2px]'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between"
          style={{ height: 72 }}
        >
          {/* Wordmark */}
          <Link to="/" className="flex items-center group" style={{ zIndex: 1001 }}>
            <span
              className="font-black text-2xl leading-none transition-colors duration-300"
              style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.04em' }}
            >
              <span className="text-[#A6B28A] group-hover:text-[#F3F0E8] transition-colors duration-300">FIT</span>
              <span className="text-[#F3F0E8] group-hover:text-[#A6B28A] transition-colors duration-300">FORGE</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                      active ? 'text-[#A6B28A]' : 'text-[#F3F0E8]/70 hover:text-[#F3F0E8]'
                    }`}
                  >
                    {link.label}
                    <span
                      className="absolute left-0 -bottom-0.5 h-px bg-[#A6B28A] transition-all duration-300"
                      style={{ width: active ? '100%' : '0%' }}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/membership"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#A6B28A] text-[#171916] text-sm font-bold rounded-sm hover:bg-[#F3F0E8] transition-all duration-300"
              style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              Join the Club
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#F3F0E8] hover:text-[#A6B28A] transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{ zIndex: 1001 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed inset-0 bg-[#171916] flex flex-col"
            style={{ zIndex: 999, paddingTop: 72 }}
          >
            <div className="flex flex-col px-8 py-10 gap-1 overflow-y-auto">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.to
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.3, ease: 'easeOut' }}
                  >
                    <Link
                      to={link.to}
                      className={`block text-3xl font-black py-4 border-b transition-colors duration-200 ${
                        active
                          ? 'text-[#A6B28A] border-[#A6B28A]/20'
                          : 'text-[#F3F0E8] border-white/[0.08] hover:text-[#A6B28A]'
                      }`}
                      style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.02em' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38, duration: 0.3 }}
                className="mt-8"
              >
                <Link
                  to="/membership"
                  className="inline-flex items-center px-8 py-4 bg-[#A6B28A] text-[#171916] text-sm font-bold rounded-sm hover:bg-[#F3F0E8] transition-all duration-300"
                  style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  Join the Club
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8 text-[#85877F] text-sm"
              >
                +91 92975 80385
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
