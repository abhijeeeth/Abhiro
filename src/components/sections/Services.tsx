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
    description:
      "Stunning personal portfolios for freelancers, students, personal brands, creators, and models. Stand out and secure your next big gig.",
  },
  {
    icon: Building2,
    title: "Business Websites",
    description:
      "Professional website solutions for corporate offices, law firms, dental clinics, local service businesses, and consultancies.",
  },
  {
    icon: FileCode2,
    title: "Landing Pages",
    description:
      "High-converting single-page landing campaigns designed specifically for startups, SaaS launches, product promos, and lead capture.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Robust online store builds featuring easy product catalog management, secure shopping cart workflows, and Stripe/Razorpay integrations.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform your outdated or slow web layout into a high-performance modern experience using current UI standards and optimized frameworks.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Complete keyword auditing, search engine sitemap submission, structured schema layout, and metadata adjustments to rank higher.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description:
      "Regular background data backups, server health monitoring, immediate security audits, package upgrades, and general content updates.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Compressing bloated graphics, removing layout shift, fixing caching problems, and boosting overall Lighthouse metrics to 95+ score.",
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
                <GlowCard className="h-full flex flex-col items-start justify-between min-h-[250px] border border-card-border/80 hover:border-primary/30 group">
                  <div className="space-y-4">
                    {/* Icon wrapper */}
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-card-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
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
