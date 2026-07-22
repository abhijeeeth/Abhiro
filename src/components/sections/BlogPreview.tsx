"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import GlowCard from "../ui/GlowCard";

const articles = [
  {
    title: "How Much Does a Website Cost in 2026?",
    category: "Pricing Guides",
    date: "July 20, 2026",
    author: "Abhijith Shaji",
    excerpt: "Demystifying agency rates, freelancer quotes, and cheap template plans. Find out how to get the most value for your budget.",
    grad: "from-blue-600/10 to-indigo-600/10",
  },
  {
    title: "The Ultimate SEO Checklist for Local Brands",
    category: "Search Ranking",
    date: "July 15, 2026",
    author: "Priya Sharma",
    excerpt: "Step-by-step audit tips to configure sitemaps, structured schemas, meta fields, and Google Business profiles to rank local shops.",
    grad: "from-emerald-600/10 to-teal-600/10",
  },
  {
    title: "Web Design Trends That Dominate Awwwards",
    category: "UX/UI Design",
    date: "July 08, 2026",
    author: "Sarah Chen",
    excerpt: "Exploring organic shapes, interactive cursor filters, glassmorphic headers, and scroll-linked timeline designs in 2026.",
    grad: "from-purple-600/10 to-pink-600/10",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-t border-card-border">
      {/* Background glow highlights */}
      <div className="absolute bottom-12 left-12 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient">
              Latest Insights &amp; Guides
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Read our collection of articles explaining web standards, search indexing hacks, conversion optimization, and design trends.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-primary font-bold text-sm hover:text-primary-hover group shrink-0"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="h-full"
            >
              <GlowCard className="h-full border border-card-border/80 hover:border-zinc-700 bg-zinc-950/20 backdrop-blur-sm p-6 flex flex-col justify-between items-start group min-h-[320px]">
                <div className="space-y-4">
                  {/* Category badge */}
                  <span className="inline-block px-2.5 py-1 rounded bg-zinc-900 border border-card-border text-[10px] font-bold text-primary uppercase tracking-widest">
                    {art.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                {/* Meta details footer */}
                <div className="w-full mt-6 space-y-4">
                  <div className="w-full h-px bg-card-border/40" />
                  <div className="flex items-center justify-between text-xs text-muted font-semibold">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{art.author}</span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
