import { Link } from 'react-router-dom'
import { ArrowUp, MapPin, Phone, Mail, Clock } from 'lucide-react'

const SvgInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const SvgYoutube = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)
const SvgFacebook = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const SvgX = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.16 2.25h6.961l4.252 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const programLinks = [
  { label: 'Strength & Conditioning', to: '/programs' },
  { label: 'Personal Training', to: '/programs' },
  { label: 'HIIT Classes', to: '/programs' },
  { label: 'Cardio & Endurance', to: '/programs' },
  { label: 'Functional Training', to: '/programs' },
  { label: 'Mobility & Flexibility', to: '/programs' },
]

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { icon: SvgInstagram, label: 'Instagram', href: 'https://www.instagram.com/' },
  { icon: SvgYoutube, label: 'YouTube', href: 'https://www.youtube.com/' },
  { icon: SvgFacebook, label: 'Facebook', href: 'https://www.facebook.com/' },
  { icon: SvgX, label: 'X / Twitter', href: 'https://x.com/' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#171916] border-t border-[#F3F0E8]/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-[#A6B28A] font-black text-3xl tracking-tight leading-none" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.04em' }}>
                FIT<span className="text-[#F3F0E8]">FORGE</span>
              </span>
            </Link>
            <p className="text-[#85877F] text-sm leading-relaxed mb-8 max-w-xs">
              A premium training environment built for those who refuse to settle. Every session. Every rep. Every result.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-[#F3F0E8]/15 text-[#85877F] hover:text-[#A6B28A] hover:border-[#A6B28A] rounded-sm transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#F3F0E8] text-xs font-bold tracking-[0.15em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#85877F] text-sm hover:text-[#A6B28A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[#F3F0E8] text-xs font-bold tracking-[0.15em] uppercase mb-6">Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[#85877F] text-sm hover:text-[#A6B28A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-[#F3F0E8] text-xs font-bold tracking-[0.15em] uppercase mb-6">Contact & Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#85877F]">
                <MapPin size={14} className="text-[#A6B28A] mt-0.5 shrink-0" />
                <span>Your Gym Address<br /><span className="text-[#85877F]/60 text-xs">(Replace with actual address)</span></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#85877F]">
                <Phone size={14} className="text-[#A6B28A] shrink-0" />
                <Link to="/contact" className="hover:text-[#A6B28A] transition-colors">+91 92975 80385</Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#85877F]">
                <Mail size={14} className="text-[#A6B28A] shrink-0" />
                <Link to="/contact" className="hover:text-[#A6B28A] transition-colors">hello@fitforge.com</Link>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#F3F0E8]/8">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={13} className="text-[#A6B28A]" />
                <span className="text-[#F3F0E8] text-xs font-semibold tracking-wide uppercase">Opening Hours</span>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#85877F]">
                  <span>Mon – Fri</span>
                  <span className="text-[#F3F0E8]/70">5:00 – 23:00</span>
                </div>
                <div className="flex justify-between text-[#85877F]">
                  <span>Saturday</span>
                  <span className="text-[#F3F0E8]/70">7:00 – 21:00</span>
                </div>
                <div className="flex justify-between text-[#85877F]">
                  <span>Sunday</span>
                  <span className="text-[#F3F0E8]/70">8:00 – 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#F3F0E8]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#85877F]">
            <span>© {year} FitForge. All rights reserved.</span>
            <Link to="/contact" className="hover:text-[#A6B28A] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#A6B28A] transition-colors">Terms of Service</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 flex items-center justify-center border border-[#F3F0E8]/15 text-[#85877F] hover:text-[#A6B28A] hover:border-[#A6B28A] rounded-sm transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      {/* Bold Footer Tagline */}
      <div className="border-t border-[#F3F0E8]/8 bg-[#1e1f1c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-center">
          <p className="text-[#F3F0E8]/20 text-xs font-bold tracking-[0.3em] uppercase">
            YOUR NEXT CHAPTER STARTS HERE.
          </p>
        </div>
      </div>
    </footer>
  )
}
