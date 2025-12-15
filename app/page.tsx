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
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20 md:py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 right-10 w-48 h-48 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20" style={{background: 'rgba(212, 175, 55, 0.5)'}}></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20" style={{background: 'rgba(232, 180, 184, 0.5)'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Headline */}
          <FadeIn duration={1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-light tracking-tight mb-6 md:mb-8 text-text-heading leading-tight">
              Not Everything
              <span className="block">Can Be Solved Alone</span>
              <span className="block text-accent-gold mt-6">But It Can Be Witnessed</span>
            </h1>
          </FadeIn>

          {/* Subtext */}
          <SlideUp delay={0.2} duration={1}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-muted mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light px-2">
              For individuals who value privacy, discretion, and one-on-one human presence during
              the most difficult phases of life.
            </p>
          </SlideUp>

          {/* CTA Buttons */}
          <SlideUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-20 px-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-10 py-3 md:py-4 bg-accent-gold text-dark font-semibold rounded-lg md:rounded-xl text-sm md:text-lg hover:shadow-glow-pulse transition-all duration-300 animate-glow-pulse"
              >
                Request a Session
              </a>
              <a
                href="/why"
                className="px-6 md:px-10 py-3 md:py-4 border-2 border-accent-gold text-accent-gold font-semibold rounded-lg md:rounded-xl text-sm md:text-lg hover:bg-accent-gold hover:text-dark hover:border-accent-gold transition-all duration-300"
              >
                Why This Exists
              </a>
            </div>
          </SlideUp>

          {/* Trust Indicators */}
          <SlideUp delay={0.6}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20 pt-8 md:pt-16 border-t border-dark-border">
              {TRUST_INDICATORS.map((indicator, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-6 hover:border-l-2 hover:border-accent-gold transition-all duration-300">
                  <span className="text-2xl md:text-4xl">{indicator.icon}</span>
                  <p className="text-xs md:text-sm font-light text-text-muted">{indicator.label}</p>
                </div>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Why I'm Here Section */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center mb-3 md:mb-6 text-text-heading">
                In Your Darkest Moments
              </h2>
              <p className="text-center text-accent-gold text-lg md:text-2xl font-light">Someone Needs to Listen</p>
            </div>
          </FadeIn>

          <SlideUp delay={0.2}>
            <div className="space-y-6 md:space-y-8 mb-10 md:mb-16">
              <p className="text-text-muted text-base md:text-lg lg:text-xl leading-relaxed font-light">
                Life throws us curveballs. Relationships end. Dreams shift. Trauma lingers. Professional dreams crumble. And in those moments, we don't need judgment—we need <span className="text-accent-gold">presence</span>.
              </p>
              <p className="text-text-muted text-lg md:text-xl leading-relaxed font-light">
                I'm here to listen deeply, without rushing, without fixing, without expecting anything in return. Your story matters. Your pain matters. <span className="text-accent-gold">You matter.</span>
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="relative rounded-lg md:rounded-xl overflow-hidden bg-dark-card border border-dark-border p-6 md:p-12 lg:p-16 text-center backdrop-blur-sm">
              <div className="absolute inset-0 opacity-30 animate-shimmer" style={{background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)'}}></div>
              <p className="text-lg md:text-2xl lg:text-3xl font-serif font-light text-text-light leading-relaxed relative z-10">
                "Sometimes, being fully heard is the greatest healing."
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.6}>
            <div className="mt-8 md:mt-12 text-center">
              <a
                href="/why"
                className="inline-block text-accent-gold hover:text-rose-300 font-light text-sm md:text-lg underline transition-colors duration-300"
              >
                Learn the Philosophy →
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-dark-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 right-0 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{background: 'rgba(232, 180, 184, 0.3)'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center mb-4 md:mb-6 text-text-heading">
                How I Support You
              </h2>
            </div>
          </FadeIn>

          <SlideUp delay={0.2}>
            <p className="text-center text-text-muted text-sm md:text-lg lg:text-xl mb-12 md:mb-20 max-w-2xl mx-auto font-light px-2">
              Different challenges. Different journeys. Same listening.
            </p>
          </SlideUp>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'Emotional Listening',
                  description: 'The deepest listening. No judgment. Just presence and witnessed emotion.',
                  icon: '💭',
                },
                {
                  title: 'Breakup & Divorce Presence',
                  description: 'When love ends, you need someone who sits with your pain, not fixes it.',
                  icon: '💔',
                },
                {
                  title: 'Trauma & Life Confusion',
                  description: 'When emotions feel too big, too tangled. Safety and witness are the healing.',
                  icon: '🌊',
                },
                {
                  title: 'Spend a Full Day With Me',
                  description: 'A full day of continuous presence. Delhi-based. Immersive emotional depth.',
                  icon: '🌅',
                },
              ].map((service, idx) => (
                <SlideUp key={idx} delay={idx * 0.1}>
                  <div className="p-6 md:p-10 rounded-lg md:rounded-xl bg-dark border border-dark-border hover:border-accent-gold transition-all duration-500 group hover:shadow-lg">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
                    <h3 className="text-lg md:text-2xl font-serif font-light mb-3 md:mb-4 text-text-heading group-hover:text-accent-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed text-sm md:text-base">{service.description}</p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </StaggerContainer>

          <SlideUp delay={0.6}>
            <div className="text-center mt-10 md:mt-16">
              <a
                href="/services"
                className="inline-block text-accent-gold hover:text-rose-300 font-light text-sm md:text-lg underline transition-colors duration-300"
              >
                All Services & Pricing →
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{background: 'rgba(212, 175, 55, 0.4)'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 md:mb-8 text-text-heading">
              You Don't Have to
              <span className="block text-accent-gold mt-3 md:mt-4">Navigate This Alone</span>
            </h2>
          </FadeIn>

          <SlideUp delay={0.2}>
            <p className="text-text-muted text-sm md:text-lg lg:text-xl mb-8 md:mb-12 font-light leading-relaxed">
              Reach out on WhatsApp. No forms. No waiting. Just a confidential conversation.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 md:px-12 py-3 md:py-5 bg-accent-gold text-dark font-semibold rounded-lg md:rounded-xl text-sm md:text-lg hover:shadow-lg transition-all duration-300 animate-glow-pulse"
            >
              Message on WhatsApp
            </a>
          </SlideUp>

          <SlideUp delay={0.6}>
            <p className="text-text-muted text-xs md:text-sm mt-6 md:mt-8 font-light">
              WhatsApp: <span className="text-accent-gold font-normal">+91 92667 35676</span>
            </p>
          </SlideUp>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
