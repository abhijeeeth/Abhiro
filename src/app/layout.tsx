import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import InteractiveProviders from "@/components/InteractiveProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "makePortfolio.in | Premium Web Development & Design Agency",
  description: "We believe everyone deserves a website. Professional, custom, high-converting websites starting from ₹3,999. Portfolio websites, e-commerce, and business sites.",
  metadataBase: new URL("https://makeportfolio.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "makePortfolio.in | Premium Web Development & Design Agency",
    description: "We believe everyone deserves a website. Custom, high-converting sites starting from ₹3,999.",
    url: "https://makeportfolio.in",
    siteName: "makePortfolio.in Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "makePortfolio.in | Premium Web Development & Design Agency",
    description: "Custom, high-converting websites starting from ₹3,999.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        <LenisProvider>
          <InteractiveProviders />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
