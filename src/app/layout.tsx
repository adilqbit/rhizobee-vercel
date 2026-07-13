import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://www.rhizobee.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Secure Payments. Smart Solutions.`,
    template: `%s | ${company.name}`,
  },
  description:
    "Rhizobee Innovations Private Limited is a next-generation fintech company delivering secure digital payment solutions — payment gateway, QR, soundbox, POS, and PPI wallets — for small businesses, SMEs, MSMEs, enterprises, and corporates.",
  keywords: [
    "Rhizobee Innovations",
    "payment gateway solutions",
    "QR code payments",
    "soundbox payment device",
    "POS machine India",
    "PPI wallet solutions",
    "digital payment company India",
    "fintech distribution partner",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Secure Payments. Smart Solutions.`,
    description:
      "Secure, scalable digital payment solutions — payment gateway, QR, soundbox, POS, and PPI wallets — for merchants, enterprises, and corporates.",
    images: [{ url: "/images/rhizobee-logo-full.png", width: 1200, height: 400, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Secure Payments. Smart Solutions.`,
    description:
      "Secure, scalable digital payment solutions for small businesses, SMEs, MSMEs, enterprises, and corporates.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
