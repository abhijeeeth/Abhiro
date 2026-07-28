import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GlowCard from "@/components/ui/GlowCard";
import Magnetic from "@/components/ui/Magnetic";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  ExternalLink,
  ChevronRight,
  Clock,
  Briefcase,
  Layers,
  ArrowRight,
  Gauge,
  Search,
  Zap,
  TrendingUp,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} Case Study | makePortfolio.in Agency`,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      title: `${project.name} Case Study | makePortfolio.in Agency`,
      description: project.description,
      url: `https://makeportfolio.in/portfolio/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Case Study | makePortfolio.in Agency`,
      description: project.description,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Schema for Case Study / CreativeWork / WebPage
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://makeportfolio.in/portfolio/${project.slug}#webpage`,
        "url": `https://makeportfolio.in/portfolio/${project.slug}`,
        "name": `${project.name} Case Study | makePortfolio.in`,
        "description": project.description
      },
      {
        "@type": "CreativeWork",
        "name": project.name,
        "author": {
          "@type": "Organization",
          "name": "makePortfolio.in"
        },
        "url": project.url,
        "genre": project.category,
        "keywords": project.technologies.join(", ")
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      {/* Schema LD-JSON */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6 space-y-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-muted tracking-wide font-mono">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/portfolio" className="hover:text-primary transition-colors">
            PORTFOLIO
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white uppercase truncate">{project.name}</span>
        </nav>

        {/* HERO SECTION */}
        <section className="space-y-6 text-left max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Case Study Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient">
            {project.name}
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-sm transition-all duration-300"
            >
              Visit Live Site
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </section>

        {/* DETAILS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Client Overview Card */}
          <GlowCard className="lg:col-span-2 border border-card-border bg-zinc-950/20 backdrop-blur-sm p-6 sm:p-8 space-y-6 text-left">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Client &amp; Overview
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {project.clientOverview}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-card-border/50 text-xs font-mono text-muted">
              <div>
                <span>Timeframe:</span>{" "}
                <strong className="text-white block mt-1">{project.caseStudy.timeline}</strong>
              </div>
              <div>
                <span>Category:</span>{" "}
                <strong className="text-white block mt-1">{project.category}</strong>
              </div>
            </div>
          </GlowCard>

          {/* Project Details Panel */}
          <div className="rounded-2xl border border-card-border bg-zinc-950/40 p-6 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded bg-zinc-900 border border-card-border text-xs font-semibold text-white/90">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-card-border/40 pt-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-muted block mb-1 font-mono">CLIENT NAME</span>
              <strong className="text-sm text-white">{project.client}</strong>
            </div>
          </div>
        </section>

        {/* CHALLENGE & SOLUTION & PREVIEW */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="space-y-4 border-l-2 border-red-500/40 pl-6 py-2">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-white/90 font-mono">The Challenge</h3>
            <p className="text-sm text-muted leading-relaxed">
              {project.caseStudy.challenge}
            </p>
          </div>
          <div className="space-y-4 border-l-2 border-primary/40 pl-6 py-2">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono">Our Solution</h3>
            <p className="text-sm text-muted leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </div>
        </section>

        {/* SCREENSHOT REPRESENTATION */}
        <section className="w-full aspect-[21/9] max-h-[420px] rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-card-border flex items-center justify-center p-8 relative overflow-hidden group">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-20`} />
          <div className="w-[85%] aspect-[16/10] max-h-[300px] rounded-2xl bg-black/60 border border-white/10 shadow-2xl p-4 flex flex-col justify-between z-10 transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[9px] text-muted font-mono">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <span className="truncate max-w-[200px]">{project.client}</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center py-6 text-center">
              <span className="text-white text-lg font-black tracking-wide">{project.name} App Interface</span>
              <span className="text-xs text-muted mt-1 max-w-sm truncate">{project.description}</span>
            </div>
            <div className="border-t border-white/5 pt-2 flex gap-1.5 overflow-hidden">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[7px] font-mono uppercase tracking-widest text-primary/60 px-1 py-0.5 rounded bg-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTHOUSE SCORE DASHBOARD */}
        <section className="py-12 bg-black/30 border border-card-border/40 rounded-3xl px-6 sm:px-12 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Lighthouse Performance Dashboard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Core Web Vitals Validation
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {[
              { label: "Performance", score: project.lighthouse.performance },
              { label: "Accessibility", score: project.lighthouse.accessibility },
              { label: "Best Practices", score: project.lighthouse.bestPractices },
              { label: "SEO", score: project.lighthouse.seo },
            ].map((lh) => (
              <div key={lh.label} className="flex flex-col items-center space-y-3">
                <div className="w-20 h-20 rounded-full border-[4px] border-emerald-500/20 flex items-center justify-center relative shadow-lg bg-zinc-950">
                  <div className="absolute inset-0 rounded-full border-[4px] border-emerald-500 border-t-transparent animate-spin-slow pointer-events-none opacity-30" />
                  <span className="text-lg font-black font-mono text-emerald-400">{lh.score}</span>
                </div>
                <span className="text-xs font-bold text-white tracking-wide uppercase font-mono">{lh.label}</span>
              </div>
            ))}
          </div>

          {/* SEO & PERFORMANCE BENCHMARKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-card-border/40 text-left">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-primary" />
                Technical SEO Audits
              </h4>
              <ul className="space-y-2 text-xs text-muted">
                {project.seoImprovements.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Performance Benchmarks
              </h4>
              <ul className="space-y-2 text-xs text-muted">
                {project.performanceMetrics.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL & CTA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-card-border/40 pt-16">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono">Result Statement</span>
            <blockquote className="text-lg sm:text-xl italic font-medium text-white/95 leading-relaxed">
              "{project.testimonial.quote}"
            </blockquote>
            <div className="flex items-center space-x-3 pt-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-black text-sm uppercase font-mono">
                {project.testimonial.author.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{project.testimonial.author}</h4>
                <p className="text-xs text-muted font-mono">{project.testimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-950 border border-card-border flex flex-col items-start text-left space-y-4 shadow-xl">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-extrabold text-white">Achieve Similar Outcomes</h3>
            <p className="text-xs text-muted leading-relaxed">
              We specialize in speeding up interfaces, optimizing index flows, and establishing clean conversion pipelines.
            </p>
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-xs transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Magnetic>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
