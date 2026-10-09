import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

const enquiryTypes = [
  'General Enquiry',
  'Membership Information',
  'Personal Training',
  'Group Classes',
  'Facility Tour',
  'Corporate Wellness',
  'Other',
]

const hours = [
  { day: 'Monday – Friday', time: '5:00 AM – 11:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
  { day: 'Public Holidays', time: 'Please enquire directly' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', enquiryType: '', message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address'
    if (!form.enquiryType) e.enquiryType = 'Please select an enquiry type'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Please enter a message (at least 10 characters)'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => { const ne = { ...e }; delete ne[field]; return ne })
  }

  return (
    <main className="pt-[72px] min-h-screen bg-[#F3F0E8]">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-[#171916] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=1600&q=80"
          alt="Contact FitForge"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171916]/80 to-[#171916]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.25em] uppercase mb-4">We'd Love to Hear From You</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#F3F0E8] leading-none" style={{ letterSpacing: '-0.03em' }}>
              GET IN<br /><span className="text-[#A6B28A]">TOUCH</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Contact Details */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-[#171916] text-2xl font-black mb-6" style={{ letterSpacing: '-0.02em' }}>Contact Details</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#171916] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={15} className="text-[#A6B28A]" />
                  </div>
                  <div>
                    <p className="text-[#171916] font-semibold text-sm">Location</p>
                    <p className="text-[#85877F] text-sm">Your Street Address</p>
                    <p className="text-[#85877F] text-sm">Your City, State, Postcode</p>
                    <p className="text-[#85877F]/50 text-xs mt-1">(Replace with actual address)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#171916] flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-[#A6B28A]" />
                  </div>
                  <div>
                    <p className="text-[#171916] font-semibold text-sm">Phone</p>
                    <p className="text-[#85877F] text-sm">+91 92975 80385</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#171916] flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-[#A6B28A]" />
                  </div>
                  <div>
                    <p className="text-[#171916] font-semibold text-sm">Email</p>
                    <p className="text-[#85877F] text-sm">hello@fitforge.com</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Opening Hours */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-[#171916] text-2xl font-black mb-6 flex items-center gap-2" style={{ letterSpacing: '-0.02em' }}>
                <Clock size={18} className="text-[#A6B28A]" /> Opening Hours
              </h2>
              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center py-2.5 border-b border-[#171916]/10">
                    <span className="text-[#171916] text-sm font-medium">{day}</span>
                    <span className="text-[#85877F] text-sm">{time}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#85877F]/50 text-xs mt-4">Demo values — replace with actual opening hours.</p>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#171916] border border-[#F3F0E8]/5 flex flex-col items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=60)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="relative z-10 text-center p-6">
                  <MapPin size={28} className="text-[#A6B28A] mx-auto mb-3" />
                  <p className="text-[#F3F0E8] font-bold text-sm mb-2">Map Placeholder</p>
                  <p className="text-[#85877F] text-xs leading-relaxed">
                    An interactive Google Map or equivalent will appear here once the gym address is confirmed and an API key is configured.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="text-[#171916] text-2xl font-black mb-8" style={{ letterSpacing: '-0.02em' }}>Send an Enquiry</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#171916] rounded-sm p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#A6B28A]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#A6B28A] text-3xl">✓</span>
                </div>
                <h3 className="text-[#F3F0E8] text-2xl font-bold mb-4">Message Received</h3>
                <p className="text-[#85877F] text-base leading-relaxed mb-3">
                  Thank you, <span className="text-[#F3F0E8]">{form.name}</span>. We've received your {form.enquiryType.toLowerCase()} enquiry.
                </p>
                <p className="text-[#85877F]/60 text-sm mb-2">
                  Demo confirmation — no data was transmitted to a server or email system.
                </p>
                <p className="text-[#85877F]/50 text-xs mb-8">
                  In a live environment, a member of the FitForge team would respond within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', enquiryType: '', message: '' }) }}
                  className="px-8 py-3 bg-[#A6B28A] text-[#171916] font-bold text-sm uppercase rounded-sm hover:bg-[#F3F0E8] transition-all"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-[#171916] text-xs font-bold uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      className={`w-full bg-white border text-[#171916] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none placeholder-[#85877F]/50 ${errors.name ? 'border-rose-500' : 'border-[#171916]/15'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[#171916] text-xs font-bold uppercase tracking-widest mb-2">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className={`w-full bg-white border text-[#171916] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none placeholder-[#85877F]/50 ${errors.email ? 'border-rose-500' : 'border-[#171916]/15'}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-[#171916] text-xs font-bold uppercase tracking-widest mb-2">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    className="w-full bg-white border border-[#171916]/15 text-[#171916] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none placeholder-[#85877F]/50"
                    placeholder="+91 00000 00000 (optional)"
                  />
                </div>
                {/* Enquiry Type */}
                <div>
                  <label htmlFor="contact-type" className="block text-[#171916] text-xs font-bold uppercase tracking-widest mb-2">Enquiry Type *</label>
                  <select
                    id="contact-type"
                    value={form.enquiryType}
                    onChange={e => handleChange('enquiryType', e.target.value)}
                    className={`w-full bg-white border text-[#171916] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none ${errors.enquiryType ? 'border-rose-500' : 'border-[#171916]/15'}`}
                  >
                    <option value="">Select enquiry type…</option>
                    {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.enquiryType && <p className="text-rose-500 text-xs mt-1">{errors.enquiryType}</p>}
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[#171916] text-xs font-bold uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    rows={6}
                    className={`w-full bg-white border text-[#171916] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none resize-none placeholder-[#85877F]/50 ${errors.message ? 'border-rose-500' : 'border-[#171916]/15'}`}
                    placeholder="How can we help you? Tell us about your goals, questions, or what you'd like to know…"
                  />
                  {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#171916] text-[#F3F0E8] font-bold text-sm tracking-widest uppercase hover:bg-[#A6B28A] hover:text-[#171916] transition-all duration-300 rounded-sm"
                  >
                    Send Enquiry <ArrowRight size={14} />
                  </button>
                  <p className="text-[#85877F]/60 text-xs">Demo prototype — enquiries are not sent to any server.</p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#171916] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[#F3F0E8] text-3xl lg:text-4xl font-black mb-5" style={{ letterSpacing: '-0.02em' }}>
              Ready to take the first step?
            </h2>
            <p className="text-[#85877F] text-base mb-8">Browse our programs and membership options, or walk in for a guided tour.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/membership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#A6B28A] text-[#171916] font-bold text-sm uppercase rounded-sm hover:bg-[#F3F0E8] transition-all duration-300"
              >
                View Memberships
              </a>
              <a
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#F3F0E8]/20 text-[#F3F0E8] font-semibold text-sm uppercase rounded-sm hover:border-[#A6B28A] hover:text-[#A6B28A] transition-all duration-300"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
