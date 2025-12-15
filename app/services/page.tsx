import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export const metadata: Metadata = {
  title: 'Services | Healing Souls - Emotional Listening & Support',
  description:
    'Explore our emotional listening services: breakup support, divorce guidance, trauma support, and life direction clarity.',
}

const SERVICES = [
  {
    id: 'breakup',
    title: 'Breakup & Heartache Listening',
    icon: '💔',
    whatYouFeel: [
      'Unrelenting pain and confusion',
      'The weight of missing someone',
      'Questioning your worth',
      "Fear that you'll never recover",
      'Anger, sadness, numbness cycling',
    ],
    howItHelps: [
      'A safe space to grieve without minimization',
      'Permission to feel everything you feel',
      'Understanding that this pain is real and valid',
      'Gentle exploration of your emotions',
      'Someone who sits with you through it all',
    ],
    whatYouMayExperience: [
      'A space to process emotions at your pace',
      'Feeling held and witnessed in your pain',
      'Permission to grieve',
      'Moments of lightness or peace',
      'The experience of being truly heard',
    ],
  },
  {
    id: 'divorce',
    title: 'Divorce Emotional Support',
    icon: '💑',
    whatYouFeel: [
      'Identity loss and confusion',
      'Grief over lost future plans',
      'Complex emotions about a former partner',
      'Fear about starting over',
      'The weight of major life transition',
    ],
    howItHelps: [
      'Space to process the ending',
      'Support through identity reconstruction',
      'Exploration of grief, anger, and relief',
      'Help sorting through conflicting emotions',
      'Witness to your strength and resilience',
    ],
    whatYouMayExperience: [
      'Space to process the loss and transformation',
      'A witness to your identity reconstruction',
      'Moments of clarity amidst confusion',
      'Feeling supported through the transition',
      'A sense of your own resilience',
    ],
  },
  {
    id: 'trauma',
    title: 'Trauma & Emotional Overload',
    icon: '🌪️',
    whatYouFeel: [
      'Overwhelming intensity of emotions',
      'Feeling stuck in a dark place',
      'Difficulty processing what happened',
      'Emotional shutdown or flooding',
      'Questioning your stability',
    ],
    howItHelps: [
      'Grounding presence and safety',
      'Non-judgmental space to explore pain',
      'Help naming what feels unspeakable',
      'Permission to heal at your pace',
      'Compassionate witnessing of your journey',
    ],
    whatYouMayExperience: [
      'A grounded, safe space to explore',
      'Permission to feel without judgment',
      'A compassionate presence during difficult moments',
      'Understanding and validation of your experience',
      'Gradual moments of ease and relief',
    ],
  },
  {
    id: 'life-direction',
    title: 'Life Direction & Clarity',
    icon: '🧭',
    whatYouFeel: [
      'Complete uncertainty about your path',
      'Disconnection from your dreams',
      'Confusion about your identity',
      'Paralysis in making decisions',
      'Feeling lost in your own life',
    ],
    howItHelps: [
      'Deep listening to your authentic self',
      'Exploration of your true values',
      'Unpacking the confusion and overwhelm',
      'Reflection without judgment',
      'Space to discover your own wisdom',
    ],
    whatYouMayExperience: [
      'Deeper understanding of yourself',
      'Clarity on what truly matters to you',
      'A sense of direction and possibility',
      'Confidence in moving forward',
      'Connection with your own inner wisdom',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-dark to-dark-card">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-text-light">
            Services Designed
            <span className="block text-accent-gold">for Your Heart</span>
          </h1>
          <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
            Different challenges. Different needs. Same depth of listening and care.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-7xl mx-auto space-y-20">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Left - Content */}
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{service.icon}</span>
                  <h2 className="text-4xl font-light text-text-light">{service.title}</h2>
                </div>

                {/* What You Feel */}
                <div className="mb-10">
                  <h3 className="text-xl font-light text-accent-gold mb-4">What You Might Feel:</h3>
                  <ul className="space-y-2">
                    {service.whatYouFeel.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-muted font-light">
                        <span className="text-accent-gold flex-shrink-0 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It Helps */}
                <div className="mb-10">
                  <h3 className="text-xl font-light text-accent-gold mb-4">How This Helps:</h3>
                  <ul className="space-y-2">
                    {service.howItHelps.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-muted font-light">
                        <span className="text-accent-gold flex-shrink-0 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What You May Experience */}
                <div className="mb-8">
                  <h3 className="text-xl font-light text-accent-gold mb-4">What You May Experience:</h3>
                  <ul className="space-y-2">
                    {service.whatYouMayExperience.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-muted font-light">
                        <span className="text-accent-gold flex-shrink-0 mt-1">✨</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disclaimer Note */}
                <p className="text-xs text-text-muted mb-6 italic">
                  *Experiences vary from person to person. This is emotional listening, not therapy.
                </p>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-accent-gold text-dark font-semibold rounded-xl hover:bg-opacity-90 transition-all hover:scale-105"
                >
                  Connect Privately on WhatsApp
                </a>
              </div>

              {/* Right - Visual */}
              <div className={`relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-dark-card to-dark-border border border-dark-border flex items-center justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-50" />
                <div className="relative z-10 text-center px-8">
                  <p className="text-6xl mb-4">{service.icon}</p>
                  <p className="text-text-muted font-light text-sm max-w-xs mx-auto">
                    "You are not alone in what you're feeling."
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 text-text-light">Engagement & Sessions</h2>

          <div className="bg-dark border border-dark-border rounded-2xl p-12 mb-8">
            <p className="text-text-muted text-lg font-light mb-4">
              Sessions are{' '}
              <span className="text-accent-gold font-medium">invitation-based and personalized</span>
              .
            </p>
            <p className="text-text-muted text-lg font-light">
              We discuss engagement terms, format, and investment privately to ensure the right fit
              for you.
            </p>
          </div>

          <p className="text-text-muted font-light text-sm mb-8">
            All conversations are private. No rates discussed publicly. No pressure. Just honest
            dialogue.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:bg-opacity-90 transition-all hover:scale-105"
          >
            Discuss Your Needs Privately
          </a>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-text-light text-center">What to Expect</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'You Reach Out',
                description:
                  "Send me a message on WhatsApp. Share what's on your heart—or just say you want to talk.",
              },
              {
                step: '2',
                title: 'We Connect',
                description:
                  'We have an initial conversation to understand your needs and what support looks like for you.',
              },
              {
                step: '3',
                title: 'We Work Together',
                description:
                  'Regular sessions where you speak, I listen, and together we navigate your emotional journey.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-accent-gold text-dark rounded-full flex items-center justify-center font-semibold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-light text-text-light mb-3">{item.title}</h3>
                <p className="text-text-muted font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise & Legal Notice */}
      <section className="py-20 px-4 bg-dark-card border-y border-dark-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-8 text-text-light text-center">What I Offer You</h2>

          <div className="space-y-6 text-text-muted font-light text-lg mb-12">
            <p className="flex items-center justify-center gap-3">
              <span className="text-accent-gold text-2xl">🔒</span>
              <span>100% confidentiality. What you share stays with me.</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-accent-gold text-2xl">🤝</span>
              <span>No judgment. Ever. I meet you where you are.</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-accent-gold text-2xl">⏰</span>
              <span>Your time is honored. We move at your pace.</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-accent-gold text-2xl">🎯</span>
              <span>Presence and emotional listening. Full attention to you.</span>
            </p>
          </div>

          {/* Legal Notice */}
          <div className="bg-dark rounded-xl p-6 border border-dark-border text-left">
            <p className="text-xs text-text-muted leading-relaxed">
              <span className="font-medium text-accent-gold">Important:</span> This service offers emotional listening and support only. It does not provide medical, psychological, psychiatric, or therapeutic treatment. If you are experiencing a mental health crisis or emergency, please contact local emergency services or a qualified healthcare professional.
              <span>Your time is honored. We move at your pace.</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-accent-gold text-2xl">💎</span>
              <span>Excellence in presence. You deserve my full attention.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-card to-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-text-light">
            Your Journey Starts Here
          </h2>
          <p className="text-text-muted text-lg mb-10 font-light">
            No forms. No waiting. Just click and message me.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Request a Private Session on WhatsApp
          </a>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
