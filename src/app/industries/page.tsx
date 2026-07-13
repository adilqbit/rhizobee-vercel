import type { Metadata } from "next";
import { PageHero, Container } from "@/components/ui";
import { ContactCTA, PartnershipSection } from "@/components/Sections";
import { whoWeServe } from "@/lib/content";
import { Store, Building, Factory, Briefcase, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Rhizobee Innovations serves small business owners, SMEs, MSMEs, enterprises, and corporates with digital payment solutions, in partnership with leading banks and payment aggregators.",
  alternates: { canonical: "/industries" },
};

const iconFor: Record<string, typeof Store> = {
  "small-business-owners": Store,
  smes: Building,
  msmes: Factory,
  enterprises: Briefcase,
  corporates: Landmark,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Digital payment solutions for every stage of business"
        description="Rhizobee Innovations empowers small business owners, SMEs, MSMEs, enterprises, and corporates with secure, scalable, and innovative payment technologies."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.map((seg) => {
              const IconCmp = iconFor[seg.slug] ?? Briefcase;
              return (
                <div key={seg.slug} className="rounded-2xl border border-line p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-royal">
                    <IconCmp className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h2 className="font-display mt-5 text-lg font-semibold text-ink">{seg.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{seg.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <PartnershipSection />

      <ContactCTA
        title="Don't see your business type listed?"
        description="These are the customers we serve most, but our payment solutions adapt well beyond them. Get in touch to discuss your specific needs."
      />
    </>
  );
}
