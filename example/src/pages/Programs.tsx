import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Clock, BarChart2, ArrowRight, X } from 'lucide-react'
import Modal from '../components/Modal'

type Program = {
  id: number
  title: string
  category: string
  tag: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  duration: string
  image: string
  desc: string
  fullDesc: string
  schedule: string
}

const programs: Program[] = [
  {
    id: 1,
    title: 'Strength & Conditioning',
    category: 'Strength',
    tag: 'STRENGTH',
    difficulty: 'Intermediate',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    desc: 'Build maximal strength and athletic conditioning through compound lifts, progressive overload, and structured periodisation.',
    fullDesc: 'Our Strength & Conditioning program is the cornerstone of serious athletic development. Built around the major compound movements — squat, deadlift, press, and row — this program applies scientifically sound periodisation to deliver consistent strength gains over time.\n\nEach session is structured to develop neural efficiency, muscular hypertrophy, and joint stability. You will be coached on technique before intensity, ensuring longevity as well as performance.',
    schedule: 'Mon / Wed / Fri — 06:00, 12:00, 18:00',
  },
  {
    id: 2,
    title: 'Personal Training',
    category: 'Personal',
    tag: 'PERSONAL',
    difficulty: 'All Levels',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    desc: '1-on-1 coaching sessions tailored entirely to your individual goals, movement history, and available training time.',
    fullDesc: 'Personal Training at FitForge is a fully bespoke experience. Your coach will assess your movement quality, training history, and goals to design a program that is yours alone.\n\nSession structure, intensity, and progression are adjusted in real time based on your response. This is the most efficient path to measurable, lasting results.',
    schedule: 'Available 7 days — by appointment',
  },
  {
    id: 3,
    title: 'HIIT & Metabolic',
    category: 'HIIT',
    tag: 'HIIT',
    difficulty: 'Advanced',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
    desc: 'High-intensity interval training designed to maximise caloric output, cardiovascular capacity, and metabolic conditioning.',
    fullDesc: 'FitForge HIIT sessions are coach-led, structured, and designed with intention. Rather than random bursts of effort, our metabolic conditioning work follows specific work-to-rest protocols proven to improve VO2 max, lactate threshold, and body composition.\n\nExpect varied modalities — rowing, assault bike, bodyweight work, and kettlebells — kept purposeful and progressively challenging.',
    schedule: 'Tue / Thu / Sat — 07:00, 17:30',
  },
  {
    id: 4,
    title: 'Cardio & Endurance',
    category: 'Cardio',
    tag: 'CARDIO',
    difficulty: 'Beginner',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    desc: 'Structured aerobic sessions to build a strong cardiovascular base, improve stamina, and support all-round athletic health.',
    fullDesc: 'A strong aerobic base is the foundation of every other physical quality. Our Cardio & Endurance program builds sustainable aerobic capacity through treadmill, rower, bike, and outdoor run protocols — all structured around heart-rate zones and progressive duration targets.\n\nIdeal for those returning to training, cross-training alongside strength work, or preparing for an endurance event.',
    schedule: 'Daily — 06:30, 09:00, 19:00',
  },
  {
    id: 5,
    title: 'Functional Training',
    category: 'Functional',
    tag: 'FUNCTIONAL',
    difficulty: 'Intermediate',
    duration: '55 min',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    desc: 'Train movement patterns — not just muscles. Develop total-body athleticism through carries, pulls, pushes, and rotational work.',
    fullDesc: 'Functional Training bridges the gap between isolated strength and real-world athletic performance. Sessions are built around movement archetypes: hinge, squat, push, pull, carry, and rotation.\n\nUsing free weights, cables, kettlebells, and the functional rig, you will develop body control, strength through range, and coordination — qualities that transfer to every physical pursuit.',
    schedule: 'Mon / Wed / Fri — 07:30, 17:00',
  },
  {
    id: 6,
    title: 'Mobility & Flexibility',
    category: 'Mobility',
    tag: 'MOBILITY',
    difficulty: 'All Levels',
    duration: '40 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    desc: 'Guided mobility and flexibility sessions to restore joint range, reduce stiffness, and support recovery between training days.',
    fullDesc: 'Often the most overlooked element of a training program, mobility work is what allows you to train consistently and without accumulating unnecessary wear. Our sessions combine static stretching, active mobility drills, breathing, and restorative movement.\n\nOpen to all members regardless of program, these classes are an essential complement to any strength or conditioning routine.',
    schedule: 'Tue / Thu / Sun — 08:00, 11:00',
  },
]

