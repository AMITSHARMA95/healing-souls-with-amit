import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'
import { FadeIn, SlideUp } from '@/components/Animations'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export const metadata: Metadata = {
  title: 'Legal & Consent | Healing Souls - Terms & Agreements',
  description: 'Understand the legal framework, consent requirements, and boundaries of emotional listening sessions with Amit.',
}

export default function LegalConsentPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn duration={1}>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-text-light leading-tight">
              Legal & Consent
            </h1>
          </FadeIn>

          <SlideUp delay={0.2} duration={1}>
            <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Clear agreements and transparent boundaries for your peace of mind.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <SlideUp>
            <div className="bg-dark rounded-2xl p-10 border-2 border-accent-gold mb-8">
              <h2 className="text-3xl font-serif font-light text-accent-gold mb-6">Important Disclaimer</h2>
              
              <div className="space-y-6 text-text-muted font-light text-lg leading-relaxed">
                <p>
                  <span className="text-accent-gold font-semibold">This service provides emotional listening and human presence only.</span>
                </p>

                <div className="bg-dark-hover p-6 rounded-lg border border-dark-border">
                  <p className="font-semibold text-text-light mb-3">This is NOT:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-3">
                      <span className="text-accent-gold flex-shrink-0">•</span>
                      <span>Therapy or counseling</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent-gold flex-shrink-0">•</span>
                      <span>Medical, psychological, or psychiatric treatment</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent-gold flex-shrink-0">•</span>
                      <span>Professional advice of any kind</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent-gold flex-shrink-0">•</span>
                      <span>A substitute for qualified healthcare</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent-gold bg-opacity-10 p-6 rounded-lg border border-accent-gold border-opacity-30">
                  <p className="font-semibold text-accent-gold mb-2">⚠️ Mental Health Emergencies</p>
                  <p className="text-text-light">
                    If you are experiencing a mental health crisis, suicidal thoughts, self-harm urges, or require immediate support, please contact <span className="font-semibold">local emergency services</span> or a <span className="font-semibold">qualified healthcare professional immediately</span>.
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Consent & Acknowledgment */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              Consent & Acknowledgment
            </h2>
          </FadeIn>

          <div className="space-y-8">
            <SlideUp delay={0.1}>
              <div className="border-l-4 border-accent-gold pl-8 py-6">
                <h3 className="text-2xl font-serif font-light text-text-light mb-4">Voluntary Engagement</h3>
                <p className="text-text-muted font-light text-lg leading-relaxed">
                  All interactions with this service are completely voluntary and consensual. You have full autonomy to engage, pause, or discontinue at any time without penalty or judgment.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="border-l-4 border-accent-gold pl-8 py-6">
                <h3 className="text-2xl font-serif font-light text-text-light mb-4">Understanding & Agreement</h3>
                <p className="text-text-muted font-light text-lg leading-relaxed mb-4">
                  By engaging with this service, you:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-xl">✓</span>
                    <span className="text-text-muted font-light">Understand that sessions are private and confidential</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-xl">✓</span>
                    <span className="text-text-muted font-light">Agree to session formats, duration, and location (if applicable)</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-xl">✓</span>
                    <span className="text-text-muted font-light">Accept the investment terms discussed privately</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-xl">✓</span>
                    <span className="text-text-muted font-light">Acknowledge that payments are non-refundable once confirmed</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-xl">✓</span>
                    <span className="text-text-muted font-light">Accept that your engagement and consent are documented via WhatsApp</span>
                  </li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="border-l-4 border-accent-gold pl-8 py-6">
                <h3 className="text-2xl font-serif font-light text-text-light mb-4">Your Responsibility</h3>
                <p className="text-text-muted font-light text-lg leading-relaxed">
                  You understand the limitations of this service and take full responsibility for your own decisions, wellbeing, and any actions taken based on our conversations.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Privacy & Confidentiality */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              Privacy & Confidentiality
            </h2>
          </FadeIn>

          <div className="space-y-8">
            <SlideUp delay={0.1}>
              <div className="bg-dark rounded-xl p-8 border border-dark-border">
                <h3 className="text-2xl font-serif font-light text-text-light mb-6">What We Protect</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-accent-gold font-semibold mb-2">🔒 No External Records</p>
                    <p className="text-text-muted font-light">
                      No notes, recordings, or personal data are collected or stored outside of WhatsApp conversations. Your interactions remain within the platform you choose.
                    </p>
                  </div>

                  <div>
                    <p className="text-accent-gold font-semibold mb-2">👤 Your Identity Is Protected</p>
                    <p className="text-text-muted font-light">
                      You can choose to share as much or as little about yourself as you wish. Anonymity is fully supported and protected. Your real name is not required.
                    </p>
                  </div>

                  <div>
                    <p className="text-accent-gold font-semibold mb-2">🤐 Complete Confidentiality</p>
                    <p className="text-text-muted font-light">
                      Your information will never be shared, discussed, or used for any purpose without your explicit written consent. Your conversations remain strictly between us.
                    </p>
                  </div>

                  <div>
                    <p className="text-accent-gold font-semibold mb-2">⚖️ Legal Exceptions</p>
                    <p className="text-text-muted font-light">
                      The only exceptions to confidentiality are rare legal circumstances such as imminent danger to yourself or others, child abuse, or court orders—which you will be informed about.
                    </p>
                  </div>
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="bg-dark rounded-xl p-8 border border-dark-border">
                <h3 className="text-2xl font-serif font-light text-text-light mb-6">Recording & Documentation</h3>
                <p className="text-text-muted font-light text-lg leading-relaxed">
                  <span className="text-accent-gold font-semibold">Sessions may be recorded only with your prior written consent.</span> If you agree to recording, you understand that you control access to those recordings. No recordings will be made or kept without your explicit permission.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Boundaries & What This Is Not */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              Boundaries & What This Service Is Not
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <SlideUp delay={0.1}>
              <div className="bg-dark-card rounded-xl p-8 border border-dark-border">
                <h3 className="text-xl font-semibold text-text-light mb-4">Professional Services</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">Not therapy or counseling</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">Not medical or psychiatric treatment</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">Not legal or financial advice</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">Not relationship repair or mediation</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">Not career coaching or business consulting</span>
                  </li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="bg-dark-card rounded-xl p-8 border border-dark-border">
                <h3 className="text-xl font-semibold text-text-light mb-4">Personal Boundaries</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">No physical contact or presence beyond agreed sessions</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">No romantic or sexual interaction</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">No personal relationship outside of sessions</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">No gifts, monetary requests, or financial entanglement</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent-gold flex-shrink-0">✗</span>
                    <span className="text-text-muted font-light">No dual relationships that compromise boundaries</span>
                  </li>
                </ul>
              </div>
            </SlideUp>
          </div>

          <SlideUp delay={0.3}>
            <div className="mt-8 bg-dark-card rounded-xl p-8 border border-dark-border">
              <h3 className="text-2xl font-serif font-light text-text-light mb-4">Your Full Autonomy</h3>
              <p className="text-text-muted font-light text-lg leading-relaxed">
                You are the expert on your own life. Any insights, perspectives, or reflections shared during sessions are offerings for your consideration, not directives. You retain complete autonomy to accept, reject, or integrate any part of our conversations. Your decisions and wellbeing are entirely your responsibility.
              </p>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Acknowledgment Statement */}
      <section className="py-24 px-4 bg-dark-card border-y border-dark-border">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 text-text-light text-center">
              By Engaging With This Service
            </h2>
          </FadeIn>

          <SlideUp>
            <div className="bg-dark rounded-xl p-10 border-2 border-accent-gold">
              <p className="text-text-muted font-light text-lg leading-relaxed space-y-6">
                <span className="block">
                  You acknowledge that you have read, understood, and agree to the terms outlined on this page.
                </span>

                <span className="block">
                  You understand the limitations of this service and take full responsibility for your own wellbeing, decisions, and actions.
                </span>

                <span className="block">
                  You confirm that you are not in a mental health crisis or emergency, and if you are, you will contact emergency services or a qualified professional.
                </span>

                <span className="block">
                  You accept that your consent is documented through your WhatsApp communication and engagement with this service.
                </span>

                <span className="block">
                  You agree to maintain appropriate boundaries and understand the non-therapeutic nature of this relationship.
                </span>
              </p>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Questions & CTA */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-text-light">
              Questions or Ready to Begin?
            </h2>
          </FadeIn>

          <SlideUp delay={0.2}>
            <p className="text-lg text-text-muted font-light mb-10 leading-relaxed">
              If you have any questions about these terms, want to clarify boundaries, or are ready to confirm your session, please reach out privately on WhatsApp. I'm here to ensure you feel completely informed and comfortable.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:shadow-glow-pulse transition-all duration-300 hover:scale-105"
            >
              Contact via WhatsApp
            </a>
          </SlideUp>

          <SlideUp delay={0.6}>
            <p className="text-text-muted text-sm font-light mt-8">
              Direct, confidential, human. Your privacy is sacred.
            </p>
          </SlideUp>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
