import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Accordion from "@/components/ui/Accordion";
import GlowCard from "@/components/ui/GlowCard";
import Magnetic from "@/components/ui/Magnetic";
import { servicesData, ServiceItem } from "@/data/servicesData";
import {
  User,
  Building2,
  FileCode2,
  ShoppingBag,
  RefreshCw,
  Search,
  Settings,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  LucideIcon,
} from "lucide-react";

// Helper to map slugs to Lucide icons
const iconMap: Record<string, LucideIcon> = {
  "portfolio-websites": User,
  "business-websites": Building2,
  "landing-pages": FileCode2,
  "ecommerce-websites": ShoppingBag,
  "website-redesign": RefreshCw,
  "seo-services": Search,
  "maintenance": Settings,
  "performance-tuneup": Zap,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | makePortfolio.in Web Design Agency`,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | makePortfolio.in Web Design Agency`,
      description: service.description,
      url: `https://makeportfolio.in/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | makePortfolio.in Web Design Agency`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.slug] || Sparkles;

  // JSON-LD Service structured data schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "makePortfolio.in Web Development Agency",
      "url": "https://makeportfolio.in",
      "telephone": "+916238545696",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "MG Road",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
      }
    },
    "serviceType": service.title,
    "areaServed": "IN",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "3999.00"
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      {/* Dynamic Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6 space-y-24">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-muted tracking-wide font-mono">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-primary transition-colors">
            SERVICES
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white uppercase truncate">{service.title}</span>
        </nav>

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold font-mono uppercase tracking-widest">
              <IconComponent className="w-3.5 h-3.5" />
              <span>Service Vertical</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient">
              {service.heroTitle}
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              {service.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-zinc-900 border border-card-border hover:bg-zinc-800 text-white font-bold text-sm transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[16/11] rounded-2xl border border-white/10 shadow-2xl p-6 glow-effect bg-zinc-950/40 backdrop-blur-sm flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary font-mono">Deliverables List</span>
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <ul className="space-y-3 py-4 flex-1 flex flex-col justify-center">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/5 pt-3 text-[10px] text-muted text-center font-mono">
                100% Client Ownership Handoff
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Why Choose This Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient">
              Key Value Advantages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <GlowCard key={idx} className="border border-card-border/80 hover:border-zinc-700 bg-zinc-950/20 backdrop-blur-sm p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-card-border flex items-center justify-center text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{benefit.desc}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="space-y-12 bg-black/20 py-12 rounded-3xl border border-card-border/40 px-6 sm:px-12">
          <div className="text-left space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono">Features Overview</span>
            <h2 className="text-3xl font-extrabold text-white">Included Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="space-y-2.5 p-2 text-left">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed pl-3.5">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORK PROCESS SECTION */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono">Workflow Blueprint</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient">
              How We Deliver Success
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative group text-left space-y-4 border-l border-card-border/50 pl-6 py-2">
                <span className="absolute -left-[14px] top-2 w-7 h-7 rounded-full bg-zinc-950 border border-card-border text-xs font-black font-mono text-primary flex items-center justify-center">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQS & TESTIMONIALS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          <div className="lg:col-span-7 space-y-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Service Questions answered
            </h2>
            <Accordion items={service.faqs} />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-left pl-2">
              Client Feedback
            </h2>
            {service.testimonials.map((test, idx) => (
              <GlowCard key={idx} className="border border-card-border/80 bg-zinc-950/20 backdrop-blur-sm p-6 space-y-6 text-left">
                <p className="text-sm italic text-white/95 font-medium leading-relaxed">
                  "{test.quote}"
                </p>
                <div className="flex items-center space-x-3 pt-3 border-t border-card-border/40">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-black text-xs uppercase font-mono">
                    {test.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{test.author}</h4>
                    <p className="text-[10px] text-muted font-mono">{test.role}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* RELATED SERVICES & CALL TO ACTION */}
        <section className="border-t border-card-border/40 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Related Capabilities</h3>
            <div className="flex flex-col space-y-3">
              {service.relatedServices.map((relSlug) => {
                const relService = servicesData.find((s) => s.slug === relSlug);
                if (!relService) return null;
                return (
                  <Link
                    key={relSlug}
                    href={`/services/${relSlug}`}
                    className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 text-primary/60 group-hover:translate-x-0.5 transition-transform" />
                    <span>{relService.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950 border border-card-border flex flex-col items-start text-left space-y-4 shadow-xl">
            <h3 className="text-lg font-extrabold text-white">Have a Project in Mind?</h3>
            <p className="text-xs text-muted leading-relaxed">
              Contact us to discuss your requirements, mapping out customized feature specs and scheduling.
            </p>
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-xs transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Magnetic>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
