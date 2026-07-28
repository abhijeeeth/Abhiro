"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  Building2,
  FileCode2,
  ShoppingBag,
  RefreshCw,
  Search,
  Settings,
  Zap,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import GlowCard from "../ui/GlowCard";
import { servicesData } from "@/data/servicesData";

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
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.slug] || User;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <GlowCard className="h-full flex flex-col justify-between border border-card-border/80 hover:border-primary/30 group p-6 min-h-[380px]">
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
                        <p className="text-muted leading-relaxed text-[11px] h-[34px] line-clamp-2">{service.forWho}</p>
                      </div>
                      <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-[9px] block mb-0.5">Why It Matters</span>
                        <p className="text-muted leading-relaxed text-[11px] h-[34px] line-clamp-2">{service.whyMatters}</p>
                      </div>
                      <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-[9px] block mb-1">Expected Deliverables</span>
                        <ul className="grid grid-cols-1 gap-1 text-[11px] text-white/90">
                          {service.deliverables.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-center space-x-1.5">
                              <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Learn More Link button */}
                  <div className="pt-4 border-t border-card-border/40 mt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group/link transition-colors"
                    >
                      Learn More
                      <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
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
