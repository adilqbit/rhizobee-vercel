export const company = {
  name: "Rhizobee Innovations",
  legalName: "Rhizobee Innovations Private Limited",
  shortName: "Rhizobee",
  domain: "rhizobee.com",
  tagline: "Secure Payments. Smart Solutions.",
  email: "info@rhizobee.com",
  phone: "022-4585 7049",
  officeHours: "Monday – Saturday, 10:00 AM – 6:30 PM IST",
  address: [
    "101, Wellington Business Park 2",
    "Andheri Kurla Road, Marol, Andheri East",
    "Mumbai 400059",
  ],
  cin: "U72900DL2022PTC393198",
  mission:
    "Delivering secure, compliant, and user-friendly payment solutions that empower businesses to thrive in a cashless ecosystem.",
  vision:
    "To simplify digital payments, foster financial inclusion, and strengthen India's digital economy by bridging the gap between merchants, enterprises, and financial institutions.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "payment-gateway-solutions",
    icon: "payments",
    title: "Payment Gateway Solutions",
    short: "Seamless online payment acceptance for businesses of every size.",
    description:
      "Accept payments online with a fast, secure gateway that supports cards, net banking, UPI, and wallets through a single integration. Built for high-volume checkout flows, with real-time visibility into every transaction and settlement.",
    points: [
      "Single integration for cards, net banking, UPI & wallets",
      "Real-time transaction monitoring and settlement tracking",
      "Bank-grade security and fraud screening",
      "Simple onboarding with dedicated integration support",
    ],
  },
  {
    slug: "qr-code-payments",
    icon: "qr",
    title: "QR Code Payments",
    short: "Easy-to-use merchant QR solutions for instant UPI transactions.",
    description:
      "Give every merchant, from a neighbourhood store to a multi-outlet chain, a simple way to accept instant UPI payments. Our QR solutions are quick to deploy, easy for customers to use, and backed by real-time settlement reporting.",
    points: [
      "Instant UPI acceptance at the counter",
      "Static and dynamic QR options for every business type",
      "Real-time payment confirmation and reporting",
      "No additional hardware required to get started",
    ],
  },
  {
    slug: "soundbox-solutions",
    icon: "soundbox",
    title: "Soundbox Solutions",
    short: "Real-time voice confirmations for merchant payments.",
    description:
      "Give merchants instant, audible confirmation of every payment received — no more checking a phone screen mid-transaction. Our soundbox devices are built for busy counters and high-footfall retail environments.",
    points: [
      "Instant voice confirmation in multiple languages",
      "Reliable connectivity for high-footfall counters",
      "Reduces payment disputes and counter delays",
      "Simple setup with ongoing device support",
    ],
  },
  {
    slug: "pos-devices",
    icon: "pos",
    title: "POS Devices",
    short: "Smart point-of-sale terminals for card and digital transactions.",
    description:
      "Smart, reliable POS terminals that accept cards, UPI, and digital wallets from one device. Designed for retail counters, service businesses, and enterprise checkout lines that need dependable, everyday hardware.",
    points: [
      "Accepts cards, UPI, and digital wallets in one device",
      "Fast transaction processing with minimal downtime",
      "Centralised reporting across multiple terminals",
      "Nationwide deployment and device support",
    ],
  },
  {
    slug: "ppi-wallet-solutions",
    icon: "wallet",
    title: "PPI Wallet Solutions",
    short: "Prepaid wallet infrastructure with full regulatory compliance.",
    description:
      "Prepaid instrument (PPI) wallet infrastructure that lets businesses issue, load, and manage digital wallets for customers or employees — fully compliant and built for digital-first financial inclusion at scale.",
    points: [
      "End-to-end verification and regulatory compliance",
      "Wallet issuance, loading, and transaction management",
      "Built for corporate disbursements and consumer wallets alike",
      "Scalable infrastructure backed by banking partners",
    ],
  },
  {
    slug: "brand-gift-vouchers-gift-cards",
    icon: "gift",
    title: "Brand Gift Vouchers & Gift Cards",
    short: "Flexible gifting solutions for rewards, recognition, customer engagement, and corporate incentive programs.",
    description:
      "Looking for the perfect way to reward, recognize, or delight? Our Brand Gift Vouchers and Gift Cards are designed to offer flexibility, convenience, and choice. With our gift solutions, you empower recipients to pick what they truly value — making every gift meaningful.",
    points: [
      "Wide Selection of Brands – choose from leading retail, lifestyle, dining, and entertainment partners",
      "Perfect for Every Occasion – employee rewards, customer appreciation, festive gifting, or personal celebrations",
      "Easy to Use – redeemable both online and offline for a smooth experience",
      "Customizable Options – corporate clients can personalize cards with branding for recognition and promotional campaigns",
      "Secure & Reliable – backed by trusted payment solutions ensuring safe transactions",
    ],
  },
];

