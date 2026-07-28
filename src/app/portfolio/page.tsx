import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Portfolio from "@/components/sections/Portfolio";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | makePortfolio.in Agency",
  description: "Check out our portfolio of handcrafted, ultra-fast websites built for businesses, personal brands, e-commerce, and creators.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Our Work & Case Studies | makePortfolio.in Agency",
    description: "Check out our portfolio of handcrafted, ultra-fast websites built for businesses, personal brands, e-commerce, and creators.",
    url: "https://makeportfolio.in/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | makePortfolio.in Agency",
    description: "Check out our portfolio of handcrafted, ultra-fast websites built for businesses, personal brands, e-commerce, and creators.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />
      <main className="relative z-10 pt-16">
        <Portfolio />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
