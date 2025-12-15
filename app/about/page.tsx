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
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{background: 'rgba(212, 175, 55, 0.4)'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{background: 'rgba(232, 180, 184, 0.3)'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-light mb-8 text-text-heading">
            I'm <span className="text-accent-gold">Amit</span>
          </h1>
          <p className="text-2xl text-text-muted font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            A listener, a witness, and a guide through life's most difficult moments.
          </p>
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <div className="text-accent-gold text-4xl font-light mb-2">500+</div>
              <p className="text-text-muted text-sm font-light">People Witnessed</p>
            </div>
            <div className="text-center">
              <div className="text-accent-gold text-4xl font-light mb-2">10+</div>
              <p className="text-text-muted text-sm font-light">Years of Practice</p>
            </div>
            <div className="text-center">
              <div className="text-accent-gold text-4xl font-light mb-2">100%</div>
              <p className="text-text-muted text-sm font-light">Confidential</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-32 px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-16 text-text-heading">My Story</h2>

          <div className="space-y-12 text-text-muted text-lg md:text-xl font-light leading-relaxed">
            <p>
              Life taught me something profound: sometimes, the most powerful thing we can offer someone isn't advice—it's <span className="text-accent-gold">presence</span>. It's the willingness to sit with their pain, honor their experience, and listen without judgment.
            </p>

            <p>
              I've walked through my own heartbreaks. I've felt the weight of confusion. I've questioned everything about myself and my path. And in those dark moments, I learned something invaluable: <span className="text-accent-gold">being truly heard can shift everything.</span>
            </p>

            <p>
              When someone listens to us—really listens—without trying to fix us or minimize our pain, something shifts. We feel less alone. Our thoughts become clearer. Our emotions become lighter. We begin to find our own answers.
            </p>

            <p>
              That's what I do. I create a sacred space where you can be completely yourself. Where your struggles are <span className="text-accent-gold">valid</span>. Where your voice <span className="text-accent-gold">matters</span>. Where you're safe to explore whatever needs exploring.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6 bg-dark-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{background: 'rgba(232, 180, 184, 0.3)'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-20 text-text-heading text-center">
            How I Show Up for You
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Deep Empathy',
                description: 'I feel with you. Not as a therapist, but as a human who understands pain is real.',
                icon: '💭',
              },
              {
                title: 'Complete Presence',
                description: 'Your voice has my full attention. No distractions. No judgment. Just genuine connection.',
                icon: '👁️',
              },
              {
                title: 'Emotional Safety',
                description: 'Everything shared is sacred. Your privacy is protected. Your secrets are safe here.',
                icon: '🛡️',
              },
              {
                title: 'Non-Directive Listening',
                description: "You're the expert of your life. I help you find your own clarity, not what I think you should do.",
                icon: '🧭',
              },
              {
                title: 'Confidentiality First',
                description: 'This is just between us. No records. No sharing. Pure, private confidentiality.',
                icon: '🔒',
              },
              {
                title: 'Human Connection',
                description: "I'm not clinical. I'm real. I understand heartbreak because I've lived it too.",
                icon: '💫',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-10 rounded-xl bg-dark border border-dark-border hover:border-accent-gold transition-all duration-500 group"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-light mb-4 text-text-heading group-hover:text-accent-gold transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-text-muted font-light leading-relaxed text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-32 px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-16 text-text-heading">
            I Specialize In Understanding
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { emoji: '💔', label: 'Heartbreak & Emotional Aftermath' },
              { emoji: '💍', label: 'Divorce & Life Transitions' },
              { emoji: '🌊', label: 'Trauma & Emotional Overwhelm' },
              { emoji: '🤔', label: 'Identity Confusion & Self-Doubt' },
              { emoji: '🌪️', label: 'Life Overwhelm & Direction Loss' },
              { emoji: '✨', label: 'Personal Growth & Self-Discovery' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 p-8 rounded-xl hover:bg-dark-card hover:border-l-2 hover:border-accent-gold transition-all duration-300 group">
                <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.emoji}</span>
                <p className="text-text-muted font-light text-lg mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm NOT */}
      <section className="py-32 px-6 bg-dark-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-16 text-text-heading">What This Is NOT</h2>

          <div className="space-y-6 text-text-muted font-light text-lg">
            <p className="flex items-start gap-6 p-8 rounded-xl hover:bg-dark transition-colors duration-300 border border-transparent hover:border-dark-border">
              <span className="text-2xl text-accent-gold flex-shrink-0 font-light">✗</span>
              <span>This is NOT therapy or counseling. I'm not a licensed therapist, though I create a therapeutic environment.</span>
            </p>
            <p className="flex items-start gap-6 p-8 rounded-xl hover:bg-dark transition-colors duration-300 border border-transparent hover:border-dark-border">
              <span className="text-2xl text-accent-gold flex-shrink-0 font-light">✗</span>
              <span>This is NOT medical or psychiatric advice. For mental health crises, please seek professional help immediately.</span>
            </p>
            <p className="flex items-start gap-6 p-8 rounded-xl hover:bg-dark transition-colors duration-300 border border-transparent hover:border-dark-border">
              <span className="text-2xl text-accent-gold flex-shrink-0 font-light">✗</span>
              <span>This is NOT a legal service. For legal matters, consult an attorney.</span>
            </p>
            <p className="flex items-start gap-6 p-8 rounded-xl hover:bg-dark transition-colors duration-300 border border-transparent hover:border-dark-border">
              <span className="text-2xl text-accent-gold flex-shrink-0 font-light">✗</span>
              <span>This is NOT a magic fix. I'm a guide and witness, not a savior.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{background: 'rgba(212, 175, 55, 0.4)'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 text-text-heading">
            Ready to Be Heard?
          </h2>
          <p className="text-text-muted text-xl mb-12 font-light leading-relaxed">
            Let's have a conversation. A real one. Where you matter more than anything else.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-accent-gold text-dark font-semibold rounded-lg text-lg hover:shadow-glow-pulse transition-all duration-300 hover:scale-105"
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
