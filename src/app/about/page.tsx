import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Team from "@/components/sections/Team";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Us | makePortfolio.in Web Design Agency",
  description: "Learn about our story and our core commitments. We believe everyone deserves a website: responsive, custom, and performance-tuned.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | makePortfolio.in Web Design Agency",
    description: "Learn about our story and our core commitments. We believe everyone deserves a website.",
    url: "https://makeportfolio.in/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | makePortfolio.in Web Design Agency",
    description: "Learn about our story and our core commitments. We believe everyone deserves a website.",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />
      <main className="relative z-10 pt-16">
        <WhyChooseUs />
        <Team />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
