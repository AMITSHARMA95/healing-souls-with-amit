'use client'

import Link from 'next/link'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-dark border-b border-dark-border backdrop-blur-xl bg-opacity-95 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
            <div className="w-3 h-3 bg-accent-gold rounded-full group-hover:shadow-lg transition-all duration-300" />
            <span className="text-lg font-light tracking-wider text-text-heading group-hover:text-accent-gold transition-colors duration-300 hidden sm:inline">
              HEALING SOULS
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-16">
            <Link
              href="/why"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors duration-300 relative group"
            >
              Why This Exists
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/private-day"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors duration-300 relative group"
            >
              Private Day
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/reviews"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors duration-300 relative group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/legal"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors duration-300 relative group"
            >
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-7 py-3 bg-accent-gold text-dark font-medium rounded-lg text-sm hover:shadow-glow-pulse transition-all duration-300 hover:scale-105"
          >
            Speak Confidentially
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-accent-gold text-dark font-medium rounded-lg text-xs hover:shadow-lg transition-all duration-300"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
