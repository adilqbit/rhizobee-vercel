import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Container, SectionHeading } from "@/components/ui";
import { ContactCTA, FAQSection, PartnershipSection } from "@/components/Sections";
import { Icon } from "@/components/IconMap";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Rhizobee Innovations' payment solutions: payment gateway, QR code payments, soundbox solutions, POS devices, and PPI wallet solutions.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Payment technology built for how you do business"
        description="From a single QR code at a small shop to enterprise payment APIs, every service is built to get money moving safely, quickly, and with full visibility."
      />

      <section className="bg-white py-24">
        <Container className="space-y-20">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h2 className="font-display mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate">{s.description}</p>
              </div>
              <div className="rounded-2xl border border-line bg-paper p-8">
                <p className="font-data text-xs font-medium uppercase tracking-[0.2em] text-royal">
                  What&apos;s included
                </p>
                <ul className="mt-5 space-y-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-paper-dim py-24">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="A straightforward path from enquiry to live payments"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "Consult", text: "We learn about your business, transaction volumes, and which payment methods fit best." },
              { step: "Onboard", text: "Fast, compliant onboarding aligned with our banking and payment aggregator partners." },
              { step: "Activate", text: "Devices deployed, integrations tested, and your team ready to accept payments." },
              { step: "Support", text: "Ongoing device, dashboard, and settlement support so payments keep running smoothly." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-line bg-white p-7">
                <p className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {item.step}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnershipSection />

      <FAQSection />
      <ContactCTA
        title="Not sure which payment solution fits your business?"
        description="Tell us how you currently accept payments — we'll recommend the right combination of gateway, QR, soundbox, POS, or wallet for you."
      />
    </>
  );
}
