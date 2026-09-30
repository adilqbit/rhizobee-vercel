import type { Metadata } from "next";
import { PageHero, Container, SectionHeading } from "@/components/ui";
import { careers, company } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Rhizobee Innovations. Current openings include Enterprise Sales Manager, Reception cum Admin and HR, and Business Development Manager – Corporate Tie-ups (MICE).",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers at Rhizobee"
        title="Deliver payment solutions businesses truly rely on."
        description={careers.intro}
      />

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="What it's like on the team"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careers.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-paper p-7">
                <h3 className="font-display text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim py-24">
        <Container>
          <SectionHeading eyebrow="Open Roles" title="Current openings" description={careers.ctaText} />
          <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
            {careers.openings.map((role, i) => (
              <a
                key={`${role.title}-${i}`}
                href={`mailto:${company.email}?subject=${encodeURIComponent(
                  "Application: " + role.title
                )}`}
                className="group flex flex-col gap-2 p-6 transition-colors hover:bg-paper sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{role.title}</h3>
                  <p className="mt-1 text-sm text-slate-dim">{role.type}</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate">{role.summary}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-royal">
                  Apply <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate">
            Don&apos;t see a role that fits? Send your resume and a note about
            what you&apos;d want to work on to{" "}
            <a href={`mailto:${company.email}`} className="font-semibold text-royal">
              {company.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
