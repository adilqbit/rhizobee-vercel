import type { Metadata } from "next";
import { PageHero, Container, SectionHeading, Eyebrow } from "@/components/ui";
import { StatBar, ContactCTA, PartnershipSection } from "@/components/Sections";
import { whyChoose, company } from "@/lib/content";
import { ShieldCheck, Target, Users2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rhizobee Innovations Private Limited — our mission, vision, and approach to building secure digital payment solutions for merchants and enterprises.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Compliance first",
    description: "Every product we deploy is built around security and regulatory compliance, not retrofitted after launch.",
  },
  {
    icon: Target,
    title: "Financial inclusion",
    description: "We measure success by how many businesses we bring into the digital payments economy, not just transaction volume.",
  },
  {
    icon: Users2,
    title: "Partnership, not vendorship",
    description: "As a distribution partner to banks and payment aggregators, we treat every relationship as a long-term one.",
  },
  {
    icon: Sparkles,
    title: "Reliability at the counter",
    description: "Good payment infrastructure shows up in the moments merchants never have to think about — it simply works.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Rhizobee"
        title="Simplifying digital payments for every kind of business"
        description={`${company.legalName} is a next-generation fintech company specialising in digital payment solutions — empowering small business owners, SMEs, MSMEs, enterprises, and corporations with secure, scalable, and innovative payment technologies.`}
      />

      <StatBar />

      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built to bridge merchants, enterprises, and financial institutions
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate">
            <p>
              Rhizobee Innovations was founded on a simple premise: secure,
              reliable digital payment technology should be accessible to
              every business, not just those with dedicated finance and IT
              teams. That belief shapes every product we bring to market.
            </p>
            <p>
              We operate as a distribution partner for leading banks and
              payment aggregators, which means the merchants and corporates
              we serve get the benefit of regulated, bank-grade
              infrastructure — combined with hands-on onboarding, device
              support, and a single point of contact for every payment
              method they use.
            </p>
            <p>
              Today, our payment gateway, QR, soundbox, POS, and PPI wallet
              solutions support businesses of every size across India, with
              the same principle we started with: compliant, dependable
              payments, delivered simply.
            </p>
          </div>
          <p className="mt-6 text-xs text-slate-dim">
            {company.legalName} · CIN: {company.cin}
          </p>
        </Container>
      </section>

      {/* MISSION */}
      <section className="bg-paper-dim py-24">
        <Container className="max-w-3xl text-center">
          <Eyebrow>Our Mission</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Why we do this
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-ink-soft">
            {company.mission}
          </p>
        </Container>
      </section>

      {/* VISION */}
      <section className="bg-ink relative overflow-hidden py-24">
        <div className="lattice-bg absolute inset-0 opacity-20" aria-hidden="true" />
        <Container className="relative max-w-3xl text-center">
          <Eyebrow>Our Vision</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Where we&apos;re headed
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-white/80">
            {company.vision}
          </p>
        </Container>
      </section>

      <section className="bg-paper-dim py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="The principles behind how we work"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-7 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-royal/10 text-royal">
                  <v.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-display mt-5 text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnershipSection />

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="Why merchants and corporates choose to grow with us"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line p-7">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA
        title="Want to know if we're the right payments partner for you?"
        description="A short conversation is usually enough to tell. Reach out and we'll give you a straight answer."
      />
    </>
  );
}
