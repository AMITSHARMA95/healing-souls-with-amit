import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'
import { FadeIn, SlideUp, StaggerContainer } from '@/components/Animations'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export const metadata: Metadata = {
  title: 'Private Day Presence | Healing Souls - Full Day Emotional Support',
  description:
    'Spend a full day with Amit for continuous emotional presence, walking, talking, and silent moments together. Delhi-based offering.',
}

export default function PrivateDayPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn duration={1}>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-text-light leading-tight">
              Spend a Full Day
              <span className="block text-accent-gold mt-2">With Someone Who Listens</span>
            </h1>
          </FadeIn>

          <SlideUp delay={0.2} duration={1}>
            <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
              This is not an hourly session. This is a full day of presence. Talking, walking, sitting in
              silence — if needed.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* What It Looks Like */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-16 text-text-light text-center">
              How a Full Day Works
            </h2>
          </FadeIn>

          <StaggerContainer>
            {[
              {
                time: 'Morning',
                description:
                  "We meet at a quiet location in Delhi. Coffee, tea, or just sitting. You lead where the conversation goes, or we sit in silence. There's no agenda.",
              },
              {
                time: 'Mid-Day',
                description:
                  "We might walk. Movement helps some people talk. Or we might stay still. We talk about what matters. About the confusion. About what you're feeling. About nothing in particular.",
              },
              {
                time: 'Afternoon',
                description:
                  "If you need a break from talking, we take it. A walk in the park. A quiet lunch. Sitting by a window. Being present doesn't always mean conversation.",
              },
              {
                time: 'Evening',
                description:
                  "We wind down. You might feel lighter, or you might feel different in ways you can't quite name. Both are okay. I'm here until you need to go.",
              },
            ].map((phase, idx) => (
              <div key={idx} className="mb-8 last:mb-0">
                <SlideUp delay={idx * 0.15}>
                  <div className="border-l-4 border-accent-gold pl-8 py-4">
                    <h3 className="text-2xl font-serif font-light text-accent-gold mb-3">{phase.time}</h3>
                    <p className="text-text-muted font-light text-lg leading-relaxed">{phase.description}</p>
                  </div>
                </SlideUp>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Full Day */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              Why a Full Day Changes Things
            </h2>
          </FadeIn>

          <div className="space-y-8 text-text-muted font-light text-lg leading-relaxed">
            <SlideUp delay={0.1}>
              <p>
                A one-hour session is enough to talk about the problem. But healing doesn't happen in one
                hour. Trust doesn't build in one hour. Real presence takes time.
              </p>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="bg-dark rounded-2xl p-8 border border-dark-border">
                <p className="text-text-light text-xl font-serif font-light mb-4">
                  When you have a full day together:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-2xl">•</span>
                    <span>
                      The initial defensiveness melts away. You stop performing. You start being real.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-2xl">•</span>
                    <span>
                      You can cry, and then recover, and then cry again. It's not rushed into a tissue box.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-2xl">•</span>
                    <span>
                      The things you don't say in the first 30 minutes—those come out slowly, naturally.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-accent-gold flex-shrink-0 text-2xl">•</span>
                    <span>
                      You experience what it's like to be truly seen. Not in a clinical way. Just... seen.
                    </span>
                  </li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.4}>
              <p>
                By the end of the day, you won't have "solved" anything. But you'll feel less alone. And
                sometimes, that's the most powerful medicine.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              This Is For You If...
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'You\'re going through a breakup or divorce and need someone to just be with you',
              'You\'re confused about your life direction and need clarity from a calm presence',
              'You\'ve experienced trauma and need to process it without clinical distance',
              'You feel alone and need to remember what real connection feels like',
              'You\'re in Delhi and can meet for a full day of undivided attention',
              'You value privacy and need to know your conversation stays between us',
            ].map((item, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <div className="flex gap-4 items-start">
                  <span className="text-accent-gold flex-shrink-0 text-3xl leading-none">✓</span>
                  <p className="text-text-muted font-light text-lg">{item}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Details */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              Practical Details
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {[
              {
                label: 'Duration',
                value: 'Full day (typically 8-10 hours, flexible based on your needs)',
              },
              {
                label: 'Location',
                value: 'Delhi (parks, cafes, quiet spaces—we choose together)',
              },
              {
                label: 'Privacy',
                value: 'Completely confidential. No notes, no sharing, no judgment.',
              },
              {
                label: 'Investment',
                value: 'Discuss privately on WhatsApp. Worth it for someone serious.',
              },
              {
                label: 'What to Bring',
                value: 'Yourself. Comfort shoes. We\'ll handle food and drinks.',
              },
              {
                label: 'What Happens After',
                value: 'You can follow up anytime with questions or just to talk. No limits.',
              },
            ].map((item, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <div className="border-b border-dark-border pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-text-light mb-2">{item.label}</h3>
                  <p className="text-text-muted font-light">{item.value}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-text-light">
              Ready to Experience Real Presence?
            </h2>
          </FadeIn>

          <SlideUp delay={0.2}>
            <p className="text-lg text-text-muted font-light mb-8 leading-relaxed">
              If you're in Delhi and feel called to this, let's talk. On WhatsApp. Confidentially. No
              pressure.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </a>
          </SlideUp>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
