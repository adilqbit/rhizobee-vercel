"use client";

import { useState } from "react";
import { Container, PrimaryButton, Eyebrow } from "@/components/ui";
import { stats, testimonials, faqs, company, partnership } from "@/lib/content";
import { ChevronDown, Quote, Handshake } from "lucide-react";

export function StatBar() {
  return (
    <section className="border-y border-line bg-white">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-semibold text-royal sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1.5 text-sm leading-snug text-slate">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function PartnershipSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="lattice-bg absolute inset-0 opacity-25" aria-hidden="true" />
      <div
        className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr]">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] text-gold">
          <Handshake className="h-8 w-8" strokeWidth={1.5} />
        </div>
        <div>
          <Eyebrow>{partnership.eyebrow}</Eyebrow>
          <h2 className="text-balance mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {partnership.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
            {partnership.body}
          </p>
        </div>
      </Container>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-paper-dim py-24">
      <Container>
        <Eyebrow>Client Voices</Eyebrow>
        <h2 className="text-balance mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What our clients say about working with us
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-white p-7"
            >
              <div>
                <Quote className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-slate-dim">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <Container className="max-w-3xl">
        <Eyebrow>Frequently Asked Questions</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Answers to common questions
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-ink">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-dim transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-royal" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-slate">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function ContactCTA({
  title = "Ready to modernise how your business runs?",
  description = "Tell us about your project and we'll get back to you within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="lattice-bg absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-royal/30 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{description}</p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/contact">Start a Conversation</PrimaryButton>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60"
          >
            {company.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