const categories = ['All', 'Strength', 'Personal', 'HIIT', 'Cardio', 'Functional', 'Mobility']

const difficultyColor = (d: Program['difficulty']) => {
  switch (d) {
    case 'Beginner': return 'text-emerald-500'
    case 'Intermediate': return 'text-amber-500'
    case 'Advanced': return 'text-rose-500'
    case 'All Levels': return 'text-[#A6B28A]'
  }
}

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [enquiryProgram, setEnquiryProgram] = useState<Program | null>(null)
  const [enquirySuccess, setEnquirySuccess] = useState(false)
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', message: '' })

  const filtered = programs.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const handleEnquire = (program: Program) => {
    setEnquiryProgram(program)
    setEnquirySuccess(false)
    setEnquiryForm({ name: '', email: '', message: '' })
    setSelectedProgram(null)
    setEnquiryOpen(true)
  }

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnquirySuccess(true)
  }

  return (
    <main className="pt-[72px] bg-[#171916] min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1600&q=80"
          alt="Programs"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171916]/80 to-[#171916]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#A6B28A] text-xs font-bold tracking-[0.25em] uppercase mb-4">What We Offer</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#F3F0E8] leading-none" style={{ letterSpacing: '-0.03em' }}>
              TRAINING<br /><span className="text-[#A6B28A]">PROGRAMS</span>
            </h1>
            <p className="text-[#85877F] text-lg mt-5 max-w-xl">
              Six purpose-built programs designed to meet you at your level and take you further than you thought possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold tracking-wide uppercase rounded-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#A6B28A] text-[#171916]'
                    : 'border border-[#F3F0E8]/15 text-[#85877F] hover:border-[#A6B28A] hover:text-[#A6B28A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#85877F]" />
            <input
              type="text"
              placeholder="Search programs…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#1e1f1c] border border-[#F3F0E8]/10 text-[#F3F0E8] text-sm pl-9 pr-4 py-2.5 rounded-sm focus:border-[#A6B28A] outline-none placeholder-[#85877F] min-w-[200px]"
            />
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#85877F] text-center py-20"
            >
              No programs match your search.
            </motion.p>
          ) : (
            <motion.div
              key="grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#1e1f1c] border border-[#F3F0E8]/8 rounded-sm overflow-hidden group hover:border-[#A6B28A]/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f1c] to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[#A6B28A] text-[10px] font-bold tracking-[0.18em] border border-[#A6B28A]/40 px-2.5 py-1 rounded-sm bg-[#171916]/60 backdrop-blur-sm">
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#F3F0E8] text-lg font-bold mb-2">{p.title}</h3>
                    <p className="text-[#85877F] text-sm leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                    <div className="flex items-center gap-4 mb-5 text-xs">
                      <span className={`flex items-center gap-1.5 font-semibold ${difficultyColor(p.difficulty)}`}>
                        <BarChart2 size={12} /> {p.difficulty}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#85877F]">
                        <Clock size={12} /> {p.duration}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProgram(p)}
                        className="flex-1 py-2.5 border border-[#F3F0E8]/15 text-[#F3F0E8] text-xs font-bold tracking-wide uppercase hover:border-[#A6B28A] hover:text-[#A6B28A] transition-all duration-200 rounded-sm"
                      >
                        View Program
                      </button>
                      <button
                        onClick={() => handleEnquire(p)}
                        className="flex-1 py-2.5 bg-[#A6B28A] text-[#171916] text-xs font-bold tracking-wide uppercase hover:bg-[#F3F0E8] transition-all duration-200 rounded-sm"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <Modal isOpen={!!selectedProgram} onClose={() => setSelectedProgram(null)} size="lg">
            <div className="relative">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full aspect-[16/7] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f1c] to-transparent" />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 p-2 bg-[#171916]/70 text-[#F3F0E8] hover:text-[#A6B28A] rounded-sm transition-colors backdrop-blur-sm"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="text-[#A6B28A] text-[10px] font-bold tracking-[0.18em] border border-[#A6B28A]/40 px-2.5 py-1 rounded-sm bg-[#171916]/60 backdrop-blur-sm">
                  {selectedProgram.tag}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-[#F3F0E8] text-2xl font-bold mb-1">{selectedProgram.title}</h2>
              <div className="flex items-center gap-4 mb-6 text-xs">
                <span className={`flex items-center gap-1.5 font-semibold ${difficultyColor(selectedProgram.difficulty)}`}>
                  <BarChart2 size={12} /> {selectedProgram.difficulty}
                </span>
                <span className="flex items-center gap-1.5 text-[#85877F]">
                  <Clock size={12} /> {selectedProgram.duration}
                </span>
              </div>
              {selectedProgram.fullDesc.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#85877F] text-sm leading-relaxed mb-4">{para}</p>
              ))}
              <div className="mt-6 pt-6 border-t border-[#F3F0E8]/8">
                <p className="text-[#F3F0E8]/40 text-xs uppercase tracking-widest mb-2">Schedule</p>
                <p className="text-[#F3F0E8] text-sm font-medium">{selectedProgram.schedule}</p>
              </div>
              <button
                onClick={() => handleEnquire(selectedProgram)}
                className="mt-8 w-full py-4 bg-[#A6B28A] text-[#171916] font-bold text-sm tracking-widest uppercase hover:bg-[#F3F0E8] transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
              >
                Enquire About This Program <ArrowRight size={14} />
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {enquiryOpen && (
          <Modal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} title={`Enquire: ${enquiryProgram?.title}`} size="md">
            <div className="p-8">
              {enquirySuccess ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#A6B28A]/20 flex items-center justify-center mx-auto mb-5">
                    <span className="text-[#A6B28A] text-2xl">✓</span>
                  </div>
                  <h3 className="text-[#F3F0E8] text-xl font-bold mb-3">Enquiry Received</h3>
                  <p className="text-[#85877F] text-sm leading-relaxed mb-2">
                    Thank you, {enquiryForm.name}. This is a demo confirmation — no data has been sent to a server.
                  </p>
                  <p className="text-[#85877F]/50 text-xs">In a live environment, our team would respond within 24 hours.</p>
                  <button
                    onClick={() => setEnquiryOpen(false)}
                    className="mt-8 px-8 py-3 bg-[#A6B28A] text-[#171916] font-bold text-sm uppercase rounded-sm hover:bg-[#F3F0E8] transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#F3F0E8]/60 text-xs uppercase tracking-widest mb-1.5">Name</label>
                    <input
                      required
                      type="text"
                      value={enquiryForm.name}
                      onChange={e => setEnquiryForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-[#171916] border border-[#F3F0E8]/10 text-[#F3F0E8] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F3F0E8]/60 text-xs uppercase tracking-widest mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      value={enquiryForm.email}
                      onChange={e => setEnquiryForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-[#171916] border border-[#F3F0E8]/10 text-[#F3F0E8] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F3F0E8]/60 text-xs uppercase tracking-widest mb-1.5">Message</label>
                    <textarea
                      value={enquiryForm.message}
                      onChange={e => setEnquiryForm(f => ({ ...f, message: e.target.value }))}
                      rows={4}
                      className="w-full bg-[#171916] border border-[#F3F0E8]/10 text-[#F3F0E8] text-sm px-4 py-3 rounded-sm focus:border-[#A6B28A] outline-none resize-none"
                      placeholder="Tell us about your goals…"
                    />
                  </div>
                  <p className="text-[#85877F]/50 text-xs">Demo mode — submissions are not sent to any server.</p>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#A6B28A] text-[#171916] font-bold text-sm tracking-widest uppercase hover:bg-[#F3F0E8] transition-all duration-300 rounded-sm"
                  >
                    Submit Enquiry
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
