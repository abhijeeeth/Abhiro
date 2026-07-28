import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GlowCard from "@/components/ui/GlowCard";
import Consultation from "@/components/sections/Consultation";
import { getSortedPostsData } from "@/utils/blog";
import { Calendar, User, ChevronRight, ArrowRight, Rss, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Guides | makePortfolio.in Blog",
  description: "Read our latest articles on web design cost, technical search engine optimization (SEO) hacks, UX design trends, and performance audits.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Insights & Guides | makePortfolio.in Blog",
    description: "Read our latest articles on web design cost, technical search engine optimization (SEO) hacks, UX design trends, and performance audits.",
    url: "https://makeportfolio.in/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Guides | makePortfolio.in Blog",
    description: "Read our latest articles on web design cost, technical search engine optimization (SEO) hacks, UX design trends, and performance audits.",
  },
};

export default function BlogIndexPage() {
  const posts = getSortedPostsData();

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6 space-y-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-muted tracking-wide font-mono">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white uppercase">BLOG</span>
        </nav>

        {/* Header and RSS Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-card-border/40 pb-8">
          <div className="space-y-4 max-w-3xl text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient">
              Insights &amp; Guides
            </h1>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Read our collection of articles explaining web standards, search indexing hacks, conversion optimization, and design trends.
            </p>
          </div>
          <a
            href="/feed.xml"
            target="_blank"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-900 border border-card-border text-xs font-bold text-primary hover:text-primary-hover transition-colors shrink-0"
            aria-label="Subscribe to RSS Feed"
          >
            <Rss className="w-4 h-4" />
            <span>RSS FEED</span>
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <GlowCard
              key={post.slug}
              className="border border-card-border/80 hover:border-zinc-700 bg-zinc-950/20 backdrop-blur-sm p-6 flex flex-col justify-between items-start group min-h-[320px] text-left"
            >
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 rounded bg-zinc-900 border border-card-border text-[10px] font-bold text-primary uppercase tracking-widest">
                  {post.category}
                </span>

                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta and read action */}
              <div className="w-full mt-6 space-y-4">
                <div className="w-full h-px bg-card-border/40" />
                <div className="flex items-center justify-between text-xs text-muted font-semibold">
                  <div className="flex items-center space-x-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-primary group-hover:text-primary-hover group/btn"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Pagination visual */}
        <div className="flex items-center justify-center space-x-3 pt-12">
          <button className="px-4 py-2 rounded-xl bg-zinc-900/40 border border-card-border text-xs text-muted cursor-not-allowed" disabled>
            Prev
          </button>
          <span className="text-xs font-mono text-muted">Page 1 of 1</span>
          <button className="px-4 py-2 rounded-xl bg-zinc-900/40 border border-card-border text-xs text-muted cursor-not-allowed" disabled>
            Next
          </button>
        </div>
      </main>

      <Consultation />
      <Footer />
    </div>
  );
}
