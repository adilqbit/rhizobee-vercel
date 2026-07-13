import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container, Eyebrow, PrimaryButton, SecondaryButton, Card, SectionHeading } from "@/components/ui";
import { StatBar, Testimonials, ContactCTA, FAQSection, PartnershipSection } from "@/components/Sections";
import { Icon } from "@/components/IconMap";
import { services, solutions, whoWeServe, whyChoose, company } from "@/lib/content";

export const metadata: Metadata = {
  title: `${company.name} | Secure Payments. Smart Solutions.`,
  description:
    "Rhizobee Innovations is a next-generation fintech company delivering payment gateway, QR, soundbox, POS, and PPI wallet solutions for small businesses, SMEs, MSMEs, enterprises, and corporates.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <div className="lattice-bg absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-royal/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid grid-cols-1 items-center gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div>
            <Eyebrow>Fintech &amp; Digital Payment Solutions</Eyebrow>
            <h1 className="text-balance mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Secure payments.{" "}
              <span className="bg-gradient-to-r from-sky to-gold-soft bg-clip-text text-transparent">
                Smart solutions.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Rhizobee Innovations equips small business owners, SMEs, MSMEs,
              enterprises, and corporates with secure, scalable digital
              payment technology — payment gateway, QR, soundbox, POS, and
              PPI wallet solutions, delivered through our partnerships with
              leading banks and payment aggregators.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="/contact">Talk to Our Team</PrimaryButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
              {["Secure & Reliable", "Fast & Seamless", "Built for Growth"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <Image
                src="/images/rhizobee-icon.png"
                alt="Rhizobee Innovations mark"
                width={290}
                height={235}
                className="mx-auto h-56 w-auto drop-shadow-[0_30px_60px_rgba(22,86,214,0.45)]"
                priority
              />
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Payment Gateway",
                  "QR Code Payments",
                  "Soundbox & POS",
                  "PPI Wallets",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-medium text-white/80"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatBar />

      {/* COMPANY OVERVIEW */}
      <section className="bg-white py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A fintech partner built for India&apos;s digital payments economy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate">
              {company.legalName} is a next-generation fintech company
              specialising in digital payment solutions. We empower small
              business owners, SMEs, MSMEs, enterprises, and corporations
              with secure, scalable, and innovative payment technologies —
              from a single QR code at a local shop to enterprise-grade
              payment APIs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              As a distribution partner for leading banks and payment
              aggregators, we extend advanced payment technologies to
              merchants and corporations while ensuring compliance,
              reliability, and innovation at every step.
            </p>
            <div className="mt-8">
              <SecondaryButton href="/about">More About Rhizobee</SecondaryButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {whyChoose.slice(0, 4).map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-paper-dim py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Payment solutions built for every counter and checkout"
            description="From instant UPI acceptance to enterprise wallet infrastructure, each service is built to get merchants and corporates accepting payments quickly and reliably."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.slug}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.short}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="The infrastructure behind every transaction"
            description="Backed by our partnerships with leading banks and payment aggregators, these frameworks power onboarding, integration, and settlement across our payment products."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.slug}
                className="group rounded-2xl border border-line p-7 transition-all duration-300 hover:border-royal/40 hover:shadow-[0_20px_45px_-15px_rgba(10,26,58,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <SecondaryButton href="/solutions">View All Solutions</SecondaryButton>
          </div>
        </Container>
      </section>

      <PartnershipSection />

      {/* WHY CHOOSE */}
      <section className="bg-ink py-24 relative overflow-hidden">
        <div className="lattice-bg absolute inset-0 opacity-20" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Why Rhizobee"
            title="Why merchants and corporates choose to grow with us"
            description="Every partnership is run the way we'd want a payments partner to run one for us."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for every stage of business"
            description="From a single-counter shop to a multi-location corporate, our payment solutions scale with transaction volume, compliance needs, and growth."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whoWeServe.map((seg) => (
              <div key={seg.slug} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="font-display text-base font-semibold text-ink">{seg.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{seg.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <SecondaryButton href="/industries">More on Who We Serve</SecondaryButton>
          </div>
        </Container>
      </section>

      <Testimonials />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
