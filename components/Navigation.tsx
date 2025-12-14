'use client'

import Link from 'next/link'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-dark border-b border-dark-border backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-gold rounded-full" />
              <span className="text-xl font-light tracking-widest text-text-light group-hover:text-accent-gold transition-colors">
                HEALING SOULS
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/why"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors"
            >
              Why This Exists
            </Link>
            <Link
              href="/about"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors"
            >
              Services
            </Link>
            <Link
              href="/private-day"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors"
            >
              Private Day
            </Link>
            <Link
              href="/reviews"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/legal"
              className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors"
            >
              Privacy
            </Link>
          </div>

          {/* CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-6 py-2 bg-accent-gold text-dark font-medium rounded-full text-sm hover:bg-opacity-90 transition-all hover:scale-105"
          >
            Speak Confidentially
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-accent-gold text-dark font-medium rounded-full text-xs hover:bg-opacity-90 transition-all"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
