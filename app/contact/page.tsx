import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export const metadata: Metadata = {
  title: 'Contact | Healing Souls - Get in Touch',
  description: 'Reach out for a private, confidential conversation on WhatsApp.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-dark to-dark-card">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-text-light">
            Let's Talk
            <span className="block text-accent-gold">Privately</span>
          </h1>
          <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
            No forms. No waiting. Direct, confidential messaging right on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-card border border-dark-border rounded-3xl p-12 md:p-16 text-center mb-16">
            <div className="mb-8">
              <p className="text-6xl mb-6">💬</p>
              <h2 className="text-4xl font-light mb-4 text-text-light">
                Start a Confidential Conversation
              </h2>
              <p className="text-text-muted text-lg font-light mb-8">
                Click the button below and send me a message on WhatsApp. It's that simple.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-accent-gold text-dark font-semibold rounded-2xl text-xl hover:bg-opacity-90 transition-all hover:scale-105 shadow-xl hover:shadow-2xl mb-8"
            >
              Message Me on WhatsApp
            </a>

            <p className="text-text-muted text-sm font-light">
              Direct number: <span className="text-accent-gold">+91 9266735676</span>
            </p>
          </div>

          {/* What to Expect */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'You Message',
                description:
                  "Send me a message on WhatsApp. Share what's on your mind, or just say you want to talk.",
              },
              {
                title: 'We Connect',
                description:
                  "I'll respond and we'll have a conversation about what you need and how I can support you.",
              },
              {
                title: 'We Begin',
                description:
                  "If it feels right, we'll establish a cadence for our sessions and how we work together.",
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl hover:bg-dark-card transition-colors">
                <p className="text-3xl mb-3">
                  {idx === 0 ? '✉️' : idx === 1 ? '🤝' : '🌟'}
                </p>
                <h3 className="text-xl font-light text-text-light mb-2">{step.title}</h3>
                <p className="text-text-muted font-light text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Guarantee */}
      <section className="py-20 px-4 bg-dark-card border-y border-dark-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center text-text-light">
            Your Privacy is Guaranteed
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🔒',
                title: 'Completely Confidential',
                description:
                  "Everything you share is private. No sharing with anyone, ever. What's between us stays between us.",
              },
              {
                icon: '📵',
                title: 'No Records Kept',
                description:
                  'Conversations are not documented or archived. Your messages, your story, your privacy.',
              },
              {
                icon: '👤',
                title: 'Remain Anonymous',
                description:
                  'You can use any name you like or no name at all. Your identity is completely your choice.',
              },
              {
                icon: '✅',
                title: 'Full Control',
                description:
                  'You decide what to share, when to share it, and when to stop. Always in control.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-dark border border-dark-border">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-light text-text-light mb-3">{item.title}</h3>
                <p className="text-text-muted font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center text-text-light">
            Questions? Here's What You Need to Know
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is this therapy or counseling?",
                a: "No. This is emotional listening and life guidance. I'm not a licensed therapist, and this is not a substitute for professional mental health care if you need it.",
              },
              {
                q: "What if I'm in a crisis?",
                a: "If you're in immediate danger or having thoughts of self-harm, please contact emergency services or a crisis helpline in your area. I'm here for ongoing emotional support, not crisis intervention.",
              },
              {
                q: "How much does this cost?",
                a: "Pricing and engagement terms are discussed privately, one-to-one. Sessions are invitation-based and personalized to your needs.",
              },
              {
                q: "What if I want to remain completely anonymous?",
                a: "You absolutely can. You don't need to share your real name, location, or any identifying information. Your privacy is 100% protected.",
              },
              {
                q: "What format are sessions?",
                a: "Everything is conducted via WhatsApp messaging. Real-time conversation, voice notes, whatever feels comfortable for you.",
              },
              {
                q: "How long are sessions?",
                a: "That's flexible. Some conversations are brief check-ins, others are deeper dives. We move at your pace.",
              },
              {
                q: "What if I'm not sure if this is right for me?",
                a: "There's no pressure. Send me a message and let's just talk about it. If it's a fit, we'll know. If not, no judgment.",
              },
              {
                q: "Will you share my information with anyone?",
                a: "Never. What you tell me stays completely confidential. No sharing, no reporting, no documentation shared with anyone.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-xl bg-dark-card border border-dark-border hover:border-accent-gold transition-colors cursor-pointer"
              >
                <summary className="flex items-center justify-between font-light text-lg text-text-light select-none">
                  {item.q}
                  <span className="text-accent-gold group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="text-text-muted font-light mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Connect */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8 text-text-light">The Only Way to Connect</h2>
          <p className="text-text-muted font-light text-lg mb-10">
            WhatsApp is the only platform I use for sessions. Direct, private, encrypted, and
            discreet.
          </p>

          <div className="bg-dark border-2 border-accent-gold rounded-2xl p-12 inline-block">
            <p className="text-5xl mb-4">💬</p>
            <p className="text-text-light text-2xl font-light mb-2">WhatsApp</p>
            <p className="text-accent-gold text-xl font-semibold mb-6">+91 9266735676</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent-gold text-dark font-semibold rounded-xl hover:bg-opacity-90 transition-all hover:scale-105"
            >
              Open WhatsApp
            </a>
          </div>

          <p className="text-text-muted text-sm font-light mt-8 max-w-2xl mx-auto">
            Direct messaging. Encrypted. Private. This is the most secure and discreet way to reach
            me. Your conversations are yours alone.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-card to-dark border-t border-dark-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-text-light">
            You're Not Alone in This
          </h2>
          <p className="text-text-muted text-lg mb-10 font-light">
            Reach out. Let's talk. I'm listening.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Send Me a Message Now
          </a>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
