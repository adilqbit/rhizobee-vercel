import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Container, SectionHeading } from "@/components/ui";
import { ContactCTA, PartnershipSection } from "@/components/Sections";
import { Icon } from "@/components/IconMap";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Rhizobee Innovations' payment solutions: Payment Gateway Solutions, QR Code Payments, Soundbox Solutions, POS Devices, and PPI Wallet Solutions — for merchants, enterprises, and corporates.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="The complete payment solution, one merchant relationship"
        description="Payment Gateway, QR Code Payments, Soundbox, POS, and PPI Wallet Solutions — delivered as a single, compliant solution stack backed by our banking and payment aggregator partnerships."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {solutions.map((s) => (
              <div key={s.slug} id={s.slug} className="rounded-2xl border border-line p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h2 className="font-display mt-5 text-xl font-semibold text-ink">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">{s.description}</p>
                <ul className="mt-5 space-y-3 border-t border-line pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnershipSection />

      <section className="bg-paper-dim py-24">
        <Container>
          <SectionHeading
            eyebrow="Implementation"
            title="Solutions backed by regulated banking partners"
            description="As a distribution partner to leading banks and payment aggregators, we bring merchants and corporates access to compliant, reliable payment infrastructure — without having to manage those relationships directly."
          />
        </Container>
      </section>

      <ContactCTA
        title="Not sure which solution fits your business?"
        description="Tell us how you currently accept payments — we'll recommend the right combination of gateway, QR, soundbox, POS, or wallet for you."
      />
    </>
  );
}
