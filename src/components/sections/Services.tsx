"use client";

import { motion } from "framer-motion";
import {
  User,
  Building2,
  FileCode2,
  ShoppingBag,
  RefreshCw,
  Search,
  Settings,
  Zap,
} from "lucide-react";
import GlowCard from "../ui/GlowCard";

const services = [
  {
    icon: User,
    title: "Portfolio Websites",
    forWho: "Freelancers, creators, job seekers, and students looking for a professional digital resume.",
    whyMatters: "A custom interactive site showcases your work and builds instant credibility online.",
    deliverables: ["Custom work showcase", "Downloadable resume integration", "Fast contact setups", "Self-hosted setup guide"],
  },
  {
    icon: Building2,
    title: "Business Websites",
    forWho: "Local shops, clinics, consultancies, and service providers building authority.",
    whyMatters: "A professional site establishes client trust and serves as a 24/7 informational hub.",
    deliverables: ["Core pages (About/Services)", "Brand identity alignment", "Google Maps setup", "Lead capture forms"],
  },
  {
    icon: FileCode2,
    title: "Landing Pages",
    forWho: "Startups, SaaS launches, and marketing managers running focused campaigns.",
    whyMatters: "A single-action focus cuts distractions and directly boosts user sign-ups or downloads.",
    deliverables: ["Single-page layout", "Optimized CTAs & headlines", "Analytics integration", "Form integrations"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Shops",
    forWho: "Boutique owners, local brands, and creators selling items directly online.",
    whyMatters: "Allows you to expand your customer base nationwide with automated checkout flows.",
    deliverables: ["Product catalogs", "Shopping cart database", "Secure payment gateway", "WhatsApp order link"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    forWho: "Businesses with slow, outdated, or mobile-unfriendly legacy websites.",
    whyMatters: "Modern layouts retain visitor attention, load faster, and improve search rankings.",
    deliverables: ["Fresh UI/UX redesign", "Existing content migration", "Page speed optimization", "Canonical URL redirects"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    forWho: "Brands struggling with low search visibility who want organic business traffic.",
    whyMatters: "Ranks your services for search intents, driving free web traffic with no ad spend.",
    deliverables: ["Technical indexing audits", "Keyword meta tag mappings", "XML sitemaps creation", "Schema structured markup"],
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    forWho: "Busy business owners needing website upkeep without technical overhead.",
    whyMatters: "Regular checks prevent security threats, broken layouts, and database slowdowns.",
    deliverables: ["Code version upgrades", "Automated backups", "Form testing audits", "Monthly content changes"],
  },
  {
    icon: Zap,
    title: "Performance Tuneup",
    forWho: "Websites suffering from slow load speeds and high user bounce drop-offs.",
    whyMatters: "Fast loading directly improves visitor retention and elevates search placement.",
    deliverables: ["Asset compression details", "Javascript code splitting", "Layout shift (CLS) fixes", "Lighthouse 95+ score target"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black/20 relative">
      {/* Background graphic highlights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient"
          >
            Digital Craftsmanship, Tailored For You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            We cover everything from quick personal portfolios to enterprise-grade web experiences, keeping speed, SEO, and aesthetics at the core.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <GlowCard className="h-full flex flex-col justify-between border border-card-border/80 hover:border-primary/30 group p-6 min-h-[360px]">
                  <div className="space-y-4 w-full">
                    {/* Icon wrapper */}
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-card-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <div className="space-y-3 pt-1 text-xs text-left">
                      <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-[9px] block mb-0.5">Who It's For</span>
                        <p className="text-muted leading-relaxed text-[11px]">{service.forWho}</p>
                      </div>
                      <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-[9px] block mb-0.5">Why It Matters</span>
                        <p className="text-muted leading-relaxed text-[11px]">{service.whyMatters}</p>
                      </div>
                      <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-[9px] block mb-1">Expected Deliverables</span>
                        <ul className="grid grid-cols-1 gap-1 text-[11px] text-white/90">
                          {service.deliverables.map((item, index) => (
                            <li key={index} className="flex items-center space-x-1.5">
                              <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
