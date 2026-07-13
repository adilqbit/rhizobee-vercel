import Link from "next/link";
import Image from "next/image";
import { company, nav, services } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="lattice-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <div className="inline-block rounded-xl bg-white/95 px-4 py-2.5">
              <Image
                src="/images/rhizobee-logo-full.png"
                alt="Rhizobee Innovations"
                width={380}
                height={100}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {company.legalName} delivers secure digital payment solutions —
              payment gateway, QR, soundbox, POS, and PPI wallets — for
              businesses of every size, in partnership with leading banks and
              payment aggregators.
            </p>
            <p className="mt-5 font-data text-xs uppercase tracking-[0.2em] text-gold">
              {company.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="hover:text-gold transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-gold transition-colors">
                  {company.email}
                </a>
              </li>
              <li>
                {company.phone.includes("[") ? (
                  <span className="italic text-white/45">{company.phone}</span>
                ) : (
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                    {company.phone}
                  </a>
                )}
              </li>
              <li className="leading-relaxed">
                {company.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>CIN: {company.cin} · {company.domain}</p>
        </div>
      </div>
    </footer>
  );
}
