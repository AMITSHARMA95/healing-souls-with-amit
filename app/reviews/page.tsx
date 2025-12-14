import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export const metadata: Metadata = {
  title: 'Reviews | Healing Souls - Client Testimonials',
  description:
    'Anonymous client testimonials. Read how emotional listening has impacted real lives.',
}

const REVIEWS = [
  {
    initials: 'S.M.',
    location: 'Mumbai',
    title: 'Breakup Support',
    quote:
      "After my relationship ended, I felt completely lost. Amit's listening was the first time I felt truly heard without judgment. It helped me process my grief and find myself again.",
    impact: 'Emotional Relief',
  },
  {
    initials: 'R.P.',
    location: 'Delhi',
    title: 'Divorce Support',
    quote:
      "Going through a divorce was the hardest thing I've faced. Having someone to talk to who actually understood the complexity of my emotions—anger, grief, relief all at once—was life-changing.",
    impact: 'Identity Recovery',
  },
  {
    initials: 'A.K.',
    location: 'Business Professional, Bangalore',
    title: 'Life Direction',
    quote:
      "I was drowning in confusion about my career, relationships, and life direction. Amit's presence and questions helped me find clarity I didn't know I had within me.",
    impact: 'Clarity & Direction',
  },
  {
    initials: 'N.S.',
    location: 'Therapist, Pune',
    title: 'Emotional Overwhelm',
    quote:
      "As someone in the mental health field myself, I was skeptical. But Amit's approach to listening and presence is genuinely healing. It's different—deeper—than what I expected.",
    impact: 'Renewed Hope',
  },
  {
    initials: 'P.M.',
    location: 'Creative Professional, Goa',
    title: 'Heartbreak Recovery',
    quote:
      'I came in thinking I was broken. After sessions with Amit, I realized I was just wounded—and wounds heal. The way he made me feel seen and valued was transformative.',
    impact: 'Self-Worth Recovery',
  },
  {
    initials: 'J.D.',
    location: 'Anonymous Client',
    title: 'Trauma & Healing',
    quote:
      'I had lived with pain for years, thinking I had to figure it out alone. Having a safe, confidential space to be vulnerable and explore my trauma was the beginning of real healing.',
    impact: 'Safety & Stability',
  },
  {
    initials: 'L.V.',
    location: 'Entrepreneur, Hyderabad',
    title: 'Post-Divorce Clarity',
    quote:
      'Everything changed when I realized someone could listen to me without an agenda. The confidentiality, the non-judgment—it gave me permission to be honest with myself.',
    impact: 'Authentic Self-Discovery',
  },
  {
    initials: 'C.R.',
    location: 'Healthcare Professional',
    title: 'Life Transition',
    quote:
      "I was at a crossroads in my life and career. Amit's approach helped me connect with my intuition and make decisions aligned with my true values. I feel more myself than ever.",
    impact: 'Alignment & Purpose',
  },
]

export default function ReviewsPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-dark to-dark-card">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-text-light">
            Stories of
            <span className="block text-accent-gold">Healing & Clarity</span>
          </h1>
          <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
            Anonymous voices. Real transformations. Private journeys made public to inspire hope.
          </p>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-12 px-4 bg-dark border-b border-dark-border">
        <div className="max-w-7xl mx-auto">
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center">
            <p className="text-text-muted font-light">
              <span className="text-accent-gold font-medium">🔒 Complete Privacy:</span> All
              testimonials are shared with full consent but remain completely anonymous. Names,
              identifying details, and locations are protected to honor client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-accent-gold transition-all hover:shadow-lg hover:shadow-accent-gold/10"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-lg font-semibold text-text-light">{review.initials}</p>
                    <p className="text-sm text-text-muted font-light">{review.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-gold text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-light text-accent-gold bg-dark border border-accent-gold rounded-full">
                    {review.title}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-text-muted font-light leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>

                {/* Impact */}
                <div className="flex items-center gap-2 text-accent-gold font-light text-sm">
                  <span>✨</span>
                  <span>{review.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-text-light">
            Common Transformations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💚',
                title: 'Emotional Relief',
                description:
                  'Clients report feeling lighter, less burdened, and more at peace with their emotions.',
              },
              {
                icon: '🎯',
                title: 'Clarity & Direction',
                description:
                  'Moving from confusion and overwhelm to clear understanding of values and path forward.',
              },
              {
                icon: '👤',
                title: 'Self-Discovery',
                description:
                  'Reconnecting with their authentic selves and rebuilding identity after loss or trauma.',
              },
              {
                icon: '🛡️',
                title: 'Safety & Stability',
                description:
                  'Establishing emotional security and the ability to process difficult experiences.',
              },
              {
                icon: '✨',
                title: 'Hope & Resilience',
                description:
                  'Realizing they have the inner strength to navigate challenges and create new futures.',
              },
              {
                icon: '🤝',
                title: 'Connection & Belonging',
                description:
                  'Feeling truly seen, heard, and valued in a way they never have before.',
              },
            ].map((theme, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-dark border border-dark-border text-center">
                <p className="text-5xl mb-4">{theme.icon}</p>
                <h3 className="text-xl font-light text-text-light mb-3">{theme.title}</h3>
                <p className="text-text-muted font-light text-sm">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-dark border-y border-dark-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100%', label: 'Confidential' },
              { number: '100%', label: 'Anonymous' },
              { number: '100%', label: 'Non-Judgmental' },
              { number: '∞', label: 'Private' },
            ].map((stat, idx) => (
              <div key={idx} className="p-8">
                <p className="text-4xl font-light text-accent-gold mb-2">{stat.number}</p>
                <p className="text-text-muted font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Ethics */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-10 text-text-light text-center">
            Your Privacy is Sacred
          </h2>

          <div className="space-y-6 text-text-muted font-light text-lg">
            <p className="flex items-start gap-4">
              <span className="text-accent-gold text-2xl flex-shrink-0">🔒</span>
              <span>
                <strong className="text-text-light">No Records:</strong> What you share in sessions
                is not documented or stored anywhere.
              </span>
            </p>
            <p className="flex items-start gap-4">
              <span className="text-accent-gold text-2xl flex-shrink-0">🤫</span>
              <span>
                <strong className="text-text-light">Complete Confidentiality:</strong> Your
                conversations are between us and no one else.
              </span>
            </p>
            <p className="flex items-start gap-4">
              <span className="text-accent-gold text-2xl flex-shrink-0">👤</span>
              <span>
                <strong className="text-text-light">Full Anonymity:</strong> You can remain
                completely anonymous. Use any name or no name at all.
              </span>
            </p>
            <p className="flex items-start gap-4">
              <span className="text-accent-gold text-2xl flex-shrink-0">✋</span>
              <span>
                <strong className="text-text-light">Your Control:</strong> You decide what to share,
                how much to share, and when to stop.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-card to-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-text-light">
            Your Story Matters
          </h2>
          <p className="text-text-muted text-lg mb-10 font-light">
            Join others who found healing through deep listening. Your journey can transform too.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Start Your Private Conversation
          </a>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
