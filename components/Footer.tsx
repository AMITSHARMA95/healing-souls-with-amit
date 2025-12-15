'use client'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-card border-t border-dark-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{background: 'rgba(212, 175, 55, 0.3)'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-wider mb-4 text-text-heading">
              HEALING SOULS
            </h3>
            <p className="text-text-muted text-sm leading-relaxed font-light">
              A private space for emotional listening and deep presence. 100% confidential, no judgment, pure witness.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></div>
              <p className="text-xs text-text-muted font-light">Always available to listen</p>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <p className="text-text-heading font-light text-sm">Services</p>
            <a href="/services" className="text-text-muted hover:text-accent-gold text-sm transition-colors duration-300 font-light">Emotional Listening</a>
            <a href="/private-day" className="text-text-muted hover:text-accent-gold text-sm transition-colors duration-300 font-light">Full Day Presence</a>
            <a href="/why" className="text-text-muted hover:text-accent-gold text-sm transition-colors duration-300 font-light">Philosophy</a>
            <a href="/contact" className="text-text-muted hover:text-accent-gold text-sm transition-colors duration-300 font-light">Book a Session</a>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-4">
            <p className="text-text-heading font-light text-sm">Information</p>
            <a href="/about" className="text-text-muted hover:text-accent-gold text-sm transition-colors duration-300 font-light">About Amit</a>
            <a href="/reviews" className="text-text-muted hover:text-accent-gold text-sm transition-colors duration-300 font-light">Testimonials</a>
            <a href="/legal" className="text-text-muted hover:text-accent-gold text-sm transition-colors duration-300 font-light">Privacy & Discretion</a>
            <a href="/contact" className="text-text-muted hover:text-accent-gold text-sm transition-colors duration-300 font-light">FAQ</a>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-6">
            <p className="text-text-heading font-light text-sm">Connect Privately</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent-gold text-dark font-medium rounded-lg text-sm hover:shadow-glow-pulse transition-all duration-300 hover:scale-105 text-center"
            >
              Message on WhatsApp
            </a>
            <p className="text-text-muted text-xs font-light leading-relaxed">
              Direct, confidential, human. Your privacy is sacred.
            </p>
            <p className="text-accent-gold text-xs font-medium">+91 92667 35676</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-xs font-light">
            © {currentYear} Healing Souls with Amit. All conversations are private, confidential, and protected.
          </p>
          <div className="flex gap-6">
            <a href="/legal" className="text-text-muted hover:text-accent-gold text-xs font-light transition-colors">Privacy Policy</a>
            <a href="/legal" className="text-text-muted hover:text-accent-gold text-xs font-light transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
