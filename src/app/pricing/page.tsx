import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Pricing from "@/components/sections/Pricing";
import FAQSection from "@/components/sections/FAQSection";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";
import { faqItems } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Pricing Plans | Premium Web Design starting ₹3,999",
  description: "Check out our affordable web development pricing plans. Get high-converting portfolio websites, business pages, and custom e-commerce shops.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing Plans | Premium Web Design starting ₹3,999",
    description: "Check out our affordable web development pricing plans. Get high-converting portfolio websites, business pages, and custom e-commerce shops.",
    url: "https://makeportfolio.in/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans | Premium Web Design starting ₹3,999",
    description: "Check out our affordable web development pricing plans. Get high-converting portfolio websites, business pages, and custom e-commerce shops.",
  },
};

export default function PricingPage() {
  // Generate FAQ JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />
      <main className="relative z-10 pt-16">
        <Pricing />
        <FAQSection />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
