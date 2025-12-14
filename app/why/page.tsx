import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LegalDisclaimer from '@/components/LegalDisclaimer'
import { FadeIn, SlideUp } from '@/components/Animations'

const WHATSAPP_URL = 'https://wa.me/9266735676'

export const metadata: Metadata = {
  title: 'Why This Exists | Healing Souls - Emotional Presence',
  description:
    'Understand why I created this space for private, confidential emotional listening and human presence.',
}

export default function WhyPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn duration={1}>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-text-light leading-tight">
              If You Don't Have a Friend You Can Truly Talk To,
              <span className="block text-accent-gold mt-2">You Can Talk to Me</span>
            </h1>
          </FadeIn>

          <SlideUp delay={0.2} duration={1}>
            <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Somewhere in your life, you might have found yourself alone with difficult emotions,
              nowhere to turn, and no one to truly listen.
              <br />
              <br />
              This space exists for that exact moment.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              The Silence Around You
            </h2>
          </FadeIn>

          <div className="space-y-8 text-text-muted font-light text-lg leading-relaxed">
            <SlideUp delay={0.1}>
              <p>
                We live in an age of connection, yet many of us feel profoundly isolated. You might have:
              </p>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="flex gap-4 items-start">
                <span className="text-accent-gold flex-shrink-0 text-2xl">—</span>
                <p>
                  Friends who are kind, but not *that* kind. Friends who judge, or who can't understand
                  the depth of what you're feeling.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="flex gap-4 items-start">
                <span className="text-accent-gold flex-shrink-0 text-2xl">—</span>
                <p>
                  A family that loves you, but feels too close to the pain. Too invested. Too quick to
                  "fix" instead of witness.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="flex gap-4 items-start">
                <span className="text-accent-gold flex-shrink-0 text-2xl">—</span>
                <p>
                  A therapist, perhaps. But therapy feels clinical, time-boxed, and sometimes too formal
                  to say what you really feel.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={0.5}>
              <div className="flex gap-4 items-start">
                <span className="text-accent-gold flex-shrink-0 text-2xl">—</span>
                <p>
                  Colleagues. A partner. But none of them feel *safe* in the way you need them to be
                  right now.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              What I Offer Instead
            </h2>
          </FadeIn>

          <div className="space-y-8 text-text-muted font-light text-lg leading-relaxed">
            <SlideUp delay={0.1}>
              <p>
                I'm not a therapist. I'm not here to diagnose or fix. I'm not here to give you answers or
                tell you what to do.
              </p>
            </SlideUp>

            <SlideUp delay={0.2}>
              <p className="text-text-light border-l-2 border-accent-gold pl-4">
                I'm here to listen the way humans listened to each other before phones, before busy lives,
                before we learned to armor ourselves.
              </p>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p>
                When you speak to me, I listen. Not waiting for my turn to talk. Not thinking about what
                I'll say next. Not trying to "solve" your problem in 50 minutes.
              </p>
            </SlideUp>

            <SlideUp delay={0.4}>
              <p>
                I listen because your story matters. Your pain matters. And in a world that often feels
                indifferent to both, that kind of listening is rare.
              </p>
            </SlideUp>

            <SlideUp delay={0.5}>
              <p className="text-text-light text-xl">
                This is a space where you are not fixing yourself. You are becoming yourself.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Core Promises */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-16 text-text-light text-center">
              The Promises I Make
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Complete Confidentiality',
                text: 'What you share with me stays with me. Forever. There are no notes, no records, no sharing with anyone else.',
              },
              {
                title: 'No Judgment',
                text: "Your feelings are valid. Your choices are yours. I'm not here to approve or disapprove—just to listen.",
              },
              {
                title: 'Pure Presence',
                text: "When we speak, you have all of my attention. No distractions. No agenda. Just genuine human presence.",
              },
              {
                title: 'Your Pace',
                text: 'You decide what to share, how much, and when to stop. If silence is what you need, silence is what we do.',
              },
            ].map((promise, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-accent-gold transition-colors">
                  <h3 className="text-2xl font-serif font-light mb-4 text-text-light">
                    {promise.title}
                  </h3>
                  <p className="text-text-muted font-light leading-relaxed">{promise.text}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-text-light">
              Why Now?
            </h2>
          </FadeIn>

          <SlideUp delay={0.2}>
            <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Because loneliness has become an epidemic. Because people are disconnected even when surrounded
              by others. Because the world needs more spaces where you can just be—without performing, without
              fixing, without explaining.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <p className="text-text-light text-xl font-serif font-light mb-12">
              I created this because I believe listening is an art form that's been lost.
            </p>
          </SlideUp>

          <SlideUp delay={0.6}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:opacity-90 transition-opacity"
            >
              Let's Start Here
            </a>
          </SlideUp>
        </div>
      </section>

      <LegalDisclaimer />
      <Footer />
    </>
  )
}
