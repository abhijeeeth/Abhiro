"use client";

import { Check, Star } from "lucide-react";
import GlowCard from "../ui/GlowCard";

const metrics = [
  { value: "95+", label: "Lighthouse Score", desc: "Engineered to satisfy Google's strict Core Web Vitals guidelines." },
  { value: "100%", label: "Responsive Layouts", desc: "Tested across mobile break-points for fluid grid adjustments." },
  { value: "<2s", label: "Loading Speed", desc: "Speed optimization triggers that keep visitors from bounce dropoffs." },
  { value: "A+", label: "Performance Rating", desc: "Clean TypeScript and layout files that load efficiently." },
];

const standardFeatures = [
  "Responsive Design",
  "SEO Optimization",
  "Contact Forms",
  "WhatsApp Integration",
  "Google Maps Embeds",
  "Analytics Audits",
  "SSL Certificates Setup",
  "Performance Optimization",
  "Accessibility compliance",
  "Social Media Integration",
  "Fast Server Loading",
  "Security Best Practices",
];

const industries = [
  "Restaurants",
  "Doctors",
  "Students",
  "Lawyers",
  "Startups",
  "Creators",
  "Retail Shops",
  "Education",
  "Healthcare",
  "Real Estate",
];

export default function Performance() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-t border-card-border">
      {/* Light particle background */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Row 1: Lighthouse / Performance metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              High Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient">
              We Build For Speed &amp; Quality
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Google ranks fast websites higher. We audit every line of layout files, compress asset paths, and split dependencies to make sure you pass Core Web Vitals out of the box.
            </p>
            <div className="flex items-center space-x-2.5 p-4 rounded-xl bg-zinc-950 border border-card-border">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Lighthouse Score target: 95+
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((m, idx) => (
              <GlowCard key={idx} className="border border-card-border/80 hover:border-primary/20 bg-zinc-950/20 backdrop-blur-sm p-6 space-y-2">
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">{m.value}</div>
                <h3 className="text-sm font-extrabold text-primary uppercase tracking-widest">{m.label}</h3>
                <p className="text-xs text-muted leading-relaxed">{m.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Row 2: Standard Features checklist */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950/60 border border-card-border mb-24 relative glow-effect">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-tight text-center">
            Standard Features In Every Website
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {standardFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-sm text-white/90">
                <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-xs sm:text-sm">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Industries We Serve */}
        <div className="text-center space-y-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Industries We Design For
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((ind, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-card border border-card-border/80 text-xs sm:text-sm font-semibold text-muted hover:text-primary hover:border-primary/30 transition-all duration-300 select-none"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