// The Solutions page presents the same six core services — names and
// descriptions must stay identical to the Services page and Footer, so
// Solutions intentionally reuses the `services` array rather than defining
// separate content.
export const solutions = services;

export const partnership = {
  eyebrow: "Strategic Partnerships",
  title: "Backed by leading banks and payment aggregators",
  body: "Rhizobee Innovations operates as a distribution partner for leading Banks and Payment Aggregators. Through these partnerships, the company extends advanced payment technologies to merchants and corporations while ensuring compliance, reliability, and innovation.",
};

// "Who We Serve" — the five customer categories Rhizobee empowers with
// secure, scalable, and innovative payment technologies.
export const whoWeServe = [
  {
    slug: "small-business-owners",
    title: "Small Business Owners",
    description:
      "Simple, affordable QR and soundbox solutions that let small business owners start accepting digital payments in minutes, with no complex setup.",
  },
  {
    slug: "smes",
    title: "SMEs",
    description:
      "Payment gateway, POS, and wallet solutions that scale with small and medium enterprises as their transaction volumes and channels grow.",
  },
  {
    slug: "msmes",
    title: "MSMEs",
    description:
      "Compliant, digital-first payment infrastructure that helps micro, small, and medium enterprises formalise operations and access financial inclusion.",
  },
  {
    slug: "enterprises",
    title: "Enterprises",
    description:
      "Enterprise-grade payment APIs, dashboards, and dedicated support for organisations managing high transaction volumes across multiple locations.",
  },
  {
    slug: "corporates",
    title: "Corporates",
    description:
      "Secure disbursement, wallet, and payment acceptance infrastructure built for corporate treasury, vendor payments, and large-scale operations.",
  },
];

export const stats = [
  { value: "6", label: "Core payment solutions on one platform" },
  { value: "99.9%", label: "Transaction platform uptime" },
  { value: "24/7", label: "Merchant support availability" },
  { value: "100%", label: "Compliant merchant onboarding" },
];

export const whyChoose = [
  {
    title: "Backed by trusted partners",
    description: "We operate as a distribution partner to leading banks and payment aggregators, so every solution is built on regulated, reliable infrastructure.",
  },
  {
    title: "Compliance built in",
    description: "Security, compliance, and data protection are built into every solution we deploy.",
  },
  {
    title: "One partner, every payment method",
    description: "Gateway, QR, soundbox, POS, wallet, and gifting solutions under a single merchant relationship instead of six separate vendors.",
  },
  {
    title: "Built for every business size",
    description: "From a single-counter shop to a multi-location corporate, our solutions scale with transaction volume and complexity.",
  },
  {
    title: "Real-time visibility",
    description: "Merchants and finance teams get real-time settlement and reconciliation data, not end-of-month surprises.",
  },
  {
    title: "Dedicated merchant support",
    description: "Onboarding, device setup, and day-to-day support from a team that understands payments, not a generic call centre.",
  },
];

