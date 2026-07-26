import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";
import BackToTop from "@/components/ui/BackToTop";

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
    url: "https://makeportfolio.in",
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
        <LenisProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
          <CallButton />
          <WhatsAppButton />
          <BackToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
