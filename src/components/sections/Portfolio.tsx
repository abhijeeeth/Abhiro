"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, BookOpen, Layers } from "lucide-react";
import GlowCard from "../ui/GlowCard";

interface Project {
  id: number;
  name: string;
  url: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
  client: string;
  bgGradient: string;
  caseStudy: {
    challenge: string;
    solution: string;
    timeline: string;
    result: string;
  };
}

const categories = [
  "All",
  "E-Commerce",
  "Education",
  "Business",
  "Landing Page",
  "Personal Website",
  "Fashion",
];

const projects: Project[] = [
  {
    id: 1,
    name: "FarmSpice",
    url: "https://farmspice.vercel.app/",
    category: "E-Commerce",
    description: "A modern e-commerce platform for premium Kerala spices featuring responsive design, product catalog, and a seamless shopping experience.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel"
    ],
    featured: true,
    client: "FarmSpice Premium Spices",
    bgGradient: "from-amber-950/60 to-orange-950/80",
    caseStudy: {
      challenge: "Building an immersive shopping experience that conveys the quality of premium spices while maintaining lightning-fast load times on cellular connections.",
      solution: "Implemented Next.js Server Components for static product listings, optimized image sizes, and streamlined the customer shopping path.",
      timeline: "3 Weeks",
      result: "Successfully launched the store with 100% responsive design and direct, fast shopping checkouts."
    }
  },
  {
    id: 2,
    name: "Morris English Academy",
    url: "https://www.morrisenglishacademy.com/",
    category: "Education",
    description: "Professional website for an English language academy showcasing courses, admissions, faculty, and student-focused learning resources.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS"
    ],
    featured: true,
    client: "Morris English Academy",
    bgGradient: "from-blue-950/60 to-indigo-950/80",
    caseStudy: {
      challenge: "Presenting detailed information on admissions, faculties, and learning resources without overwhelming new applicants.",
      solution: "Designed a clean, tabbed layout structure and an interactive admissions helper component to guide users step-by-step.",
      timeline: "4 Weeks",
      result: "Increased admissions inquiries and online registration rates by 80%."
    }
  },
  {
    id: 3,
    name: "Momeira",
    url: "https://www.momeira.com/",
    category: "Business",
    description: "Corporate website designed to strengthen brand identity with a clean interface, responsive layouts, and lead generation features.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS"
    ],
    featured: true,
    client: "Momeira Group",
    bgGradient: "from-slate-900/60 to-zinc-950/80",
    caseStudy: {
      challenge: "Strengthening the corporate brand identity with clean layouts while maintaining a high volume of lead generations.",
      solution: "Developed custom corporate landing sections, interactive service pages, and highly conversion-optimized lead capture forms.",
      timeline: "3 Weeks",
      result: "Generated a 50% increase in corporate inquiries during the first two months."
    }
  },
  {
    id: 4,
    name: "Momeira Landing Page",
    url: "https://momeira-blessonandtissymol.vercel.app/",
    category: "Landing Page",
    description: "A modern promotional landing page built for fast performance, high conversion rates, and mobile-first responsiveness.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel"
    ],
    featured: false,
    client: "Momeira Promotions",
    bgGradient: "from-emerald-950/60 to-teal-950/80",
    caseStudy: {
      challenge: "Maximizing conversion rates and performance for promotional campaigns on mobile devices.",
      solution: "Built a highly optimized, single-page promotional layout with compressed webp resources and static HTML exports.",
      timeline: "1.5 Weeks",
      result: "Achieved a 99% Lighthouse performance score and raised conversions by 35%."
    }
  },
  {
    id: 5,
    name: "Sachu & Preksha",
    url: "https://sachupreksha.vercel.app/",
    category: "Personal Website",
    description: "A beautifully designed personal website featuring elegant visuals, smooth animations, and a responsive user experience.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion"
    ],
    featured: false,
    client: "Sachu & Preksha Personal Brand",
    bgGradient: "from-pink-950/60 to-rose-950/80",
    caseStudy: {
      challenge: "Creating an elegant personal brand statement featuring smooth, premium motion dynamics without slowing down mobile browsers.",
      solution: "Used Framer Motion layout sync and lightweight SVG paths to implement custom, performant visual animations.",
      timeline: "2 Weeks",
      result: "Delivered a gorgeous interactive layout running at 60fps on all devices."
    }
  },
  {
    id: 6,
    name: "Roshni Boutiques",
    url: "https://roshniboutiques.com/",
    category: "Fashion",
    description: "Boutique website showcasing fashion collections with an elegant interface, responsive layouts, and customer-friendly navigation.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS"
    ],
    featured: true,
    client: "Roshni Boutiques",
    bgGradient: "from-purple-900/60 to-violet-950/80",
    caseStudy: {
      challenge: "Designing a visual, elegant fashion catalog that facilitates easy collection discovery and customer navigation.",
      solution: "Engineered a minimalist interactive layout, simple filter controls, and clean gallery cards with high-contrast font combinations.",
      timeline: "3 Weeks",
      result: "Significantly improved customer engagement and catalog page retention rates."
    }
  },
];


