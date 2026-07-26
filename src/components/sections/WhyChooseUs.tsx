"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Palette,
  Search,
  Zap,
  Smartphone,
  Wrench,
  ShieldCheck,
  Headphones,
  Cpu,
  Target,
} from "lucide-react";
import GlowCard from "../ui/GlowCard";

const reasons = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Unbeatable rates for both premium custom designs and budget templates, making high-end websites affordable for everyone.",
  },
  {
    icon: Palette,
    title: "Premium Designs",
    desc: "Unique interfaces that stand out. We focus on modern typography, balanced grid layouts, and high-converting copy.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    desc: "Every build has semantic HTML, structured JSON-LD schemas, optimized keywords, and meta structures ready for google index.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimized script footprints, code splitting, and compressed media configurations to deliver near-instant loading (<2 seconds).",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    desc: "Pixel-perfect rendering across mobile, tablets, and wide screens. We test multiple viewport breaks before every launch.",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    desc: "Clean component-based structures that enable smooth code expansions and effortless media changes whenever needed.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Implementation of SSL certificates, standard security headers, contact form sanitization, and spam protection APIs.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    desc: "Dedicated post-launch developer support, training videos, and documentation so you're never left in the dark.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    desc: "Crafted using Next.js 15, React, Tailwind CSS v4, and animations that load quickly and keep your tech future-proof.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    desc: "Strategic placement of CTA buttons, lead generation forms, and layouts tuned specifically to convert site traffic into clients.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/20 border-t border-card-border">
      {/* Background blur effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient"
          >
            Why Brands Choose makePortfolio.in
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg"
          >
            We combine high-performance code craftsmanship with visual elegance to ensure your website is not just a digital business card, but a conversion engine.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="h-full"
              >
                <GlowCard className="h-full border border-card-border/80 hover:border-primary/25 bg-zinc-950/20 backdrop-blur-sm p-5 flex flex-col justify-between items-start group min-h-[220px]">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-card-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.desc}
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
