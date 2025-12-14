'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'
import { FadeIn, SlideUp, StaggerContainer } from '@/components/Animations'

const WHATSAPP_URL = 'https://wa.me/9266735676'

const TRUST_INDICATORS = [
  { icon: '🔒', label: '100% Confidential' },
  { icon: '🤝', label: 'No Judgment' },
  { icon: '👤', label: 'Anonymous Support' },
  { icon: '🛡️', label: 'Private & Discreet' },
]

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative z-10">
            {/* Headline */}
            <FadeIn duration={1}>
              <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-6 text-text-light leading-tight">
                Not Everything Can Be Solved Alone
                <span className="block text-accent-gold mt-4">But It Can Be Witnessed</span>
              </h1>
            </FadeIn>

            {/* Subtext */}
            <SlideUp delay={0.2} duration={1}>
              <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                For individuals who value privacy, discretion, and one-on-one human presence during
                difficult phases.
              </p>
            </SlideUp>

            {/* CTA Buttons */}
            <SlideUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:opacity-90 transition-all"
                >
                  Request a Private Session
                </a>
                <a
                  href="/why"
                  className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-semibold rounded-2xl text-lg hover:bg-accent-gold hover:text-dark transition-all"
                >
                  Understand Why This Exists
                </a>
              </div>
            </SlideUp>

            {/* Trust Indicators */}
            <SlideUp delay={0.6}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-dark-border">
                {TRUST_INDICATORS.map((indicator, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-4">
                    <span className="text-3xl">{indicator.icon}</span>
                    <p className="text-sm font-light text-text-muted">{indicator.label}</p>
                  </div>
                ))}
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Why I'm Here Section */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              In Your Darkest Moments,
              <span className="block text-accent-gold mt-3">Someone Needs to Listen</span>
            </h2>
          </FadeIn>

          <SlideUp delay={0.2}>
            <div className="prose prose-invert max-w-none">
              <p className="text-text-muted text-lg leading-relaxed mb-8 font-light">
                Life throws us curveballs. Relationships end. Dreams shift. Trauma lingers. And in those
                moments, we don't need judgment—we need presence.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-8 font-light">
                I'm here to listen deeply, without rushing, without fixing, without expecting anything in
                return. Your story matters. Your pain matters. You matter.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border p-8 md:p-12 text-center">
              <p className="text-2xl md:text-3xl font-serif font-light text-text-light leading-relaxed">
                "Sometimes, being heard is the greatest healing."
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.6}>
            <div className="mt-8 text-center">
              <a
                href="/why"
                className="inline-block text-accent-gold hover:text-opacity-80 font-light text-lg underline transition-colors"
              >
                Learn Why This Exists →
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-6 text-text-light">
              How I Support You
            </h2>
          </FadeIn>

          <SlideUp delay={0.2}>
            <p className="text-center text-text-muted text-lg mb-16 max-w-2xl mx-auto font-light">
              Different challenges. Different journeys. Same depth of listening.
            </p>
          </SlideUp>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Emotional Listening',
                  description: 'The deepest listening. No judgment. Just presence.',
                },
                {
                  title: 'Breakup & Divorce Presence',
                  description: 'When love ends, you need someone to sit with your pain.',
                },
                {
                  title: 'Trauma & Life Confusion',
                  description: 'When emotions feel too big, I help you find safety.',
                },
                {
                  title: 'Spend a Full Day With You',
                  description: 'A full day of continuous presence in Delhi.',
                },
              ].map((service, idx) => (
                <SlideUp key={idx} delay={idx * 0.1}>
                  <div className="p-8 rounded-2xl bg-dark border border-dark-border hover:border-accent-gold transition-all group">
                    <h3 className="text-2xl font-serif font-light mb-3 text-text-light group-hover:text-accent-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed">{service.description}</p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </StaggerContainer>

          <SlideUp delay={0.6}>
            <div className="text-center mt-12">
              <a
                href="/services"
                className="inline-block text-accent-gold hover:text-opacity-80 font-light text-lg underline transition-colors"
              >
                Explore All Services →
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-text-light">
              You Don't Have to Navigate This Alone
            </h2>
          </FadeIn>

          <SlideUp delay={0.2}>
            <p className="text-text-muted text-lg mb-12 font-light leading-relaxed">
              Reach out on WhatsApp. No forms. No waiting. Just a confidential conversation between two
              humans.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:opacity-90 transition-all"
            >
              Start a Confidential Conversation
            </a>
          </SlideUp>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
