import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FadeIn, SlideUp } from '@/components/Animations'

export const metadata: Metadata = {
  title: 'Legal & Discretion | Healing Souls - Privacy & Confidentiality',
  description: 'Understanding the legal boundaries, privacy policies, and confidentiality agreements of this service.',
}

export default function LegalPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn duration={1}>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-text-light leading-tight">
              Privacy & Discretion
            </h1>
          </FadeIn>

          <SlideUp delay={0.2} duration={1}>
            <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Understanding the legal framework, boundaries, and commitments that protect your privacy.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <SlideUp>
            <div className="bg-dark rounded-2xl p-8 border-2 border-accent-gold">
              <h2 className="text-2xl font-serif font-light text-accent-gold mb-4">Important Disclaimer</h2>
              <p className="text-text-muted font-light text-lg leading-relaxed">
                I am not a licensed therapist, psychologist, psychiatrist, or medical professional. This
                service is not therapy, counseling, or medical treatment.
              </p>
              <p className="text-text-muted font-light text-lg leading-relaxed mt-4">
                If you are experiencing suicidal thoughts, self-harm urges, or severe mental health crises,
                please contact emergency services or visit a mental health professional immediately.
              </p>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Privacy & Confidentiality */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              Your Privacy Is Sacred
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {[
              {
                title: 'Complete Confidentiality',
                items: [
                  'Everything you share with me stays with me. No exceptions.',
                  'No notes, recordings, or documentation of our conversations.',
                  'No sharing with third parties under any circumstance.',
                  'No use of your information for marketing, research, or any other purpose.',
                ],
              },
              {
                title: 'No Data Collection',
                items: [
                  "I don't collect personal data beyond what you choose to share.",
                  "No cookies, tracking, or analytics follow your activity.",
                  "No WhatsApp conversation history is stored beyond the chat app itself.",
                  "No contact list or email sharing.",
                ],
              },
              {
                title: 'Anonymity in Your Presentation',
                items: [
                  'You can remain completely anonymous if you wish.',
                  'You do not need to share your full name or location.',
                  'Your identity is your choice, and it will be protected.',
                  'No social media posts, stories, or public mention of our work together.',
                ],
              },
              {
                title: 'What I Will Never Do',
                items: [
                  'Sell or share your contact information.',
                  'Use your story for testimonials without explicit written consent.',
                  'Discuss you with colleagues, friends, or family.',
                  'Judge you based on what you share.',
                  'Breach your confidence for any reason.',
                ],
              },
            ].map((section, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <div className="mb-12">
                  <h3 className="text-2xl font-serif font-light text-text-light mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span className="text-accent-gold flex-shrink-0 text-lg">—</span>
                        <span className="text-text-muted font-light text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Boundaries */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              When I Must Break Confidence
            </h2>
          </FadeIn>

          <SlideUp>
            <p className="text-text-muted font-light text-lg leading-relaxed mb-8">
              While confidentiality is absolute, there are rare legal circumstances where I may be required
              to break confidence:
            </p>
          </SlideUp>

          <div className="space-y-6">
            {[
              {
                label: "Imminent Danger",
                text: "If you express intent to seriously harm yourself or others, I may need to involve emergency services.",
              },
              {
                label: "Child Abuse",
                text: "If you disclose abuse of minors, I am legally required to report to authorities.",
              },
              {
                label: "Elder or Dependent Abuse",
                text: "Similar legal obligations apply to abuse of vulnerable populations.",
              },
              {
                label: "Court Order",
                text: "If legally compelled by a court order, I may be required to disclose information.",
              },
            ].map((item, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <div className="border-l-4 border-accent-gold pl-6">
                  <h4 className="text-lg font-semibold text-text-light mb-2">{item.label}</h4>
                  <p className="text-text-muted font-light">{item.text}</p>
                </div>
              </SlideUp>
            ))}
          </div>

          <SlideUp delay={0.5}>
            <p className="text-text-light mt-8 pt-8 border-t border-dark-border font-light">
              In all other circumstances, your confidence is protected completely.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              What This Service Is NOT
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Not Therapy',
                description:
                  'I do not diagnose, treat, or cure mental health conditions. This is human presence, not clinical intervention.',
              },
              {
                title: 'Not Counseling',
                description: 'I do not provide professional advice, solutions, or treatment plans.',
              },
              {
                title: 'Not Medical Treatment',
                description: 'This is not a substitute for medical or psychiatric care when needed.',
              },
              {
                title: 'Not Relationship Repair',
                description: 'I cannot fix broken relationships. I can only listen as you process them.',
              },
              {
                title: 'Not Career Coaching',
                description: 'I do not provide professional career guidance or business advice.',
              },
              {
                title: 'Not Legal or Financial Advice',
                description: 'I cannot advise on legal, tax, or financial matters.',
              },
            ].map((item, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <div className="bg-dark-card rounded-2xl p-6 border border-dark-border">
                  <h3 className="text-lg font-semibold text-text-light mb-3">{item.title}</h3>
                  <p className="text-text-muted font-light">{item.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Your Responsibility */}
      <section className="py-24 px-4 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-text-light text-center">
              Your Responsibility
            </h2>
          </FadeIn>

          <SlideUp>
            <div className="space-y-6 text-text-muted font-light text-lg leading-relaxed">
              <p>
                By engaging with this service, you take responsibility for your own wellbeing and safety.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-accent-gold flex-shrink-0 text-2xl">•</span>
                  <span>
                    You acknowledge this is not therapy and seek appropriate professional help if needed.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-accent-gold flex-shrink-0 text-2xl">•</span>
                  <span>
                    You understand I cannot prevent harm, diagnose conditions, or provide clinical
                    treatment.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-accent-gold flex-shrink-0 text-2xl">•</span>
                  <span>
                    You take responsibility for any decisions you make based on our conversations.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-accent-gold flex-shrink-0 text-2xl">•</span>
                  <span>
                    You agree not to hold me liable for outcomes you experience after our time together.
                  </span>
                </li>
              </ul>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-text-light">
              Questions?
            </h2>
          </FadeIn>

          <SlideUp delay={0.2}>
            <p className="text-lg text-text-muted font-light mb-8 leading-relaxed">
              If you have any questions about privacy, legal boundaries, or how this service works, reach out
              on WhatsApp. I'm happy to clarify anything.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <a
              href="https://wa.me/9266735676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-accent-gold text-dark font-semibold rounded-2xl text-lg hover:opacity-90 transition-opacity"
            >
              Ask on WhatsApp
            </a>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </>
  )
}