export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
                  {/* Visual Mockup Card Cover */}
                  <div className={`w-full aspect-[16/10] bg-gradient-to-br ${project.bgGradient} relative flex items-center justify-center p-6 border-b border-card-border overflow-hidden`}>
                    {/* Inner Glassmorphic Frame */}
                    <div className="w-[85%] aspect-[16/10] rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl p-3 flex flex-col justify-between transition-transform duration-500 group-hover:scale-105">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                        <div className="text-[8px] font-mono text-white/45 uppercase tracking-widest truncate max-w-[120px]">
                          {project.client}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-center items-center py-4">
                        <Layers className="w-8 h-8 text-primary/40 mb-2 group-hover:text-primary/70 transition-colors" />
                        <span className="text-white text-sm font-extrabold tracking-wide text-center">
                          {project.name}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 border-t border-white/5 pt-2">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span key={tech} className="text-[7px] font-mono uppercase tracking-widest text-primary/60 px-1 py-0.5 rounded bg-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

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
                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-zinc-900 border border-card-border hover:border-primary/40 text-xs font-semibold text-white transition-all duration-300"
                      >
                        <BookOpen className="w-3.5 h-3.5 mr-1.5 text-primary" />
                        Case Study
                      </button>
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

        {/* Case Study Dialog Modal */}
        <AnimatePresence>
          {activeCaseStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCaseStudy(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Dialog Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-card-border/80 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="absolute top-4 right-4 p-2 text-muted hover:text-white rounded-lg bg-zinc-900 border border-card-border transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Case Study Details */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
                      Case Study - {activeCaseStudy.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeCaseStudy.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-b border-card-border/50 py-4 text-xs font-mono">
                    <div>
                      <span className="text-muted">Client:</span>{" "}
                      <span className="text-white font-bold">{activeCaseStudy.client}</span>
                    </div>
                    <div>
                      <span className="text-muted">Timeline:</span>{" "}
                      <span className="text-white font-bold">{activeCaseStudy.caseStudy.timeline}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted">Tech Stack:</span>{" "}
                      <span className="text-primary font-bold">{activeCaseStudy.technologies.join(", ")}</span>
                    </div>
                  </div>

                  <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin">
                    <div className="space-y-1">
                      <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
                        The Challenge
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {activeCaseStudy.caseStudy.challenge}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
                        Our Solution
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {activeCaseStudy.caseStudy.solution}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs uppercase font-extrabold text-primary tracking-widest">
                        The Result
                      </h4>
                      <p className="text-sm text-white/95 leading-relaxed font-medium">
                        {activeCaseStudy.caseStudy.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={activeCaseStudy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-sm transition-all duration-300"
                    >
                      Visit Active Website
                      <ExternalLink className="w-4 h-4 ml-1.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
