import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Plus } from 'lucide-react'
import Modal from '../components/Modal'

type Plan = {
  name: string
  monthlyPrice: number
  annualPrice: number
  featured?: boolean
  features: string[]
  access: string
  pt: string
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Essential',
    monthlyPrice: 49,
    annualPrice: 39,
    access: 'Full facility access during staffed hours',
    pt: 'Not included',
    cta: 'Get Started',
    features: [
      'Full gym floor access',
      'Group class schedule access',
      'Locker & shower facilities',
      'Monthly progress check-in',
      'Member app access',
    ],
  },
  {
    name: 'Performance',
    monthlyPrice: 89,
    annualPrice: 72,
    featured: true,
    access: 'Full facility + priority class access',
    pt: '2 personal training sessions per month',
    cta: 'Join Performance',
    features: [
      'Everything in Essential',
      '2 PT sessions per month',
      'Nutrition guidance sessions',
      'Priority class booking',
      'Recovery lounge access',
      'Bi-monthly body composition assessment',
    ],
  },
  {
    name: 'Elite',
    monthlyPrice: 149,
    annualPrice: 119,
    access: 'Unlimited facility + VIP recovery access',
    pt: 'Unlimited personal training',
    cta: 'Join Elite',
    features: [
      'Everything in Performance',
      'Unlimited personal training',
      'Monthly performance assessments',
      'VIP recovery lounge priority',
      'Fully tailored programming',
      'Priority onboarding & consultation',
    ],
  },
]

