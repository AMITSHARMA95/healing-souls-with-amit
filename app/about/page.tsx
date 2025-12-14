import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export const metadata: Metadata = {
  title: 'About Amit | Healing Souls - Emotional Listening & Life Guidance',
  description:
    'Learn about Amit\'s approach to emotional listening, presence, and creating a safe space for healing without judgment.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-dark to-dark-card">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-text-light">
            Hi, I'm<span className="block text-accent-gold">Amit</span>
          </h1>
          <p className="text-xl text-text-muted font-light mb-8 max-w-2xl mx-auto">
            A listener, a guide, and a witness to your deepest truths.
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-10 text-text-light">My Story</h2>

          <div className="space-y-8 text-text-muted text-lg font-light leading-relaxed">
            <p>
              Life taught me that sometimes, the most powerful thing we can offer someone isn't
              advice—it's presence. It's the willingness to sit with their pain, honor their
              experience, and listen without judgment.
            </p>

            <p>
              I've walked through my own heartbreaks. I've felt the weight of confusion. I've
              questioned everything about myself and my path. And in those dark moments, I learned
              something invaluable: being truly heard can shift everything.
            </p>

            <p>
              When someone listens to us—really listens—without trying to fix us or minimize our
              pain, something magical happens. We start to feel less alone. Our thoughts become
              clearer. Our emotions become lighter. We begin to find our own answers.
            </p>

            <p>
              That's what I do. I create a sacred space where you can be completely yourself. Where
              your struggles are valid. Where your voice matters. Where you're safe to explore
              whatever you need to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-text-light text-center">
            How I Show Up for You
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep Empathy',
                description:
                  'I feel with you. Not as a therapist, but as a human who understands that pain is real and your feelings are valid.',
              },
              {
                title: 'Complete Presence',
                description:
                  'When you speak to me, you have my full attention. No distractions. No judgment. Just genuine human connection.',
              },
              {
                title: 'Emotional Safety',
                description:
                  'Everything you share is sacred. Your privacy is protected. Your secrets are safe. You can be vulnerable here.',
              },
              {
                title: 'Non-Directive Listening',
                description:
                  "I'm not here to tell you what to do. You're the expert of your own life. I help you find your own clarity.",
              },
              {
                title: 'Confidentiality First',
                description:
                  'This is just between us. No records. No sharing. No judgment from anyone. Pure, private confidentiality.',
              },
              {
                title: 'Human Connection',
                description:
                  "I'm not clinical. I'm real. I understand heartbreak, confusion, and pain because I've lived them too.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-dark border border-dark-border hover:border-accent-gold transition-all group"
              >
                <h3 className="text-xl font-light mb-4 text-accent-gold group-hover:text-opacity-80 transition-colors">
                  {value.title}
                </h3>
                <p className="text-text-muted font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-10 text-text-light">
            I Specialize In Understanding
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              '💔 Heartbreak & Emotional Aftermath',
              '👰 Divorce & Life Transitions',
              '😢 Trauma & Emotional Overwhelm',
              '🤔 Identity Confusion & Self-Doubt',
              '🌪️ Life Overwhelm & Direction Loss',
              '✨ Personal Growth & Self-Discovery',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-dark-card transition-colors">
                <span className="text-2xl flex-shrink-0">{item.split(' ')[0]}</span>
                <p className="text-text-muted font-light">{item.split(' ').slice(1).join(' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm NOT */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-10 text-text-light">What This Is NOT</h2>

          <div className="space-y-4 text-text-muted font-light">
            <p className="flex items-start gap-4">
              <span className="text-accent-gold flex-shrink-0">✗</span>
              <span>This is NOT therapy or counseling. I'm not a licensed therapist.</span>
            </p>
            <p className="flex items-start gap-4">
              <span className="text-accent-gold flex-shrink-0">✗</span>
              <span>This is NOT medical or psychiatric advice. For crises, please seek professional help.</span>
            </p>
            <p className="flex items-start gap-4">
              <span className="text-accent-gold flex-shrink-0">✗</span>
              <span>This is NOT a legal service. For legal matters, consult an attorney.</span>
            </p>
            <p className="flex items-start gap-4">
              <span className="text-accent-gold flex-shrink-0">✗</span>
              <span>This is NOT a fix. I'm a guide, not a savior.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-card to-dark border-y border-dark-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-text-light">
            Ready to Be Heard?
          </h2>
          <p className="text-text-muted text-lg mb-10 font-light">
            Let's have a conversation. A real one. Where you matter.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Request a Private Session
          </a>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
