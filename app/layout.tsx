import type { Metadata } from "next";
import { Nunito_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  variable: "--font-nunito-sans"
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Tapas Growth Inc. - Consumer App Growth Expertise",
  description: "Expert consumer app growth consulting. Scale your app with proven strategies from a growth specialist who's helped apps reach millions of users.",
  keywords: "app growth, consumer apps, growth consulting, mobile app marketing, user acquisition",
  authors: [{ name: "Tapas Growth Inc." }],
  openGraph: {
    title: "Tapas Growth Inc. - Consumer App Growth Expertise",
    description: "Expert consumer app growth consulting. Scale your app with proven strategies.",
    type: "website",
    locale: "en_US",
    siteName: "Tapas Growth Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapas Growth Inc.",
    description: "Expert consumer app growth consulting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}