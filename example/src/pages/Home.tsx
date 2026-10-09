import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Clock, MapPin, Star, Plus } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const programs = [
  {
    id: 1,
    title: 'Strength & Conditioning',
    desc: 'Build a foundation of raw power and athletic durability through progressive resistance training and compound lifts.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    tag: 'STRENGTH',
  },
  {
    id: 2,
    title: 'HIIT & Metabolic',
    desc: 'High-intensity intervals designed to maximize caloric burn, boost cardiovascular fitness, and accelerate fat loss.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
    tag: 'HIIT',
  },
  {
    id: 3,
    title: 'Functional Movement',
    desc: 'Train the way your body was designed to move — fluid, powerful, and purposeful across every plane of motion.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    tag: 'FUNCTIONAL',
  },
]

const trainers = [
  {
    name: 'Alex Rivera',
    role: 'Strength Coach',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80',
    exp: '8 Years Experience',
  },
  {
    name: 'Jordan Marsh',
    role: 'HIIT & Cardio',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    exp: '6 Years Experience',
  },
  {
    name: 'Sam Chen',
    role: 'Movement Specialist',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    exp: '10 Years Experience',
  },
]

const facilities = [
  { label: 'Free Weight Studio', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80' },
  { label: 'Cardio & Conditioning', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { label: 'Functional Rig', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80' },
  { label: 'Recovery Lounge', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80' },
]

const testimonials = [
  {
    name: 'Marcus T.',
    text: 'FitForge changed how I approach training entirely. The environment, the coaches, the programming — it all just works.',
    role: 'Member since 2023',
  },
  {
    name: 'Priya S.',
    text: "The personal training here is exceptional. My coach tailored everything to my goals and I've seen results I didn't think were possible.",
    role: 'Performance Member',
  },
  {
    name: 'Daniel K.',
    text: 'Finally a gym that takes quality seriously. The facilities are immaculate, the community is motivating, and the programming is smart.',
    role: 'Elite Member',
  },
]

const faqs = [
  {
    q: 'Do I need prior fitness experience to join?',
    a: 'Not at all. FitForge welcomes members at every level, from complete beginners to advanced athletes. Your initial consultation will help us tailor a program that meets you exactly where you are.',
  },
  {
    q: 'What is included in a standard membership?',
    a: 'Every membership includes full access to training facilities during staffed hours, access to group classes, and monthly progress consultations. Higher tiers include personal training sessions and enhanced recovery access.',
  },
  {
    q: 'Can I try the gym before committing?',
    a: 'Yes. We offer a complimentary day pass for prospective members. Get in touch via our contact page to arrange your visit and a brief tour of the facilities.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We are open Monday through Friday 5:00–23:00, Saturday 7:00–21:00, and Sunday 8:00–18:00. Hours are subject to adjustment on public holidays.',
  },
  {
    q: 'How do I book a session with a trainer?',
    a: 'You can book directly through our Trainers page, or contact us at reception. Personal training sessions are available as standalone bookings or as part of a Performance or Elite membership.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-[#171916] font-semibold text-base group-hover:text-[#A6B28A] transition-colors duration-200 pr-6">{q}</span>
        <span className="shrink-0 text-[#A6B28A] transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <Plus size={16} />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <p className="text-[#85877F] text-sm leading-relaxed pb-5 pr-8">{a}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[680px] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=85"
            alt="FitForge gym training floor"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171916] via-[#171916]/60 to-[#171916]/20" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#A6B28A] text-xs font-bold tracking-[0.25em] uppercase mb-6"
            >
              Premium Fitness Studio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-[#F3F0E8] leading-none mb-6"
              style={{ letterSpacing: '-0.03em', fontFamily: 'Manrope, sans-serif' }}
            >
              BUILT BY<br />
              <span className="text-[#A6B28A]">DISCIPLINE.</span><br />
              DEFINED BY YOU.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[#F3F0E8]/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Train with purpose. Build strength. Become the strongest version of yourself.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#A6B28A] text-[#171916] font-bold text-sm tracking-wide uppercase hover:bg-[#F3F0E8] transition-all duration-300 rounded-sm"
                style={{ letterSpacing: '0.08em' }}
              >
                Explore Memberships
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#F3F0E8]/30 text-[#F3F0E8] font-semibold text-sm tracking-wide uppercase hover:border-[#A6B28A] hover:text-[#A6B28A] transition-all duration-300 rounded-sm"
                style={{ letterSpacing: '0.08em' }}
              >
                Discover Our Programs
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom info bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-14 flex flex-wrap items-center gap-8 pt-8 border-t border-[#F3F0E8]/10"
          >
            <div className="flex items-center gap-2 text-[#85877F] text-sm">
              <MapPin size={14} className="text-[#A6B28A]" />
              <span>Your City — Address on Enquiry</span>
            </div>
            <div className="flex items-center gap-2 text-[#85877F] text-sm">
              <Clock size={14} className="text-[#A6B28A]" />
              <span>Open Mon–Fri 5:00 – 23:00</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-10 z-10 hidden lg:block"
        >
          <ChevronDown size={20} className="text-[#F3F0E8]/30" />
        </motion.div>
      </section>

      {/* ── PHILOSOPHY STATEMENT ── */}
      <section className="bg-[#F3F0E8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Philosophy</p>
              <h2 className="text-[#171916] text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Training is a<br />craft. We treat<br />it that way.
              </h2>
              <p className="text-[#85877F] text-base leading-relaxed mb-4">
                FitForge was built on a simple belief: that serious training deserves a serious environment. Not a crowded box gym, not a fleeting trend. A place where methodology, coaching, and culture align to produce real, lasting results.
              </p>
              <p className="text-[#85877F] text-base leading-relaxed">
                Every program we offer is intentional. Every piece of equipment earns its place. And every coach on our floor is selected for expertise, not just credentials.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80"
                alt="FitForge training philosophy"
                className="w-full aspect-[4/3] object-cover rounded-sm"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#171916] px-8 py-6 rounded-sm hidden lg:block">
                <p className="text-[#A6B28A] text-3xl font-black">500+</p>
                <p className="text-[#F3F0E8]/60 text-xs tracking-wide mt-1">Active Members</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className="bg-[#171916] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">What We Offer</p>
              <h2 className="text-[#F3F0E8] text-4xl lg:text-5xl font-black leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Training<br />Programs
              </h2>
            </div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-[#A6B28A] text-sm font-semibold hover:text-[#F3F0E8] transition-colors group"
            >
              View All Programs
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
              >
                <Link to="/programs">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171916] via-[#171916]/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[#A6B28A] text-[10px] font-bold tracking-[0.2em] border border-[#A6B28A]/40 px-3 py-1.5 rounded-sm bg-[#171916]/40 backdrop-blur-sm">
                        {p.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-[#F3F0E8] text-xl font-bold mb-2 leading-tight">{p.title}</h3>
                      <p className="text-[#F3F0E8]/60 text-sm leading-relaxed line-clamp-2">{p.desc}</p>
                      <div className="mt-4 flex items-center gap-2 text-[#A6B28A] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Learn More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="bg-[#F3F0E8] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">The Space</p>
            <h2 className="text-[#171916] text-4xl lg:text-5xl font-black leading-tight" style={{ letterSpacing: '-0.02em' }}>
              World-Class<br />Facilities
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-sm group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <div className={i === 0 ? 'aspect-square' : 'aspect-square'}>
                  <img
                    src={f.image}
                    alt={f.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171916]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[#F3F0E8] text-sm font-semibold">{f.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINERS PREVIEW ── */}
      <section className="bg-[#171916] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">The Team</p>
              <h2 className="text-[#F3F0E8] text-4xl lg:text-5xl font-black leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Expert<br />Coaches
              </h2>
            </div>
            <Link
              to="/trainers"
              className="inline-flex items-center gap-2 text-[#A6B28A] text-sm font-semibold hover:text-[#F3F0E8] transition-colors group"
            >
              Meet the Team
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to="/trainers">
                  <div className="relative overflow-hidden rounded-sm mb-4 aspect-[3/4]">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171916]/60 to-transparent" />
                  </div>
                  <div>
                    <h3 className="text-[#F3F0E8] text-lg font-bold">{t.name}</h3>
                    <p className="text-[#A6B28A] text-sm">{t.role}</p>
                    <p className="text-[#85877F] text-xs mt-1">{t.exp}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP PREVIEW ── */}
      <section className="bg-[#F3F0E8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">Pricing</p>
            <h2 className="text-[#171916] text-4xl lg:text-5xl font-black" style={{ letterSpacing: '-0.02em' }}>Choose Your Plan</h2>
            <p className="text-[#85877F] text-base mt-4 max-w-md mx-auto">
              Transparent, straightforward pricing. <span className="text-[#85877F]/60 text-sm">(Sample pricing — subject to final approval)</span>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Essential', price: 49, features: ['Full gym access', 'Group classes', 'Locker access', 'Monthly check-in'] },
              { name: 'Performance', price: 89, features: ['Everything in Essential', '2 PT sessions/month', 'Nutrition guidance', 'Priority class booking', 'Recovery access'], featured: true },
              { name: 'Elite', price: 149, features: ['Everything in Performance', 'Unlimited PT access', 'Monthly assessments', 'VIP recovery lounge', 'Tailored programming'] },
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-sm p-8 relative ${
                  plan.featured
                    ? 'bg-[#171916] text-[#F3F0E8] ring-1 ring-[#A6B28A]'
                    : 'bg-white border border-[#171916]/10'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#A6B28A] text-[#171916] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-lg font-bold mb-2 ${plan.featured ? 'text-[#F3F0E8]' : 'text-[#171916]'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-black ${plan.featured ? 'text-[#F3F0E8]' : 'text-[#171916]'}`}>${plan.price}</span>
                  <span className={`text-sm ${plan.featured ? 'text-[#85877F]' : 'text-[#85877F]'}`}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${plan.featured ? 'text-[#F3F0E8]/70' : 'text-[#85877F]'}`}>
                      <span className="w-4 h-4 rounded-full bg-[#A6B28A]/20 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A6B28A]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/membership"
                  className={`block text-center py-3 text-sm font-bold tracking-wide uppercase rounded-sm transition-all duration-300 ${
                    plan.featured
                      ? 'bg-[#A6B28A] text-[#171916] hover:bg-[#F3F0E8]'
                      : 'border border-[#171916] text-[#171916] hover:bg-[#171916] hover:text-[#F3F0E8]'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTIVATIONAL BANNER ── */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=80"
          alt="Athlete training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#171916]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.25em] uppercase mb-6">Your Potential</p>
            <h2 className="text-[#F3F0E8] text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-8" style={{ letterSpacing: '-0.03em' }}>
              THE WORK<br />
              <span className="text-[#A6B28A]">IS THE WAY.</span>
            </h2>
            <p className="text-[#F3F0E8]/60 text-lg max-w-xl mx-auto mb-10">
              Results don't arrive with motivation. They're forged through consistency, smart programming, and a space that challenges you to go further.
            </p>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#A6B28A] text-[#171916] font-bold text-sm tracking-widest uppercase hover:bg-[#F3F0E8] transition-all duration-300 rounded-sm"
            >
              Start Your Journey
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#171916] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">Sample Testimonials</p>
            <h2 className="text-[#F3F0E8] text-4xl lg:text-5xl font-black" style={{ letterSpacing: '-0.02em' }}>
              What Members<br />Are Saying
            </h2>
            <p className="text-[#85877F] text-sm mt-3">The following are representative sample reviews for demonstration purposes.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1e1f1c] border border-[#F3F0E8]/8 rounded-sm p-8"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="text-[#A6B28A] fill-[#A6B28A]" />
                  ))}
                </div>
                <p className="text-[#F3F0E8]/80 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="text-[#F3F0E8] text-sm font-bold">{t.name}</p>
                  <p className="text-[#85877F] text-xs mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F3F0E8] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">Common Questions</p>
            <h2 className="text-[#171916] text-4xl lg:text-5xl font-black" style={{ letterSpacing: '-0.02em' }}>
              Frequently<br />Asked
            </h2>
          </motion.div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ── */}
      <section className="bg-[#171916] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-6">Ready to Begin?</p>
            <h2 className="text-[#F3F0E8] text-4xl md:text-6xl font-black leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              Your Strongest<br />Self Awaits.
            </h2>
            <p className="text-[#85877F] text-lg mb-10 max-w-xl mx-auto">
              Join a community of dedicated athletes and get access to world-class coaching, premium facilities, and a program designed around your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#A6B28A] text-[#171916] font-bold text-sm tracking-widest uppercase hover:bg-[#F3F0E8] transition-all duration-300 rounded-sm"
              >
                View Memberships
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 border border-[#F3F0E8]/20 text-[#F3F0E8] font-semibold text-sm tracking-wide uppercase hover:border-[#A6B28A] hover:text-[#A6B28A] transition-all duration-300 rounded-sm"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
