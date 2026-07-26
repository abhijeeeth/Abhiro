"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "../ui/Magnetic";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden aurora-bg">
      {/* Decorative Floating Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left text column */}
        <div className="lg:col-span-7 text-left space-y-8">
          {/* Brand Tagline Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
          >
            <span>"We believe everyone deserves a website."</span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient"
            >
              Professional Websites <br />
              <span className="text-primary-gradient">That Don't Break</span> <br />
              Your Budget
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted text-lg sm:text-xl max-w-xl leading-relaxed"
            >
              Whether you're starting your business or growing your brand, we create beautiful, high-converting websites that help you stand out online.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-card border border-card-border hover:bg-zinc-800 text-white font-bold text-base transition-all duration-300 group"
              >
                View Portfolio
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right mockup column */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl border border-white/10 shadow-2xl shadow-emerald-950/20 overflow-hidden group perspective-[1000px] glow-effect bg-zinc-950/40 backdrop-blur-sm"
          >
            {/* 3D Browser Mockup Header */}
            <div className="h-8 bg-zinc-900/90 border-b border-card-border px-4 flex items-center justify-between">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="w-40 h-4 bg-zinc-800/80 rounded-md text-[9px] text-center text-zinc-500 flex items-center justify-center font-mono select-none">
                makePortfolio.in/portfolio
              </div>
              <div className="w-3" />
            </div>

            {/* Generated Mockup Image */}
            <div className="relative w-full h-[calc(100%-2rem)]">
              <Image
                src="/images/hero_mockup.png"
                alt="makePortfolio.in Website Agency Mockup"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 480px"
              />
            </div>

            {/* Overlay Glassmorphic Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-6 -left-6 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center space-x-3 shadow-xl z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-primary font-bold">
                99%
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted font-bold">Score</div>
                <div className="text-sm font-extrabold text-white">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* Floating Lighthouse Tag */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-12 -right-4 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center space-x-3 shadow-xl z-20"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-primary text-xs font-black">
                100
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted font-bold">SEO &amp; Best</div>
                <div className="text-sm font-extrabold text-white font-mono">Practices</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Page scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-70">
        <span className="text-[10px] uppercase tracking-widest text-muted">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