export const testimonials = [
  {
    quote:
      "Switching to Rhizobee's QR and soundbox combination cut our checkout time in half. Customers pay, we hear the confirmation, done.",
    name: "Owner",
    company: "Retail store, Mumbai",
  },
  {
    quote:
      "Our onboarding was fast and far simpler than we expected. We were live and accepting payments within days.",
    name: "Finance Manager",
    company: "Regional SME distributor",
  },
  {
    quote:
      "Having gateway, POS, and wallet payments under one dashboard has made monthly reconciliation dramatically easier for our finance team.",
    name: "Head of Finance",
    company: "Multi-location retail corporate",
  },
];

export const faqs = [
  {
    question: "What is a PPI wallet, and how can my business use one?",
    answer:
      "A Prepaid Payment Instrument (PPI) wallet is a digital wallet that can be loaded with funds and used for payments, disbursements, or transfers. Businesses use PPI wallets for customer loyalty and payments, employee or vendor disbursements, and digital-first financial inclusion programs. Our PPI wallet solutions are fully compliant and built on regulated banking infrastructure.",
  },
  {
    question: "Is Rhizobee Innovations a bank or payment aggregator itself?",
    answer:
      "Rhizobee Innovations operates as a distribution partner for leading banks and payment aggregators. This means we bring you access to regulated, bank-grade payment infrastructure through our partnerships, combined with dedicated onboarding, device, and support services.",
  },
  {
    question: "How quickly can my business start accepting payments?",
    answer:
      "Most merchants can be onboarded and live within a few business days, depending on the solution and documentation required. QR code payments typically have the fastest turnaround, while POS and PPI wallet solutions may involve additional verification steps.",
  },
  {
    question: "Which businesses can use Rhizobee's payment solutions?",
    answer:
      "Our solutions are designed for small business owners, SMEs, MSMEs, enterprises, and corporates. Whether you're a single-counter shop or a multi-location corporate, we have a payment acceptance combination that fits your transaction volume and operations.",
  },
  {
    question: "Can I use multiple payment methods — QR, POS, and soundbox — together?",
    answer:
      "Yes. Many of our merchants combine QR, soundbox, and POS under a single merchant account, giving customers flexibility while keeping settlement and reconciliation unified on one dashboard.",
  },
  {
    question: "How is my business data and transaction security handled?",
    answer:
      "Security and regulatory compliance are core to how we operate, given our partnerships with banks and payment aggregators. All solutions follow strict verification requirements and industry-standard data protection practices aligned with our partner institutions' regulatory obligations.",
  },
];

export const careers = {
  intro:
    "We provide trusted solutions and strategic partnerships powering India's next wave of digital payments.",
  ctaText:
    "If you're passionate about helping small businesses and enterprises embrace digital payment transformation, we'd love to connect with you.",
  values: [
    { title: "Ownership over oversight", description: "We hire people we trust to make good decisions, then get out of their way." },
    { title: "Compliance as craft", description: "In fintech, getting compliance and security right is part of doing the job well, not a separate concern." },
    { title: "Direct communication", description: "Feedback is specific, timely, and given with the intent of helping you do better work." },
    { title: "Sustainable pace", description: "Good engineering and good partnerships happen over years, not through repeated crunch." },
  ],
  openings: [
    {
      title: "Senior Full-Stack Engineer",
      type: "Full-time · Mumbai / Remote",
      summary: "Build and maintain the platforms behind our payment gateway, QR, and wallet products.",
    },
    {
      title: "Merchant Onboarding & Compliance Associate",
      type: "Full-time · Mumbai",
      summary: "Manage merchant onboarding, documentation, and compliance in line with partner-bank requirements.",
    },
    {
      title: "DevOps / Cloud Engineer",
      type: "Full-time · Mumbai / Remote",
      summary: "Own infrastructure, uptime, and monitoring for transaction-critical payment systems.",
    },
    {
      title: "Business Development Associate — Payments",
      type: "Full-time · Mumbai",
      summary: "Grow merchant and corporate partnerships across QR, POS, soundbox, and wallet solutions.",
    },
    {
      title: "QA Automation Engineer",
      type: "Full-time · Mumbai / Remote",
      summary: "Build automated test coverage across payment flows, devices, and integration APIs.",
    },
  ],
};
