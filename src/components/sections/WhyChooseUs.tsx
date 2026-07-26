"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Search,
  Zap,
  Headphones,
} from "lucide-react";
import GlowCard from "../ui/GlowCard";

const pillars = [
  {
    icon: DollarSign,
    title: "Affordable & Transparent",
    desc: "No hidden charges or bloated agency fees. We provide direct pricing and leverage free static hosting platforms (like Vercel/Netlify) to keep your operational costs near zero.",
  },
  {
    icon: Zap,
    title: "High-Performance Code",
    desc: "We build using Next.js and optimized React architectures. Our websites achieve 95+ Lighthouse speed scores, keeping your visitors engaged and preventing bounce drop-offs.",
  },
  {
    icon: Search,
    title: "SEO & Indexing Ready",
    desc: "We configure semantic HTML5, structured JSON-LD schemas, sitemaps, and optimized search meta tags out of the box, preparing your site for Google indexation.",
  },
  {
    icon: Headphones,
    title: "True Partnership",
    desc: "You deal directly with the developers, not account managers. We provide custom walk-through training videos, handoff documentation, and active post-launch support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/20 border-t border-card-border">
      {/* Background blur effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Our Story & Mission */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Our Story &amp; Mission
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient leading-tight">
                About makePortfolio.in
              </h2>
            </div>
            
            <div className="space-y-5 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                makePortfolio.in was founded on a simple, core belief: <strong className="text-white">"We believe everyone deserves a website."</strong>
              </p>
              <p>
                We noticed that small business owners, freelancers, and creators in India were facing two extremes: they were either quoted exorbitant pricing by traditional corporate agencies, or left struggling with slow, generic site templates. We created makePortfolio.in to provide a transparent, professional middle ground.
              </p>
              <p>
                Led by developer Abhijith Shaji, we operate as a lean digital collective. By collaborating with a trusted freelance network of designers and copywriters, we eliminate agency overhead and channel 100% of our focus into writing clean, high-performance code and designing modern interfaces.
              </p>
            </div>

            {/* Mission Quote Block */}
            <div className="border-l-2 border-primary pl-4 py-2 bg-zinc-950/40 rounded-r-xl pr-4">
              <p className="text-sm font-semibold italic text-white/95">
                "Our mission is to empower independent creators and local businesses with web pages that load instantly, rank naturally on search engines, and represent their brand authentically."
              </p>
            </div>
          </div>

          {/* Right Column: Core Commitments */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wider uppercase text-left pl-2 font-mono text-primary/80">
              Our Core Commitments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, idx) => {
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
                    <GlowCard className="h-full border border-card-border/80 hover:border-primary/25 bg-zinc-950/20 backdrop-blur-sm p-6 flex flex-col justify-between items-start group min-h-[220px]">
                      <div className="space-y-4 text-left">
                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-card-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-extrabold text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
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

        </div>
      </div>
    </section>
  );
}
