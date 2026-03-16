import type { Metadata } from "next";
import { Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tapasgrowth.com"),
  title: {
    default: "Tapas Growth | App Growth Consulting & Optimization",
    template: "%s | Tapas Growth",
  },
  description:
    "Grow your consumer app with expert A/B testing, paywall design, ASO, and onboarding optimization. 100M+ users impacted across 50+ apps.",
  keywords: [
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
    "saas app growth strategy",
  ],
  authors: [{ name: "Tapas Growth Inc." }],
  creator: "Tapas Growth Inc.",
  publisher: "Tapas Growth Inc.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tapas Growth | App Growth Consulting & Optimization",
    description:
      "Expert app growth consulting: A/B testing, paywall design, ASO, and onboarding optimization. 100M+ users impacted across 50+ apps.",
    type: "website",
    locale: "en_US",
    siteName: "Tapas Growth",
    url: "https://tapasgrowth.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tapas Growth - App Growth Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapas Growth | App Growth Consulting & Optimization",
    description:
      "Expert app growth consulting: A/B testing, paywall design, ASO, and onboarding optimization. 100M+ users impacted across 50+ apps.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tapas Growth Inc.",
  url: "https://tapasgrowth.com",
  email: "hello@tapasgrowth.com",
  description:
    "Consumer app growth consulting specializing in A/B testing, paywall design, ASO, and onboarding optimization. Over 100M users impacted across 50+ apps.",
  foundingDate: "2015",
  image: "https://tapasgrowth.com/og-image.png",
  priceRange: "$$$$",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  serviceType: [
    "App Growth Consulting",
    "A/B Testing & Experimentation",
    "App Store Optimization (ASO)",
    "Paywall Design & Optimization",
    "Onboarding Design & Optimization",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "A/B Testing & Experimentation",
          description:
            "Data-driven experimentation to optimize conversion rates, retention, and revenue for consumer apps.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paywall Design & Optimization",
          description:
            "Custom paywall design for Superwall, RevenueCat, and Adapty to maximize subscription revenue.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Store Optimization (ASO)",
          description:
            "Keyword optimization, listing design, and conversion rate optimization for the App Store and Google Play.",
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
      </head>
      <body
        className={`${geistSans.variable} ${instrumentSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
