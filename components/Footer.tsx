'use client'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-widest mb-2 text-text-light">
              HEALING SOULS
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              A private space for emotional listening and life guidance. 100% confidential, no
              judgment.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-text-light font-light text-sm">Quick Links</p>
            <a
              href="/"
              className="text-text-muted hover:text-accent-gold text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-text-muted hover:text-accent-gold text-sm transition-colors"
            >
              About
            </a>
            <a
              href="/services"
              className="text-text-muted hover:text-accent-gold text-sm transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-text-muted hover:text-accent-gold text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <p className="text-text-light font-light text-sm">Connect Privately</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent-gold text-dark font-medium rounded-xl text-sm hover:bg-opacity-90 transition-all hover:scale-105 w-fit"
            >
              Request a Session on WhatsApp
            </a>
            <p className="text-text-muted text-xs">
              Direct, confidential messaging. Your privacy is protected.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-border pt-8">
          <p className="text-text-muted text-xs text-center">
            © {currentYear} Healing Souls with Amit. All conversations are private and
            confidential.
          </p>
        </div>
      </div>
    </footer>
  )
}
