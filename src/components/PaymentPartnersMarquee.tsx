import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";

type Partner = {
  name: string;
  src: string;
  /** intrinsic pixel size of the supplied asset (preserves aspect ratio) */
  width: number;
  height: number;
  /** display height in px on desktop; scaled down on small screens via --logo-scale */
  h: number;
};

export const paymentPartners: Partner[] = [
  { name: "PayU", src: "/images/partners/payu.png", width: 233, height: 126, h: 40 },
  { name: "Zaakpay", src: "/images/partners/zaakpay.png", width: 640, height: 122, h: 26 },
  { name: "JioPay", src: "/images/partners/jiopay.png", width: 320, height: 320, h: 44 },
  { name: "Getepay", src: "/images/partners/getepay.png", width: 319, height: 320, h: 44 },
  { name: "Easebuzz", src: "/images/partners/easebuzz.png", width: 398, height: 60, h: 24 },
  { name: "PayPoint", src: "/images/partners/paypoint.png", width: 320, height: 320, h: 40 },
  { name: "ArthPay", src: "/images/partners/arthpay.png", width: 438, height: 150, h: 34 },
  { name: "Airpay", src: "/images/partners/airpay.png", width: 170, height: 51, h: 26 },
  { name: "Razorpay", src: "/images/partners/razorpay.png", width: 640, height: 139, h: 28 },
  { name: "PhonePe", src: "/images/partners/phonepe.png", width: 370, height: 320, h: 44 },
  { name: "FINACUS", src: "/images/partners/finacus.png", width: 471, height: 116, h: 32 },
];

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={`partner-marquee-group flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4${
        hidden ? " partner-marquee-dup" : ""
      }`}
      aria-hidden={hidden || undefined}
    >
      {paymentPartners.map((p) => (
        <li
          key={p.name}
          className="group flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-5 transition-colors duration-300 hover:border-royal/40 sm:h-24 sm:w-48"
        >
          <Image
            src={p.src}
            alt={hidden ? "" : `${p.name} logo`}
            width={p.width}
            height={p.height}
            sizes="160px"
            draggable={false}
            style={{ height: `calc(${p.h}px * var(--logo-scale, 1))`, width: "auto" }}
            className="max-w-full object-contain opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
          />
        </li>
      ))}
    </ul>
  );
}

export function PaymentPartnersMarquee() {
  return (
    <section
      aria-labelledby="payment-partners-heading"
      className="overflow-hidden bg-white pb-10 pt-16 sm:pb-12 sm:pt-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Trusted Ecosystem</Eyebrow>
          <h2
            id="payment-partners-heading"
            className="text-balance mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Our Payments Partners
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            We work with leading payment aggregators and gateways to deliver
            reliable, compliant payment acceptance to our merchants.
          </p>
        </div>
      </Container>

      <div className="partner-marquee mt-10 sm:mt-12" role="region" aria-label="Payment partner logos">
        <div className="partner-marquee-track flex w-max">
          <LogoGroup />
          <LogoGroup hidden />
          <LogoGroup hidden />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
