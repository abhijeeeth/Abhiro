"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../ui/Magnetic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 border-t border-card-border pt-24 overflow-hidden">
      {/* Background neon light highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* FINAL CTA SECTION (Upper footer block) */}
      <div className="max-w-5xl mx-auto px-6 text-center pb-24 border-b border-card-border/60">
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient leading-[1.1]"
          >
            Ready to Build Your Website?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-muted max-w-lg mx-auto leading-relaxed"
          >
            Let's create something amazing together. Reach out for a free quote or schedule a direct alignment call with our developer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Get Free Quote
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-zinc-900 border border-card-border hover:bg-zinc-800 text-white font-semibold transition-all duration-300"
              >
                Contact Us
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* FOOTER PROPER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Column 1: Logo & Tagline */}
        <div className="md:col-span-4 space-y-4">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-black">
              A
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Abhiro
            </span>
          </a>
          <p className="text-sm text-muted leading-relaxed max-w-sm">
            High-converting, lightning-fast, and premium web design services tailored to fit small businesses, personal brands, and startups. We believe everyone deserves a website.
          </p>
          {/* Social Links */}
          <div className="flex items-center space-x-3.5 pt-2">
            <a href="https://github.com/abhijeeeth" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-card-border text-muted hover:text-white transition-colors flex items-center justify-center" aria-label="Abhiro GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/stabhijith/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-card-border text-muted hover:text-white transition-colors flex items-center justify-center" aria-label="Abhiro LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-card-border text-muted hover:text-white transition-colors flex items-center justify-center" aria-label="Abhiro Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-widest">Navigation</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-muted hover:text-primary transition-colors">Home</a></li>
            <li><a href="#services" className="text-muted hover:text-primary transition-colors">Services</a></li>
            <li><a href="#portfolio" className="text-muted hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#pricing" className="text-muted hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#process" className="text-muted hover:text-primary transition-colors">Our Process</a></li>
          </ul>
        </div>

        {/* Column 3: Services categories */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-widest">Our Services</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#services" className="text-muted hover:text-primary transition-colors">Portfolio Websites</a></li>
            <li><a href="#services" className="text-muted hover:text-primary transition-colors">Business Websites</a></li>
            <li><a href="#services" className="text-muted hover:text-primary transition-colors">Landing Pages</a></li>
            <li><a href="#services" className="text-muted hover:text-primary transition-colors">E-Commerce Shops</a></li>
            <li><a href="#services" className="text-muted hover:text-primary transition-colors">Performance Tuneup</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-widest">Newsletter</h3>
          <p className="text-xs text-muted leading-relaxed">
            Subscribe to receive website insights, search ranking tips, and custom discount offers directly.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center space-x-2 w-full pt-1">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 border border-card-border text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-primary transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-primary text-black hover:bg-primary-hover transition-colors shrink-0"
              aria-label="Subscribe"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* COPYRIGHT & LEGAL */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-card-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
        <span>
          &copy; {currentYear} Abhiro Agency. All rights reserved.
        </span>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
