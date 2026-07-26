import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import Performance from "@/components/sections/Performance";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import BlogPreview from "@/components/sections/BlogPreview";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";

// Schema.org Structured Metadata
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://makeportfolio.in/#organization",
      "name": "makePortfolio.in Agency",
      "url": "https://makeportfolio.in",
      "logo": "https://makeportfolio.in/logo.png",
      "sameAs": [
        "https://github.com/abhijeeeth",
        "https://www.linkedin.com/in/stabhijith/",
        "https://twitter.com"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://makeportfolio.in/#localbusiness",
      "name": "makePortfolio.in Web Development Agency",
      "url": "https://makeportfolio.in",
      "telephone": "+916238545696",
      "priceRange": "INR",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "MG Road",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://makeportfolio.in/#website",
      "url": "https://makeportfolio.in",
      "name": "makePortfolio.in | Premium Web Development & Design Agency",
      "publisher": { "@id": "https://makeportfolio.in/#organization" }
    }
  ]
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      {/* Schema LD-JSON */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Decorative overlay grids */}
      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <Process />
        <TechStack />
        <Portfolio />
        <Performance />
        <Team />
        <Testimonials />
        <FAQSection />
        <BlogPreview />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
