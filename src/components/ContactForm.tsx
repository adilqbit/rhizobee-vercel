"use client";

import { useState, FormEvent } from "react";
import { company } from "@/lib/content";
import { Send, CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(
      `New enquiry from ${form.name}${form.companyName ? " (" + form.companyName + ")" : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nCompany: ${form.companyName || "—"}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-paper p-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-royal" />
        <h3 className="font-display mt-4 text-xl font-semibold text-ink">
          Thank you — your message is ready to send
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">
          We&apos;ve opened your email client with your message pre-filled. Send it
          across and our team will respond within one business day. You can
          also email us directly at{" "}
          <a href={`mailto:${company.email}`} className="font-semibold text-royal">
            {company.email}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-semibold text-royal hover:text-royal-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-paper p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full name <span className="text-royal">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jordan Patel"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email address <span className="text-royal">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jordan@company.com"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 98765 43210"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
          />
        </div>
        <div>
          <label htmlFor="companyName" className="text-sm font-medium text-ink">
            Company
          </label>
          <input
            id="companyName"
            type="text"
            value={form.companyName}
            onChange={update("companyName")}
            placeholder="Your company name"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message <span className="text-royal">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your business and which payment solution you're interested in."
          className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-royal"
        />
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-royal px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-royal/30 transition-all hover:bg-royal-dark sm:w-auto"
      >
        Send Message <Send className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs leading-relaxed text-slate-dim">
        Submitting this form opens your default email application with your
        details pre-filled, addressed to {company.email}.
      </p>
    </form>
  );
}
