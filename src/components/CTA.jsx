import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Calendar, Check, MessageCircle, Clock, Globe, ArrowLeft } from 'lucide-react'
import Button from './ui/Button'
import Input from './ui/Input'

const benefits = [
  'Free website & funnel audit',
  'Automation opportunity review',
  'Custom launch roadmap',
  'No commitment required',
]

// Safe event tracking helper
const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// Generate next 4 business days starting from today (excluding Sunday)
function getAvailableDates() {
  const dates = []
  const today = new Date()
  let current = new Date(today)

  while (dates.length < 4) {
    current.setDate(current.getDate() + 1)
    const day = current.getDay()
    if (day !== 0) { // Exclude Sunday
      const dayName = current.toLocaleDateString('en-US', { weekday: 'short' })
      const dayNum = current.getDate()
      const monthName = current.toLocaleDateString('en-US', { month: 'short' })
      dates.push({
        label: `${dayName}, ${monthName} ${dayNum}`,
        value: current.toISOString().split('T')[0],
        fullString: `${dayName}, ${monthName} ${dayNum}, 2026`
      })
    }
  }
  return dates
}

function CTA() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState('Website + Automation')
  const [status, setStatus] = useState('idle') // idle, submitting, success (shows calendar), booked
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const availableDates = useMemo(() => getAvailableDates(), [])
  const timeSlots = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM']

  const handleFormStart = () => {
    trackEvent('lead_form_start', { project_type: projectType })
  }

  const handleSubmitDetails = (event) => {
    event.preventDefault()
    if (!name.trim()) {
      setStatus('error_name')
      return
    }
    if (!email.includes('@')) {
      setStatus('error_email')
      return
    }

    setStatus('submitting')
    trackEvent('lead_form_submit', {
      user_name: name,
      user_email: email,
      project_type: projectType
    })

    // Simulate saving lead, then show calendar step
    setTimeout(() => {
      setStatus('success')
    }, 600)
  }

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) return

    setStatus('submitting_booking')
    trackEvent('calendar_booking_confirm', {
      user_name: name,
      user_email: email,
      project_type: projectType,
      booked_date: selectedDate.fullString,
      booked_time: selectedTime
    })

    setTimeout(() => {
      setStatus('booked')
    }, 600)
  }

  const handleWhatsAppDirect = () => {
    trackEvent('click_whatsapp_cta', { location: 'cta_section' })
    const message = encodeURIComponent(
      `Hi Raghav, I'm interested in a custom roadmap for my business.\nName: ${name || 'Visitor'}\nEmail: ${email || 'Not provided'}\nNeed: ${projectType}`
    )
    window.open(`https://wa.me/918722947700?text=${message}`, '_blank')
  }

  const handleWhatsAppBookingConfirm = () => {
    trackEvent('click_whatsapp_booking_confirm', { location: 'cta_section' })
    const dateStr = selectedDate ? selectedDate.label : ''
    const message = encodeURIComponent(
      `Hi Raghav! I just requested a roadmap and scheduled a call for ${dateStr} at ${selectedTime}.\nMy Email: ${email}`
    )
    window.open(`https://wa.me/918722947700?text=${message}`, '_blank')
  }

  return (
    <section id="cta-form" className="section-padding bg-surface">
      <div className="site-container">
        <motion.div
          layout
          className="relative overflow-hidden rounded-[2rem] bg-ink shadow-elevated"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(5,150,105,0.2),transparent_60%)]" />
          <div className="relative grid gap-0 lg:grid-cols-2">
            
            {/* Left side content panel */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                  <Calendar size={14} /> Free Strategy Call & Audit
                </span>
                <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                  Ready to turn your website into a growth system?
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Claim your free 15-minute web and automation audit. Get a custom roadmap detailing exactly where your leads are dropping off.
                </p>
              </div>

              {/* Dynamic Benefits Panel - Hides when booked to save space */}
              {status !== 'booked' && (
                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">What you get:</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {benefits.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                          <Check size={12} />
                        </span>
                        <span className="text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right side interactive card panel */}
            <div className="border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16 bg-white/5 backdrop-blur-md flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Name and Email Details */}
                {(status === 'idle' || status === 'error_name' || status === 'error_email' || status === 'submitting') && (
                  <motion.div
                    key="step-details"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">1. Share your project details</h3>
                      <p className="text-sm text-slate-400 mt-1">Fill in the fields below to personalize your roadmap.</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmitDetails}>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Your Name</label>
                        <Input
                          type="text"
                          required
                          value={name}
                          onFocus={handleFormStart}
                          onChange={(e) => {
                            setName(e.target.value)
                            if(status === 'error_name') setStatus('idle')
                          }}
                          placeholder="e.g. Vikram Nair"
                          className="border-white/10 bg-white/10 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:ring-emerald-400/10"
                        />
                        {status === 'error_name' && (
                          <p className="mt-1 text-xs text-red-400 font-semibold">Please enter your name.</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Work Email</label>
                        <Input
                          type="email"
                          required
                          value={email}
                          onFocus={handleFormStart}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            if(status === 'error_email') setStatus('idle')
                          }}
                          placeholder="name@company.com"
                          className="border-white/10 bg-white/10 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:ring-emerald-400/10"
                        />
                        {status === 'error_email' && (
                          <p className="mt-1 text-xs text-red-400 font-semibold">Please enter a valid email address.</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">What do you want to scale?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Website / Shopify', 'CRM & WhatsApp API', 'Lead Funnels', 'Other'].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setProjectType(type)}
                              className={`rounded-xl px-3 py-2.5 text-xs font-semibold text-center transition border ${
                                projectType === type
                                  ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
                                  : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button as="button" type="submit" className="w-full gap-2 py-3.5 text-sm bg-emerald-500 hover:bg-emerald-600">
                          {status === 'submitting' ? 'Processing...' : 'Generate My Custom Roadmap'} <ArrowRight size={16} />
                        </Button>
                      </div>
                    </form>

                    <div className="flex items-center justify-center gap-2 pt-2">
                      <span className="h-px bg-white/10 flex-1" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">or</span>
                      <span className="h-px bg-white/10 flex-1" />
                    </div>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      <MessageCircle size={16} className="text-emerald-400" /> Chat on WhatsApp Directly
                    </button>

                    <p className="text-[10px] text-center text-slate-500">
                      ⚡ 1 spot remaining for this month's custom audits.
                    </p>
                  </motion.div>
                )}

                {/* STEP 2: Calendar Scheduler Widget */}
                {(status === 'success' || status === 'submitting_booking') && (
                  <motion.div
                    key="step-calendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">2. Select Date & Time</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Pick a slot for your 15-minute Strategy Call.</p>
                      </div>
                      <button
                        onClick={() => setStatus('idle')}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
                      >
                        <ArrowLeft size={12} /> Edit Info
                      </button>
                    </div>

                    {/* Interactive Calendar layout */}
                    <div className="space-y-4">
                      {/* Date selections */}
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Available Days</span>
                        <div className="grid grid-cols-2 gap-2">
                          {availableDates.map((date) => (
                            <button
                              key={date.value}
                              onClick={() => {
                                setSelectedDate(date)
                                setSelectedTime(null) // Reset time slot on date change
                              }}
                              className={`rounded-xl px-2.5 py-3 text-xs font-bold text-center transition border ${
                                selectedDate?.value === date.value
                                  ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
                                  : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                              }`}
                            >
                              {date.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time selections */}
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Select Time slot ({selectedDate.label})
                          </span>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`rounded-lg py-2 text-xs font-semibold text-center transition border ${
                                  selectedTime === time
                                    ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
                                    : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/15'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Timezone indicators */}
                      <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                        <span className="flex items-center gap-1"><Clock size={12} /> 15 Mins Session</span>
                        <span className="flex items-center gap-1"><Globe size={12} /> Asia/Kolkata (IST)</span>
                      </div>

                      <div className="pt-2">
                        <Button
                          as="button"
                          onClick={handleConfirmBooking}
                          disabled={!selectedDate || !selectedTime}
                          className={`w-full gap-2 py-3.5 text-sm ${
                            selectedDate && selectedTime
                              ? 'bg-emerald-500 hover:bg-emerald-600'
                              : 'bg-slate-700 text-slate-400 cursor-not-allowed border-none'
                          }`}
                        >
                          {status === 'submitting_booking' ? 'Booking slot...' : 'Confirm Call Booking'} <ArrowRight size={16} />
                        </Button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStatus('booked')}
                        className="w-full text-center text-xs font-semibold text-slate-400 hover:text-emerald-400 transition"
                      >
                        Skip call booking for now &rsaquo;
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Completed State */}
                {status === 'booked' && (
                  <motion.div
                    key="step-booked"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-4"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={28} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-white">Roadmap Requested!</h3>
                      {selectedDate && selectedTime ? (
                        <p className="text-sm text-slate-300 px-2 leading-relaxed">
                          Awesome <span className="text-white font-semibold">{name}</span>, your strategy call is booked for{' '}
                          <span className="text-emerald-300 font-semibold">{selectedDate.label}</span> at{' '}
                          <span className="text-emerald-300 font-semibold">{selectedTime}</span>.
                        </p>
                      ) : (
                        <p className="text-sm text-slate-300 px-2 leading-relaxed">
                          Awesome <span className="text-white font-semibold">{name}</span>, we have registered your details and will prepare your roadmap.
                        </p>
                      )}
                      <p className="text-xs text-slate-400">
                        Check your inbox at <span className="text-white font-semibold">{email}</span> for calendar invite and initial questions.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <button
                        type="button"
                        onClick={handleWhatsAppBookingConfirm}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-semibold text-white hover:bg-emerald-600 transition"
                      >
                        <MessageCircle size={18} /> Ping Raghav on WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setName('')
                          setEmail('')
                          setSelectedDate(null)
                          setSelectedTime(null)
                          setStatus('idle')
                        }}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Submit another request
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
