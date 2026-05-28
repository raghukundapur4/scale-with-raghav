import { MessageCircle } from 'lucide-react'

function FloatingWhatsApp() {
  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <span className="pointer-events-none absolute -left-48 top-1/2 hidden -translate-y-1/2 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white shadow-lg group-hover:block">
        Chat with us on WhatsApp!
      </span>
      <a
        href="https://wa.me/919999999999"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-40" />
        <span className="absolute inset-1 animate-pulse rounded-full border-2 border-green-300 opacity-60" />
        <MessageCircle className="relative z-10" size={26} />
      </a>
    </div>
  )
}

export default FloatingWhatsApp
