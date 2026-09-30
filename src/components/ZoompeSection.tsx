import {
  ArrowUpRight,
  Landmark,
  Receipt,
  Plane,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import { zoompe } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  bank: Landmark,
  receipt: Receipt,
  plane: Plane,
  finance: Wallet,
};

export function ZoompeSection() {
  return (
    <section
      id="zoompe"
      aria-labelledby="zoompe-heading"
      className="relative overflow-hidden bg-ink pt-24 pb-10 sm:pb-12"
    >
      <div className="lattice-bg absolute inset-0 opacity-20" aria-hidden="true" />
      <div
        className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-royal/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          {/* Intro + CTA */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/zoompe/zoompe-logo.png"
                alt="Zoompe logo"
                width={480}
                height={480}
                className="h-12 w-12 shrink-0 rounded-xl object-contain shadow-sm sm:h-14 sm:w-14"
              />
              <Eyebrow>{zoompe.eyebrow}</Eyebrow>
            </div>
            <h2
              id="zoompe-heading"
              className="text-balance mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {zoompe.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">{zoompe.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-white/75">{zoompe.body}</p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href={zoompe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-sm shadow-gold/30 transition-all hover:bg-gold-soft hover:shadow-md"
              >
                Visit Our Retailer Portal
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
              <span className="font-data text-sm text-white/50">{zoompe.urlDisplay}</span>
            </div>
          </div>

          {/* What You Get on Zoompe */}
          <div>
            <p className="font-data text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
              What You Get on Zoompe
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {zoompe.categories.map((c) => {
                const Ico = icons[c.icon] ?? Landmark;
                return (
                  <div
                    key={c.slug}
                    className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-soft">
                        <Ico className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {c.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
