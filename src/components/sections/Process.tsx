"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Compass,
  Layout,
  Layers,
  Code,
  CheckSquare,
  Globe,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Requirement Discussion",
    desc: "We discuss your brand identity, business model, preferences, features, and budget to choose the perfect package.",
    icon: MessageSquare,
  },
  {
    step: "2",
    title: "Project Planning",
    desc: "We outline pages, define user flows, schedule delivery timelines, and compile text and asset requirements.",
    icon: Compass,
  },
  {
    step: "3",
    title: "Wireframing",
    desc: "Drafting layout sketches of pages focusing purely on information architecture, CTAs, and structural usability.",
    icon: Layout,
  },
  {
    step: "4",
    title: "UI Design",
    desc: "Creating high-fidelity UI visual components inside Figma, mapping exactly to your brand colors and styles.",
    icon: Layers,
  },
  {
    step: "5",
    title: "Development",
    desc: "Writing clean, modular TypeScript code using Next.js 15, React, and Tailwind CSS v4, keeping things extremely lightweight.",
    icon: Code,
  },
  {
    step: "6",
    title: "Quality Testing",
    desc: "Rigorous audits for speed optimization, mobile responsiveness, keyboard accessibility (WCAG AA), and SEO settings.",
    icon: CheckSquare,
  },
  {
    step: "7",
    title: "Deployment",
    desc: "Connecting custom domains, setting up performance CDN caching layers (Vercel/Cloudflare), and going live.",
    icon: Globe,
  },
  {
    step: "8",
    title: "Active Support",
    desc: "Providing training resources, site handoff documentation, analytics checks, and post-launch developer maintenance.",
    icon: LifeBuoy,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black/40 border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient"
          >
            Our Production Pipeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg"
          >
            How we translate your business ideas into premium, high-performing websites. A structured process that guarantees delivery.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-zinc-800 pointer-events-none -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative w-full`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-primary flex items-center justify-center -translate-x-1/2 z-10 font-bold text-xs text-primary font-mono hidden md:flex">
                    {step.step}
                  </div>

                  {/* Left Spacer / Right spacer depending on index */}
                  <div className="w-full md:w-1/2" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-[45%] pl-8 md:pl-0"
                  >
                    <div className="rounded-2xl bg-card border border-card-border p-6 hover:border-primary/20 transition-all duration-300 relative group glow-effect">
                      {/* Mobile Step Badge */}
                      <span className="md:hidden inline-block px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold font-mono uppercase mb-3">
                        Step {step.step}
                      </span>
                      <div className="flex items-center space-x-3.5 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-card-border/80 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
