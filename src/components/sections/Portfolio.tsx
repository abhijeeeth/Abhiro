"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import GlowCard from "../ui/GlowCard";
import SitePreview from "../ui/SitePreview";
import { portfolioData } from "@/data/portfolioData";

const categories = [
  "All",
  "E-Commerce",
  "Education",
  "Business",
  "Landing Page",
  "Personal Website",
  "Fashion",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? portfolioData
    : portfolioData.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-black/40 border-t border-card-border">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
            Our Work Speaks For Itself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg"
          >
            Explore our diverse portfolio of beautiful, lightning-fast websites we've handcrafted for businesses, professionals, and creators.
          </motion.p>
        </div>

        {/* Filter Controls (Horizontal scroll on mobile) */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto space-x-2 pb-4 mb-12 scrollbar-none border-b border-card-border/40">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border focus:outline-none focus:ring-1 focus:ring-primary shrink-0 ${
                cat === selectedCategory
                  ? "bg-primary border-primary text-black"
                  : "bg-zinc-950 border-card-border text-muted hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <GlowCard className="h-full flex flex-col justify-between border border-card-border hover:border-zinc-700 bg-zinc-950/20 backdrop-blur-sm p-0 overflow-hidden group">
                  {/* Site Preview Cover */}
                  <SitePreview
                    url={project.url}
                    name={project.name}
                    client={project.client}
                    bgGradient={project.bgGradient}
                  />

                  {/* Info block */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-zinc-900 border border-card-border hover:border-primary/40 text-xs font-semibold text-white transition-all duration-300"
                      >
                        <BookOpen className="w-3.5 h-3.5 mr-1.5 text-primary" />
                        Case Study
                      </Link>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 border border-card-border hover:border-primary/40 text-muted hover:text-white transition-all duration-300"
                        aria-label={`Visit Website for ${project.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
