'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/9266735676'

interface NavLink {
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/why', label: 'Why This Exists' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/private-day', label: 'Private Day' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/legal', label: 'Privacy' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-dark border-b border-dark-border backdrop-blur-xl bg-opacity-95 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="group flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-accent-gold rounded-full group-hover:shadow-lg transition-all duration-300" />
            <span className="text-xs md:text-lg font-light tracking-wider text-text-heading group-hover:text-accent-gold transition-colors duration-300">
              HEALING SOULS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-16">
            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Side: CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-4 md:px-7 py-2 md:py-3 bg-accent-gold text-dark font-medium rounded-lg text-xs md:text-sm hover:shadow-glow-pulse transition-all duration-300 hover:scale-105"
            >
              Speak Confidentially
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden inline-flex flex-col gap-1.5 p-2 hover:bg-dark-hover rounded transition-colors duration-300"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <motion.div
                className="w-5 h-0.5 bg-accent-gold rounded"
                animate={isMenuOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-5 h-0.5 bg-accent-gold rounded"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-5 h-0.5 bg-accent-gold rounded"
                animate={isMenuOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide Down Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-dark-border"
            >
              <div className="flex flex-col gap-0 py-4 px-4">
                {NAV_LINKS.slice(1).map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-sm font-light text-text-muted hover:text-accent-gold hover:bg-dark-hover rounded transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Button in Menu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.05 }}
                  className="pt-4 border-t border-dark-border mt-2"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="block w-full px-4 py-3 bg-accent-gold text-dark font-medium rounded-lg text-sm text-center hover:shadow-glow-pulse transition-all duration-300"
                  >
                    Message on WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
