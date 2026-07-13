import Link from "next/link";
import { PrimaryButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-data text-sm font-semibold uppercase tracking-[0.2em] text-royal">
        404
      </p>
      <h1 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-slate">
        The page you&apos;re looking for may have moved or no longer exists. Head
        back to the homepage to keep exploring.
      </p>
      <div className="mt-8">
        <PrimaryButton href="/">Back to Home</PrimaryButton>
      </div>
    </section>
  );
}
