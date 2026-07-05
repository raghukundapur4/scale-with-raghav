import { MessageCircle } from 'lucide-react'

function FloatingWhatsApp() {
  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <span className="pointer-events-none absolute -left-48 top-1/2 hidden -translate-y-1/2 rounded-lg bg-ink px-3 py-2 text-sm text-white shadow-lg group-hover:block">
        Chat with us on WhatsApp!
      </span>
      <a
        href="https://wa.me/918722947700"
        onClick={() => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'click_whatsapp_floating');
          }
        }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-emerald-900/20"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-25" />
        <span className="absolute inset-1 animate-pulse rounded-full border-2 border-emerald-200 opacity-70" />
        <MessageCircle className="relative z-10" size={26} />
      </a>
    </div>
  )
}

export default FloatingWhatsApp
