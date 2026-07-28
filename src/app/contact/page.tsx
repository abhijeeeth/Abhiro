import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact Us & Get a Quote | makePortfolio.in Agency",
  description: "Get in touch with makePortfolio.in. Schedule a free alignment consultation or request a custom web design quote for your business today.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us & Get a Quote | makePortfolio.in Agency",
    description: "Get in touch with makePortfolio.in. Schedule a free alignment consultation or request a custom web design quote for your business today.",
    url: "https://makeportfolio.in/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Get a Quote | makePortfolio.in Agency",
    description: "Get in touch with makePortfolio.in. Schedule a free alignment consultation or request a custom web design quote for your business today.",
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />
      <main className="relative z-10 pt-16">
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
