import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { FAQ_ITEMS } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ppMondwest = localFont({
  src: [
    { path: "./fonts/PPMondwest-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PPMondwest-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pp-mondwest",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tapasgrowth.com"),
  title: {
    default:
      "Paywall Optimization & App Subscription Growth Agency | Tapas Growth",
    template: "%s | Tapas Growth",
  },
  description:
    "Tapas Growth designs high-converting paywalls and runs A/B experiments for subscription apps using RevenueCat, Superwall, and Adapty. $50M+ in app revenue driven across 50+ consumer apps. Book a free revenue audit.",
  keywords: [
    "paywall optimization agency",
    "paywall design agency",
    "paywall conversion optimization",
    "subscription app revenue growth",
    "mobile paywall A/B testing",
    "RevenueCat optimization consultant",
    "consumer app monetization",
    "app revenue leak audit",
    "app growth consulting",
    "mobile app growth agency",
    "app store optimization",
    "paywall optimization",
    "mobile app A/B testing",
    "app onboarding optimization",
    "consumer app growth",
    "superwall paywall design",
    "revenuecat paywall optimization",
    "adapty paywall consulting",
    "app subscription revenue optimization",
    "mobile app experimentation",
    "aso consultant",
    "app conversion rate optimization",
    "increase app revenue",
    "mobile app retention",
    "custom paywall design",
  ],
  authors: [{ name: "Tapas Growth Inc." }],
  creator: "Tapas Growth Inc.",
  publisher: "Tapas Growth Inc.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Paywall Optimization & App Subscription Growth Agency | Tapas Growth",
    description:
      "Tapas Growth designs high-converting paywalls and runs A/B experiments for subscription apps. $50M+ in app revenue driven across 50+ consumer apps.",
    type: "website",
    locale: "en_US",
    siteName: "Tapas Growth",
    url: "https://tapasgrowth.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tapas Growth - Paywall Optimization & App Subscription Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Paywall Optimization & App Subscription Growth Agency | Tapas Growth",
    description:
      "Tapas Growth designs high-converting paywalls and runs A/B experiments for subscription apps. $50M+ in app revenue driven across 50+ consumer apps.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tapas Growth Inc.",
  url: "https://tapasgrowth.com",
  email: "hello@tapasgrowth.com",
  description:
    "Consumer app growth agency specializing in paywall optimization, A/B testing, and subscription revenue growth. $50M+ in app revenue driven across 50+ consumer apps.",
  foundingDate: "2015",
  image: "https://tapasgrowth.com/og-image.png",
  priceRange: "$$$$",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  founder: [
    {
      "@type": "Person",
      name: "Jonathan Parra",
      jobTitle: "Co-Founder & Paywall Architect",
      description:
        "Designed over 4,500 mobile app paywalls. Specialist in paywall conversion optimization for consumer subscription apps.",
      knowsAbout: [
        "Paywall Design",
        "Subscription Revenue Optimization",
        "Mobile App A/B Testing",
        "RevenueCat Integration",
        "Superwall Paywall Implementation",
      ],
    },
    {
      "@type": "Person",
      name: "Sofie Mor",
      jobTitle: "Co-Founder & Growth Lead",
      description:
        "Full-funnel growth expert for consumer apps. Specializes in onboarding optimization, lifecycle marketing, and building scalable revenue systems.",
      knowsAbout: [
        "Consumer App Growth",
        "Onboarding Optimization",
        "Lifecycle Marketing",
        "App Store Optimization",
        "User Retention",
      ],
    },
  ],
  serviceType: [
    "Paywall Design & Optimization",
    "A/B Testing & Experimentation",
    "Subscription Pricing Strategy",
    "Onboarding Design & Optimization",
    "App Store Optimization (ASO)",
    "Lifecycle Marketing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth",
          description:
            "Rev-share partnership: $1,500/mo base + 20% of revenue above baseline. Unlimited paywall experiments, onboarding optimization, and weekly strategy updates.",
        },
        price: "1500",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1500",
          priceCurrency: "USD",
          unitText: "MONTH",
          description: "Base fee plus 20% of attributed revenue above baseline",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scale",
          description:
            "Full-service scaling: $7,000/mo flat rate. Dedicated growth leadership, aggressive experiment velocity, full onboarding & lifecycle redesigns, and comprehensive ASO.",
        },
        price: "7000",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "7000",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paywall Design & A/B Testing",
          description:
            "Custom paywall design and rapid A/B experimentation for Superwall, RevenueCat, and Adapty to maximize subscription revenue.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Onboarding Design & Optimization",
          description:
            "User onboarding flow design and optimization to improve activation, retention, and trial-to-paid conversion.",
        },
      },
    ],
  },
  knowsAbout: [
    "Mobile App Growth",
    "A/B Testing",
    "App Store Optimization",
    "Paywall Design",
    "Subscription Revenue Optimization",
    "User Onboarding",
    "Consumer App Strategy",
    "RevenueCat",
    "Superwall",
    "Adapty",
    "RevenueCat Integration",
    "Superwall Paywall Implementation",
    "Adapty Paywall Management",
    "Trial-to-Paid Conversion",
    "Paywall A/B Testing",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${ppMondwest.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
