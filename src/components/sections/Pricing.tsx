"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle, AlertCircle } from "lucide-react";
import GlowCard from "../ui/GlowCard";

const budgetIncludes = [
  "Premium Template customized to your brand",
  "Fully Responsive Design",
  "Standard SEO Setup",
  "Contact Form & Social Links",
  "Fast Load Speed",
  "Mobile Friendly",
  "Standard Security Layout",
  "Self-Hosted Support Guides",
];

const customIncludes = [
  "Custom UI/UX designed in Figma from scratch",
  "Fully Responsive Design",
  "Advanced Search Engine Optimization",
  "Advanced Lead Capture Forms & Call-to-actions",
  "Ultra-Fast Performance Optimization (<1s)",
  "Tailored Mobile UX Audits",
  "Google Analytics & Event Tracking",
  "SSL & Security Best Practices Setup",
  "1 Month Post-Launch Active Support",
  "Custom Micro-animations & Motion effects",
];

const comparisonRows = [
  { feature: "Design & UX", budget: "Professionally Designed Template (branded to client)", custom: "Figma UI/UX designed completely from scratch" },
  { feature: "SEO Setup", budget: "Standard indexing & Sitemap setup", custom: "Advanced keyword mapping, schema structures, meta audits" },
  { feature: "Customization", budget: "Colors, logo, fonts, images & text personalized", custom: "Infinite layout layouts, pages, widgets, features" },
  { feature: "Performance", budget: "Fast (90+ Lighthouse)", custom: "Lightning-Fast (98-100% Core Web Vitals optimized)" },
  { feature: "Revisions", budget: "1 Round of adjustments", custom: "Unlimited design stage iterations, 3 development revisions" },
  { feature: "Animations", budget: "Subtle page transitions", custom: "Premium scroll reveals, magnetic details, floating overlays" },
  { feature: "Delivery Time", budget: "3 to 5 Days", custom: "12 to 18 Days" },
  { feature: "Support", budget: "Launch documentation setup guide", custom: "1 Month developer contact support & training" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-black/40 border-t border-card-border">
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            Simple, Transparent, Budget-Friendly
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg"
          >
            Choose a path that fits your budget. We believe premium websites should be accessible to everyone, from students to growing startups.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 items-stretch">
          {/* Budget Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <GlowCard className="flex flex-col justify-between h-full border border-card-border hover:border-zinc-700 bg-zinc-950/20 backdrop-blur-md relative">
              <div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-bold text-muted uppercase tracking-widest">Budget Plan</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-extrabold text-white">₹3,999</span>
                    <span className="text-xs text-muted">starting price</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pt-2">
                    Uses one of our pre-built, premium layout templates, fully customized with your color scheme, font preferences, business logos, and copy.
                  </p>
                </div>
                <div className="w-full h-px bg-card-border/60 my-6" />

                <div className="space-y-4">
                  <p className="text-xs font-semibold text-white uppercase tracking-widest">Ideal for:</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Students", "Freelancers", "Local Shops", "Startups"].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-zinc-900 border border-card-border text-xs font-medium text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3.5">
                    {budgetIncludes.map((feat) => (
                      <li key={feat} className="flex items-start text-sm text-muted">
                        <Check className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-zinc-900/50 border border-card-border text-[11px] text-muted leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>Domain &amp; hosting charged separately.</span>
                </div>
                <a
                  href="#contact"
                  className="w-full block py-3 rounded-xl border border-card-border hover:border-primary/50 text-white font-semibold text-center hover:bg-primary/5 hover:text-primary transition-all duration-300"
                >
                  Choose This Plan
                </a>
              </div>
            </GlowCard>
          </motion.div>

          {/* Custom Plan (Recommended) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full relative"
          >
            {/* Spotlight Border Indicator */}
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-primary text-black font-extrabold text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 z-20">
              Most Popular
            </div>
            <GlowCard className="flex flex-col justify-between h-full border border-primary/30 bg-zinc-950/40 backdrop-blur-md relative hover:border-primary/50">
              <div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-widest">Custom Plan</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-extrabold text-white">₹15,999</span>
                    <span className="text-xs text-muted">one-time payment</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pt-2">
                    Completely custom-coded, unique layout drafted inside Figma and built to exact specifications to scale conversions, branding, and performance.
                  </p>
                </div>
                <div className="w-full h-px bg-card-border/60 my-6" />

                <div className="space-y-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest">Includes everything:</p>
                  <ul className="space-y-3.5">
                    {customIncludes.map((feat) => (
                      <li key={feat} className="flex items-start text-sm text-white/95">
                        <Check className="w-4 h-4 text-primary mr-2.5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="#contact"
                  className="w-full block py-3 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Get Started
                </a>
              </div>
            </GlowCard>
          </motion.div>
        </div>

        {/* Why ₹3,999? Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-6 rounded-2xl bg-zinc-950 border border-card-border flex flex-col md:flex-row items-center md:items-start gap-6 mb-24"
        >
          <div className="p-3.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-white">Why only ₹3,999 for the Budget Plan?</h4>
            <p className="text-sm text-muted leading-relaxed">
              We understand starting out is tough. The affordable package uses professionally designed templates previously engineered in-house by our team. Instead of starting from scratch, we customize these templates for your brand details, fonts, color palette, and content copy. This cuts down design time significantly, allowing us to deliver premium, modern layout quality at a fraction of standard agency costs.
            </p>
          </div>
        </motion.div>

        {/* Package Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden">
          <h3 className="text-center text-xl font-bold text-white mb-8 tracking-tight">
            Detailed Package Comparison
          </h3>
          <div className="overflow-x-auto rounded-xl border border-card-border bg-card/25 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-card-border bg-zinc-900/50">
                  <th className="p-4 text-xs font-extrabold uppercase tracking-widest text-white">Feature</th>
                  <th className="p-4 text-xs font-extrabold uppercase tracking-widest text-muted">Budget Plan (₹3,999)</th>
                  <th className="p-4 text-xs font-extrabold uppercase tracking-widest text-primary">Custom Plan (₹15,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border/40 text-sm">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-zinc-900/20 transition-colors">
                    <td className="p-4 font-semibold text-white whitespace-nowrap">{row.feature}</td>
                    <td className="p-4 text-muted">{row.budget}</td>
                    <td className="p-4 text-white/90">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
