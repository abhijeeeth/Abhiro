"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    id: "database",
    title: "Database & ORM",
    skills: ["PostgreSQL", "MongoDB", "Firebase Firestore", "Prisma ORM"],
  },
  {
    id: "deployment",
    title: "Hosting & CDN",
    skills: ["Vercel", "Netlify", "Cloudflare Pages", "GitHub Pages"],
  },
  {
    id: "design",
    title: "Design & UX",
    skills: ["Figma", "Design Systems", "SVG Animations", "UX Wireframing"],
  },
  {
    id: "tools",
    title: "Dev Tools",
    skills: ["Git & GitHub", "VS Code", "Postman API", "npm / pnpm"],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-t border-card-border">
      {/* Aurora glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

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
            Our Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg"
          >
            We use modern, battle-tested, high-performance web frameworks and tools to build lightning-fast, secure, and future-proof websites.
          </motion.p>
        </div>

        {/* Tab Controls (Horizontal scroll on mobile) */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto space-x-2 pb-6 mb-12 scrollbar-none border-b border-card-border/40">
          {categories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 border focus:outline-none focus:ring-1 focus:ring-primary ${
                  isActive
                    ? "bg-primary border-primary text-black shadow-lg shadow-primary/20"
                    : "bg-zinc-950 border-card-border text-muted hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skills Panel */}
        <div className="max-w-4xl mx-auto min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {categories
                .find((cat) => cat.id === activeTab)
                ?.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-5 rounded-2xl bg-card border border-card-border/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group select-none glow-effect text-center"
                  >
                    <span className="text-white/95 font-medium group-hover:text-primary transition-colors text-sm sm:text-base">
                      {skill}
                    </span>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
