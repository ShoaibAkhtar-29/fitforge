import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import Modal from '../components/Modal'

type Trainer = {
  id: number
  name: string
  specialty: string
  experience: string
  image: string
  bio: string
  approach: string
  specialties: string[]
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: 'Alex Rivera',
    specialty: 'Strength Coach',
    experience: '8 Years Experience',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=700&q=80',
    bio: 'Alex brings a methodical, evidence-based approach to strength development. With a background in competitive powerlifting and years of coaching athletes across ability levels, Alex builds programs that are as technically sound as they are results-driven.',
    approach: 'Technique before intensity. Consistency before intensity. Alex prioritises movement quality and progressive overload to build strength that lasts.',
    specialties: ['Powerlifting', 'Hypertrophy', 'Athletic Strength', 'Barbell Coaching'],
  },
  {
    id: 2,
    name: 'Jordan Marsh',
    specialty: 'HIIT & Cardio Coach',
    experience: '6 Years Experience',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=700&q=80',
    bio: 'Jordan is known for high-energy, structured conditioning sessions that push members to their limits while maintaining clear purpose. Each session is intelligently designed around heart-rate zones, work-to-rest ratios, and cumulative athletic development.',
    approach: 'Hard work, smart structure. Jordan designs every session to build both physical and mental resilience through progressive metabolic conditioning.',
    specialties: ['HIIT Programming', 'Cardio Endurance', 'Group Coaching', 'Metabolic Conditioning'],
  },
  {
    id: 3,
    name: 'Sam Chen',
    specialty: 'Movement Specialist',
    experience: '10 Years Experience',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80',
    bio: 'Sam has spent a decade studying how the body moves and why it sometimes doesn\'t. Bringing expertise in functional movement and mobility, Sam helps members unlock ranges of motion and movement patterns that directly enhance their other training.',
    approach: 'Movement is the foundation. Sam works to eliminate restrictions, build joint resilience, and help athletes access their full athletic potential.',
    specialties: ['Functional Movement', 'Mobility & Flexibility', 'Injury Prevention', 'Corrective Exercise'],
  },
  {
    id: 4,
    name: 'Taylor Brooks',
    specialty: 'Personal Training & Nutrition',
    experience: '5 Years Experience',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=700&q=80',
    bio: 'Taylor specialises in body composition and lifestyle transformation. Combining smart training with evidence-based nutritional guidance, Taylor creates a complete approach that helps clients reach their goals and maintain them for the long term.',
    approach: 'Sustainable change over quick fixes. Taylor designs programs that fit real life and build habits that last beyond the gym.',
    specialties: ['Body Composition', 'Nutrition Guidance', 'Lifestyle Coaching', 'Personal Training'],
  },
  {
    id: 5,
    name: 'Morgan Blake',
    specialty: 'Athletic Performance',
    experience: '9 Years Experience',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=700&q=80',
    bio: 'Morgan has worked with athletes across a wide range of sports, developing periodised programs that peak performance at the right moments. With an analytical, data-informed style of coaching, Morgan is the go-to for members with competitive goals.',
    approach: 'Performance is planned. Morgan uses structured periodisation and objective metrics to take athletic output to its highest possible level.',
    specialties: ['Athletic Periodisation', 'Speed & Power', 'Sport-Specific Conditioning', 'Strength Programming'],
  },
  {
    id: 6,
    name: 'Casey Vance',
    specialty: 'Group & Functional Coach',
    experience: '7 Years Experience',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=80',
    bio: "Casey brings infectious energy and technical precision to every group class. Known for creating sessions that challenge individuals while fostering a strong team atmosphere, Casey's classes are among the most attended at FitForge.",
    approach: 'Push together, grow together. Casey creates group training experiences that are equally demanding, motivating, and technically excellent.',
    specialties: ['Group Classes', 'Functional Training', 'Community Building', 'Movement Coaching'],
  },
]

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [bookingTrainer, setBookingTrainer] = useState<Trainer | null>(null)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const openBooking = (trainer: Trainer) => {
    setBookingTrainer(trainer)
    setBookingSuccess(false)
    setForm({ name: '', email: '', phone: '', date: '', message: '' })
    setErrors({})
    setSelectedTrainer(null)
    setBookingOpen(true)
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.date) e.date = 'Preferred date is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setBookingSuccess(true)
  }

  return (
    <main className="pt-[72px] bg-[#F3F0E8] min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-[#171916] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1600&q=80"
          alt="Trainers"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171916]/80 to-[#171916]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.25em] uppercase mb-4">Expert Guidance</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#F3F0E8] leading-none" style={{ letterSpacing: '-0.03em' }}>
              MEET THE<br /><span className="text-[#A6B28A]">TEAM</span>
            </h1>
            <p className="text-[#85877F] text-lg mt-5 max-w-xl">
              Sample trainer profiles — all information is editable placeholder content pending real team details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm mb-5 aspect-[3/4]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171916]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedTrainer(trainer)}
                      className="flex-1 py-2 text-[#171916] bg-[#F3F0E8]/90 text-xs font-bold uppercase tracking-wide rounded-sm hover:bg-[#F3F0E8] transition-colors backdrop-blur-sm"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => openBooking(trainer)}
                      className="flex-1 py-2 text-[#171916] bg-[#A6B28A] text-xs font-bold uppercase tracking-wide rounded-sm hover:bg-[#F3F0E8] transition-colors"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[#171916] text-xl font-bold">{trainer.name}</h3>
                <p className="text-[#A6B28A] text-sm font-medium mt-0.5">{trainer.specialty}</p>
                <p className="text-[#85877F] text-xs mt-1">{trainer.experience}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {trainer.specialties.slice(0, 3).map(s => (
                    <span key={s} className="text-[10px] text-[#85877F] border border-[#85877F]/30 px-2 py-0.5 rounded-sm">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trainer Profile Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <Modal isOpen={!!selectedTrainer} onClose={() => setSelectedTrainer(null)} size="lg">
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-2/5 aspect-[3/4] md:aspect-auto">
                <img
                  src={selectedTrainer.image}
                  alt={selectedTrainer.name}
                  className="w-full h-full object-cover object-top"
                />
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="absolute top-4 right-4 p-2 bg-[#171916]/60 text-[#F3F0E8] rounded-sm backdrop-blur-sm hover:text-[#A6B28A] transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="md:w-3/5 p-8 overflow-y-auto">
                <p className="text-[#A6B28A] text-xs font-bold tracking-[0.18em] uppercase mb-2">{selectedTrainer.specialty}</p>
                <h2 className="text-[#F3F0E8] text-2xl font-black mb-1">{selectedTrainer.name}</h2>
                <p className="text-[#85877F] text-sm mb-6">{selectedTrainer.experience}</p>
                <p className="text-[#85877F] text-sm leading-relaxed mb-5">{selectedTrainer.bio}</p>
                <div className="mb-6">
                  <p className="text-[#F3F0E8]/40 text-xs uppercase tracking-widest mb-2">Coaching Approach</p>
                  <p className="text-[#F3F0E8]/70 text-sm leading-relaxed italic border-l-2 border-[#A6B28A] pl-4">{selectedTrainer.approach}</p>
                </div>
                <div className="mb-8">
                  <p className="text-[#F3F0E8]/40 text-xs uppercase tracking-widest mb-3">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrainer.specialties.map(s => (
                      <span key={s} className="text-xs text-[#A6B28A] border border-[#A6B28A]/30 px-3 py-1 rounded-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <p className="text-[#85877F]/40 text-xs mb-4 italic">Sample profile — content to be updated with real trainer information.</p>
                <button
                  onClick={() => openBooking(selectedTrainer)}
                  className="w-full py-4 bg-[#A6B28A] text-[#171916] font-bold text-sm tracking-widest uppercase hover:bg-[#F3F0E8] transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
                >
                  Book a Session <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingOpen && (
          <Modal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} title={bookingTrainer ? `Book with ${bookingTrainer.name}` : 'Book a Session'} size="md">
            <div className="p-8">
              {bookingSuccess ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#A6B28A]/20 flex items-center justify-center mx-auto mb-5">
                    <span className="text-[#A6B28A] text-2xl">✓</span>
                  </div>
                  <h3 className="text-[#F3F0E8] text-xl font-bold mb-3">Booking Request Received</h3>
                  <p className="text-[#85877F] text-sm leading-relaxed mb-2">
                    Thanks, {form.name}. Your session request with {bookingTrainer?.name} has been noted.
                  </p>
                  <p className="text-[#85877F]/50 text-xs mb-1">Demo mode — no data was sent to a server.</p>
                  <p className="text-[#85877F]/50 text-xs">In a live system, {bookingTrainer?.name} would confirm within 24 hours.</p>
                  <button
                    onClick={() => setBookingOpen(false)}
                    className="mt-8 px-8 py-3 bg-[#A6B28A] text-[#171916] font-bold text-sm uppercase rounded-sm hover:bg-[#F3F0E8] transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    { id: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+1 000 000 0000' },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={`booking-${field.id}`} className="block text-[#F3F0E8]/60 text-xs uppercase tracking-widest mb-1.5">{field.label}</label>
                      <input
                        id={`booking-${field.id}`}
                        type={field.type}
                        value={form[field.id as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                        className={`w-full bg-[#171916] border text-[#F3F0E8] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none ${errors[field.id] ? 'border-rose-500' : 'border-[#F3F0E8]/10'}`}
                        placeholder={field.placeholder}
                      />
                      {errors[field.id] && <p className="text-rose-500 text-xs mt-1">{errors[field.id]}</p>}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="booking-date" className="block text-[#F3F0E8]/60 text-xs uppercase tracking-widest mb-1.5">Preferred Date</label>
                    <input
                      id="booking-date"
                      type="date"
                      value={form.date}
                      onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                      className={`w-full bg-[#171916] border text-[#F3F0E8] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none ${errors.date ? 'border-rose-500' : 'border-[#F3F0E8]/10'}`}
                    />
                    {errors.date && <p className="text-rose-500 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="booking-message" className="block text-[#F3F0E8]/60 text-xs uppercase tracking-widest mb-1.5">Goals / Notes</label>
                    <textarea
                      id="booking-message"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      rows={3}
                      className="w-full bg-[#171916] border border-[#F3F0E8]/10 text-[#F3F0E8] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none resize-none"
                      placeholder="Tell us about your goals or any injuries we should know about…"
                    />
                  </div>
                  <p className="text-[#85877F]/50 text-xs">Demo prototype — bookings are not processed or stored.</p>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#A6B28A] text-[#171916] font-bold text-sm tracking-widest uppercase hover:bg-[#F3F0E8] transition-all duration-300 rounded-sm"
                  >
                    Request Session
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