const membershipFaqs = [
  {
    q: 'Is there a joining fee?',
    a: 'Joining fee structures will be confirmed by the gym owner. This prototype shows example pricing only and should not be presented as final pricing to prospective members.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Members will be able to change their plan with appropriate notice. Plan change policies and billing adjustment details will be specified during the onboarding process.',
  },
  {
    q: 'Are contracts required?',
    a: 'Contract terms are set by the gym owner and will be detailed in the final membership agreement. Options for rolling monthly or longer-term commitments may be available.',
  },
  {
    q: 'What happens if I miss personal training sessions?',
    a: 'Personal training session policies — including cancellations, rescheduling, and rollovers — will be specified in the membership terms provided by the gym.',
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
        <span
          className="shrink-0 text-[#A6B28A] transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Plus size={16} />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? '300px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <p className="text-[#85877F] text-sm leading-relaxed pb-5 pr-8">{a}</p>
      </div>
    </div>
  )
}

export default function Membership() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const [signupPlan, setSignupPlan] = useState<Plan | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const openSignup = (plan: Plan) => {
    setSignupPlan(plan)
    setSuccess(false)
    setForm({ name: '', email: '', phone: '' })
    setErrors({})
    setModalOpen(true)
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSuccess(true)
  }

  return (
    <main className="pt-[72px] min-h-screen bg-[#F3F0E8]">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-[#171916] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=80"
          alt="Membership"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171916]/80 to-[#171916]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.25em] uppercase mb-4">Choose Your Path</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#F3F0E8] leading-none" style={{ letterSpacing: '-0.03em' }}>
              MEMBERSHIP<br /><span className="text-[#A6B28A]">OPTIONS</span>
            </h1>
            <p className="text-[#85877F] text-lg mt-5 max-w-xl">
              Sample pricing — figures shown are for demonstration purposes and require final approval from the gym owner before publication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-4">
        <div className="flex justify-center">
          <div className="flex items-center bg-white border border-[#171916]/10 rounded-sm p-1 gap-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 text-sm font-bold rounded-sm transition-all duration-200 ${
                billing === 'monthly' ? 'bg-[#171916] text-[#F3F0E8]' : 'text-[#85877F] hover:text-[#171916]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-6 py-2.5 text-sm font-bold rounded-sm transition-all duration-200 flex items-center gap-2 ${
                billing === 'annual' ? 'bg-[#171916] text-[#F3F0E8]' : 'text-[#85877F] hover:text-[#171916]'
              }`}
            >
              Annual
              <span className="text-[10px] text-[#A6B28A] font-bold">SAVE ~20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-sm p-8 ${
                plan.featured
                  ? 'bg-[#171916] ring-1 ring-[#A6B28A] scale-105 shadow-2xl z-10'
                  : 'bg-white border border-[#171916]/10'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#A6B28A] text-[#171916] text-[10px] font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-sm shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h2 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-[#F3F0E8]' : 'text-[#171916]'}`}>{plan.name}</h2>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billing}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className={`text-5xl font-black ${plan.featured ? 'text-[#F3F0E8]' : 'text-[#171916]'}`}>
                      ${billing === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className={`text-sm ${plan.featured ? 'text-[#85877F]' : 'text-[#85877F]'}`}>/month</span>
                  </motion.div>
                </AnimatePresence>
                {billing === 'annual' && (
                  <p className="text-[#A6B28A] text-xs mt-1">Billed annually · Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year</p>
                )}
              </div>

              <div className={`text-xs mb-4 pb-4 border-b ${plan.featured ? 'border-[#F3F0E8]/10' : 'border-[#171916]/10'}`}>
                <p className={`font-semibold mb-1 ${plan.featured ? 'text-[#F3F0E8]/60' : 'text-[#85877F]'}`}>Access</p>
                <p className={plan.featured ? 'text-[#F3F0E8]/70' : 'text-[#171916]/70'}>{plan.access}</p>
              </div>
              <div className={`text-xs mb-6 pb-6 border-b ${plan.featured ? 'border-[#F3F0E8]/10' : 'border-[#171916]/10'}`}>
                <p className={`font-semibold mb-1 ${plan.featured ? 'text-[#F3F0E8]/60' : 'text-[#85877F]'}`}>Personal Training</p>
                <p className={plan.featured ? 'text-[#F3F0E8]/70' : 'text-[#171916]/70'}>{plan.pt}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${plan.featured ? 'text-[#F3F0E8]/70' : 'text-[#85877F]'}`}>
                    <Check size={14} className="text-[#A6B28A] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openSignup(plan)}
                className={`w-full py-4 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.featured
                    ? 'bg-[#A6B28A] text-[#171916] hover:bg-[#F3F0E8]'
                    : 'border border-[#171916] text-[#171916] hover:bg-[#171916] hover:text-[#F3F0E8]'
                }`}
              >
                {plan.cta} <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[#85877F] text-xs mt-10">
          All prices shown are indicative demo figures. Final pricing is subject to owner approval before publication.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-[#F3F0E8] py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.2em] uppercase mb-3">Questions</p>
            <h2 className="text-[#171916] text-4xl font-black" style={{ letterSpacing: '-0.02em' }}>Membership FAQ</h2>
          </motion.div>
          {membershipFaqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#171916] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[#F3F0E8] text-3xl lg:text-4xl font-black mb-5" style={{ letterSpacing: '-0.02em' }}>
              Not sure which plan is right for you?
            </h2>
            <p className="text-[#85877F] text-base mb-8">
              Speak with our team. We'll help match you with the right membership based on your goals and schedule.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 border border-[#F3F0E8]/20 text-[#F3F0E8] font-semibold text-sm tracking-wide uppercase hover:border-[#A6B28A] hover:text-[#A6B28A] transition-all duration-300 rounded-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Signup Modal */}
      <AnimatePresence>
        {modalOpen && (
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={signupPlan ? `Join — ${signupPlan.name} Plan` : 'Join FitForge'} size="md">
            <div className="p-8">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#A6B28A]/20 flex items-center justify-center mx-auto mb-5">
                    <span className="text-[#A6B28A] text-2xl">✓</span>
                  </div>
                  <h3 className="text-[#F3F0E8] text-xl font-bold mb-3">Expression of Interest Received</h3>
                  <p className="text-[#85877F] text-sm leading-relaxed mb-2">
                    Thanks, {form.name}. We've noted your interest in the <strong className="text-[#A6B28A]">{signupPlan?.name}</strong> plan.
                  </p>
                  <p className="text-[#85877F]/50 text-xs mb-1">Demo prototype — no payment has been taken and no data sent to a server.</p>
                  <p className="text-[#85877F]/50 text-xs">A team member would be in touch within 24 hours in a live system.</p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="mt-8 px-8 py-3 bg-[#A6B28A] text-[#171916] font-bold text-sm uppercase rounded-sm hover:bg-[#F3F0E8] transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="bg-[#171916]/50 rounded-sm px-4 py-3 mb-2">
                    <p className="text-[#A6B28A] text-xs font-bold uppercase tracking-widest">Selected Plan</p>
                    <p className="text-[#F3F0E8] font-bold">{signupPlan?.name} — ${billing === 'monthly' ? signupPlan?.monthlyPrice : signupPlan?.annualPrice}/month ({billing})</p>
                  </div>
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { id: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+1 000 000 0000' },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={`signup-${field.id}`} className="block text-[#F3F0E8]/60 text-xs uppercase tracking-widest mb-1.5">{field.label}</label>
                      <input
                        id={`signup-${field.id}`}
                        type={field.type}
                        value={form[field.id as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                        className={`w-full bg-[#171916] border text-[#F3F0E8] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none ${errors[field.id] ? 'border-rose-500' : 'border-[#F3F0E8]/10'}`}
                        placeholder={field.placeholder}
                      />
                      {errors[field.id] && <p className="text-rose-500 text-xs mt-1">{errors[field.id]}</p>}
                    </div>
                  ))}
                  <p className="text-[#85877F]/50 text-xs">Demo only — no payment processed, no data stored on a server.</p>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#A6B28A] text-[#171916] font-bold text-sm tracking-widest uppercase hover:bg-[#F3F0E8] transition-all duration-300 rounded-sm"
                  >
                    Submit Expression of Interest
                  </button>
                </form>
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </main>
  )
}
