import type { Metadata } from "next";
import { PageHero, Container } from "@/components/ui";
import { company } from "@/lib/content";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rhizobee Innovations. Email info@rhizobee.com or fill out our contact form to discuss your project.",
  alternates: { canonical: "/contact" },
};

// The map falls back to a city-level view until a verified office address
// replaces the placeholder lines in src/lib/content.ts.
const hasConfirmedAddress = !company.address.some((line) => line.includes("["));
const hasConfirmedPhone = !company.phone.includes("[");
const mapQuery = hasConfirmedAddress
  ? company.address.join(", ")
  : "Mumbai, Maharashtra, India";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's get your business accepting payments"
        description="Whether you need a payment gateway, QR code, soundbox, POS device, or PPI wallet solution, tell us about your business. We respond to every inquiry within one business day."
      />

      <section className="bg-white py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Reach us directly using the details below, or send a message
              using the form and our team will follow up.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <Mail className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a href={`mailto:${company.email}`} className="text-sm text-slate hover:text-royal">
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <Phone className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Phone</p>
                  {hasConfirmedPhone ? (
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-sm text-slate hover:text-royal">
                      {company.phone}
                    </a>
                  ) : (
                    <p className="text-sm italic text-slate-dim">{company.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <MapPin className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Corporate Office</p>
                  <p className="text-sm leading-relaxed text-slate">
                    {company.address.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                  {!hasConfirmedAddress && (
                    <p className="mt-1 text-xs italic text-slate-dim">
                      Office address to be confirmed before launch.
                    </p>
                  )}
                  <p className="mt-2 text-xs text-slate-dim">CIN: {company.cin}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <Clock className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Business Hours</p>
                  <p className="text-sm text-slate">{company.officeHours}</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>

      <section className="border-t border-line bg-paper-dim py-16">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Rhizobee Innovations office location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {!hasConfirmedAddress && (
            <p className="mt-3 text-xs text-slate-dim">
              Showing an approximate city location. This will be updated to
              the exact office address once confirmed.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
