"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, BookOpen, Layers } from "lucide-react";
import GlowCard from "../ui/GlowCard";

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  technology: string[];
  description: string;
  bgGradient: string;
  link: string;
  caseStudy: {
    challenge: string;
    solution: string;
    timeline: string;
    result: string;
  };
}

const categories = [
  "All",
  "Portfolio",
  "Business",
  "E-commerce",
  "Startup",
  "Healthcare",
  "Education",
  "Creative Agency",
  "Restaurant",
  "Local Shop",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Aura Creative Studio",
    category: "Creative Agency",
    client: "Aura Digital LLC",
    technology: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description: "An award-winning agency website emphasizing fluid typography, parallax layouts, and custom mouse interaction triggers.",
    bgGradient: "from-purple-900/60 to-indigo-950/80",
    link: "https://example.com/aura",
    caseStudy: {
      challenge: "The client wanted a layout that felt incredibly premium and organic, avoiding boring grid alignment, while still loading in under 1.5 seconds.",
      solution: "We engineered smooth dynamic scroll triggers using Framer Motion layout sync, compressed webp assets, and implemented static file rendering.",
      timeline: "3 Weeks",
      result: "Achieved a 98% Lighthouse performance score and won multiple web design honorable mentions.",
    },
  },
  {
    id: 2,
    title: "Zenith Pharmacy Portal",
    category: "Healthcare",
    client: "Zenith Health Care",
    technology: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "A patient dashboard interface managing appointment schedulers, secure health record views, and doctor review boards.",
    bgGradient: "from-emerald-950/60 to-teal-950/80",
    link: "https://example.com/zenith",
    caseStudy: {
      challenge: "Processing data securely while maintaining an easy-to-use UX for elderly patients.",
      solution: "We styled clean, high-contrast, larger font systems and built robust sanitization checkpoints on API routes.",
      timeline: "4 Weeks",
      result: "Increased online bookings by 140% within the first 60 days of release.",
    },
  },
  {
    id: 3,
    title: "Sip & Savour Cafe",
    category: "Restaurant",
    client: "Sip & Savour Corp",
    technology: ["Next.js", "Tailwind CSS", "Stripe API"],
    description: "Elegant restaurant menu website featuring digital reservations, custom event bookings, and local pickup ordering.",
    bgGradient: "from-amber-950/60 to-orange-950/80",
    link: "https://example.com/sip",
    caseStudy: {
      challenge: "Integrating live reservation slots that sync in real-time with internal calendar workflows.",
      solution: "Connected custom webhooks to update inventory items and integrated WebSockets to block overlapping slots.",
      timeline: "2 Weeks",
      result: "Reduced phone-in reservation overhead by 70% with online booking sync.",
    },
  },
  {
    id: 4,
    title: "Apex Finance Analytics",
    category: "Startup",
    client: "Apex Labs",
    technology: ["React", "D3.js", "PostgreSQL", "Tailwind CSS"],
    description: "SaaS layout visualizing currency analytics, stock predictions, and user transactional ledger tracking.",
    bgGradient: "from-blue-950/60 to-slate-900/80",
    link: "https://example.com/apex",
    caseStudy: {
      challenge: "Rendering large amounts of complex stock ledger data smoothly without causing browser lagging.",
      solution: "Optimized graph calculations using requestAnimationFrame and data chunk rendering loops.",
      timeline: "5 Weeks",
      result: "Seamless dashboard scrolling and charts rendering 60fps on modern screens.",
    },
  },
  {
    id: 5,
    title: "Nova E-Commerce Store",
    category: "E-commerce",
    client: "Nova Apparel Ltd",
    technology: ["Next.js", "Tailwind CSS v4", "Stripe", "Postgres"],
    description: "Speedy storefront featuring modern item grids, checkout procedures, and inventory triggers.",
    bgGradient: "from-pink-950/60 to-rose-950/80",
    link: "https://example.com/nova",
    caseStudy: {
      challenge: "Creating a checkout screen that minimizes buyer dropoff rate on slower mobile devices.",
      solution: "Developed Next.js Server Components for static product displays and streamlined Stripe checkout fields.",
      timeline: "4 Weeks",
      result: "Sales conversion rate boosted from 1.8% to 4.2% within three months.",
    },
  },
  {
    id: 6,
    title: "Edutech Online Courses",
    category: "Education",
    client: "Edutech Foundation",
    technology: ["Vue", "Nuxt.js", "Firebase"],
    description: "Dynamic academic course dashboard displaying video lectures, active quiz assessments, and user badges.",
    bgGradient: "from-cyan-950/60 to-sky-950/80",
    link: "https://example.com/edutech",
    caseStudy: {
      challenge: "Delivering stable video loading capabilities to students working on weaker cellular connections.",
      solution: "Implemented video frame streaming and configured dynamic resolution levels depending on signal strength.",
      timeline: "4 Weeks",
      result: "Achieved a 95% user course completion rate across low bandwidth regions.",
    },
  },
  {
    id: 7,
    title: "Elena's Fine Portraits",
    category: "Portfolio",
    client: "Elena Rostova Studio",
    technology: ["Next.js", "Tailwind CSS", "GSAP ScrollTrigger"],
    description: "Visual portfolio gallery website displaying fashion shoots and artistic landscape snaps with horizontal grid lists.",
    bgGradient: "from-zinc-900/60 to-neutral-950/80",
    link: "https://example.com/elena",
    caseStudy: {
      challenge: "Presenting very high-resolution images in a gallery layout without triggering slow page weights.",
      solution: "Configured custom blur placeholder states and dynamic image sizes using next/image optimizer parameters.",
      timeline: "2 Weeks",
      result: "Page size reduced by 75% while maintaining crystal clear photo quality.",
    },
  },
  {
    id: 8,
    title: "Fresh Basket Grocery",
    category: "Local Shop",
    client: "Fresh Basket Mart",
    technology: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    description: "Local grocery inventory site displaying organic products with a direct 'Order on WhatsApp' shopping cart integration.",
    bgGradient: "from-green-950/60 to-emerald-950/80",
    link: "https://example.com/grocery",
    caseStudy: {
      challenge: "Enabling elderly shoppers to buy fresh items without setting up complicated profile passwords.",
      solution: "Built a simple list adder that automatically formats shopping items and loads them into a predefined WhatsApp message.",
      timeline: "1.5 Weeks",
      result: "Weekly grocery delivery orders doubled within 15 days of website launch.",
    },
  },
  {
    id: 9,
    title: "Elite Legal Consult",
    category: "Business",
    client: "Elite Legal Partners",
    technology: ["Next.js", "Tailwind CSS v4"],
    description: "Premium site for a corporate law firm with automated consult bookings and interactive client case portals.",
    bgGradient: "from-slate-900/60 to-zinc-950/80",
    link: "https://example.com/legal",
    caseStudy: {
      challenge: "Building trust instantly while providing a layout that coordinates consult sessions seamlessly.",
      solution: "Designed a clean slate layout with structural summaries, client testimonials, and a booking form integrated into calendars.",
      timeline: "3 Weeks",
      result: "Consultation bookings increased by 85% in the first quarter.",
    },
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
                          {project.title}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 border-t border-white/5 pt-2">
                        {project.technology.slice(0, 2).map((tech) => (
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
                        {project.title}
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
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 border border-card-border hover:border-primary/40 text-muted hover:text-white transition-all duration-300"
                        aria-label={`Visit Website for ${project.title}`}
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
                      {activeCaseStudy.title}
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
                      <span className="text-primary font-bold">{activeCaseStudy.technology.join(", ")}</span>
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
                      href={activeCaseStudy.link}
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
