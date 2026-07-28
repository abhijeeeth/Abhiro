import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Our Web Design & SEO Services | makePortfolio.in Agency",
  description: "Explore our range of professional web design services, including portfolio websites, corporate business sites, e-commerce stores, SEO optimization, and website maintenance.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Web Design & SEO Services | makePortfolio.in Agency",
    description: "Explore our range of professional web design services, including portfolio websites, corporate business sites, e-commerce stores, SEO optimization, and website maintenance.",
    url: "https://makeportfolio.in/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Web Design & SEO Services | makePortfolio.in Agency",
    description: "Explore our range of professional web design services, including portfolio websites, corporate business sites, e-commerce stores, SEO optimization, and website maintenance.",
  },
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />
      <main className="relative z-10 pt-16">
        <Services />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
