import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Intentional Programming', desc: 'Every session is built with a purpose. No filler, no guesswork — only methods that deliver measurable progress.' },
  { title: 'Expert Coaching', desc: 'Our coaches are selected for their depth of knowledge, communication, and ability to push you intelligently past your limits.' },
  { title: 'Premium Environment', desc: 'A training space that demands excellence. Curated equipment, immaculate facilities, and a culture that raises the standard.' },
  { title: 'Sustainable Results', desc: 'We build athletes for the long term. Our approach prioritises longevity, resilience, and results that compound over time.' },
]

export default function About() {
  return (
    <main className="pt-[72px]">
      {/* ── CINEMATIC BANNER ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=1800&q=85"
          alt="FitForge training environment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171916] via-[#171916]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.25em] uppercase mb-4">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#F3F0E8] leading-none" style={{ letterSpacing: '-0.03em' }}>
              ABOUT<br /><span className="text-[#A6B28A]">FITFORGE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="bg-[#F3F0E8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-4">Who We Are</p>
              <h2 className="text-[#171916] text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Built differently,<br />for those who<br />train differently.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[#85877F] text-base leading-relaxed mb-5">
                FitForge was conceived as an alternative to the ordinary gym experience. We believe that the environment you train in shapes not only your physical output, but your mental relationship with the process itself.
              </p>
              <p className="text-[#85877F] text-base leading-relaxed mb-5">
                From the layout of our training floor to the calibre of our coaching team, every decision at FitForge is deliberate. We don't believe in trends. We believe in principles — movement quality, progressive overload, recovery, and consistency.
              </p>
              <p className="text-[#171916] text-base font-semibold leading-relaxed border-l-2 border-[#A6B28A] pl-5">
                "Our mission is to create a training space that is genuinely worthy of the effort our members bring to it every day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#171916] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Values</p>
            <h2 className="text-[#F3F0E8] text-4xl lg:text-5xl font-black" style={{ letterSpacing: '-0.02em' }}>
              What We<br />Stand For
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F3F0E8]/8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#171916] p-10"
              >
                <span className="text-[#A6B28A] text-4xl font-black leading-none">0{i + 1}</span>
                <h3 className="text-[#F3F0E8] text-xl font-bold mt-4 mb-3">{v.title}</h3>
                <p className="text-[#85877F] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITY IMAGES ── */}
      <section className="bg-[#F3F0E8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">The Environment</p>
            <h2 className="text-[#171916] text-4xl lg:text-5xl font-black" style={{ letterSpacing: '-0.02em' }}>
              Where Training<br />Gets Serious
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80"
                alt="FitForge training floor"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <div className="grid grid-rows-2 gap-6">
              {['https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'].map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="overflow-hidden rounded-sm"
                >
                  <img src={src} alt={`Facility ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE / TEAM INTRO ── */}
      <section className="bg-[#171916] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-4">The Culture</p>
              <h2 className="text-[#F3F0E8] text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                A Community<br />Built on<br />Discipline
              </h2>
              <p className="text-[#85877F] text-base leading-relaxed mb-5">
                At FitForge, we foster a culture that is focused, supportive, and free from ego. Whether you're training alone or in a group environment, you'll find a space that takes your effort seriously.
              </p>
              <p className="text-[#85877F] text-base leading-relaxed">
                Our coaching team is the backbone of everything we do. Experienced, methodical, and genuinely invested in each member's progress — they are coaches in the truest sense of the word.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80"
                alt="FitForge coaching culture"
                className="w-full aspect-[4/3] object-cover rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#F3F0E8] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#171916] text-4xl lg:text-5xl font-black mb-6" style={{ letterSpacing: '-0.02em' }}>
              Ready to become<br />part of FitForge?
            </h2>
            <p className="text-[#85877F] text-base mb-10">
              Explore our membership options or get in touch to schedule a tour of the facilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#171916] text-[#F3F0E8] font-bold text-sm tracking-widest uppercase hover:bg-[#A6B28A] hover:text-[#171916] transition-all duration-300 rounded-sm"
              >
                View Memberships <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 border border-[#171916] text-[#171916] font-semibold text-sm tracking-wide uppercase hover:bg-[#171916] hover:text-[#F3F0E8] transition-all duration-300 rounded-sm"
              >
                Book a Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
