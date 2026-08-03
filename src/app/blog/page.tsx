import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Consultation from "@/components/sections/Consultation";
import BlogSearchFilter from "@/components/blog/BlogSearchFilter";
import NewsletterBox from "@/components/blog/NewsletterBox";
import { getSortedPostsData, getAllCategories } from "@/utils/blog";
import { ChevronRight, Rss, BookOpenCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Guides | makePortfolio.in Blog",
  description: "Read our comprehensive guides on website development costs in India, portfolio strategy, Technical SEO, startup web architecture, and modern conversion UX.",
  alternates: {
    canonical: "https://makeportfolio.in/blog",
  },
  openGraph: {
    title: "Insights & Guides | makePortfolio.in Blog",
    description: "Read our comprehensive guides on website development costs in India, portfolio strategy, Technical SEO, startup web architecture, and modern conversion UX.",
    url: "https://makeportfolio.in/blog",
    type: "website",
    siteName: "makePortfolio.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Guides | makePortfolio.in Blog",
    description: "Read our comprehensive guides on website development costs in India, portfolio strategy, Technical SEO, startup web architecture, and modern conversion UX.",
  },
};

export default function BlogIndexPage() {
  const posts = getSortedPostsData();
  const categories = getAllCategories();

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://makeportfolio.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://makeportfolio.in/blog"
      }
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "makePortfolio.in",
    "url": "https://makeportfolio.in",
    "logo": "https://makeportfolio.in/images/logo.png",
    "description": "High-performance web design and Next.js development agency in India.",
    "sameAs": [
      "https://twitter.com/makeportfolio",
      "https://linkedin.com/company/makeportfolio"
    ]
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      {/* Schema LD-JSON */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, organizationSchema]) }}
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
          <span className="text-white uppercase">BLOG</span>
        </nav>

        {/* Header and RSS Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-card-border/40 pb-10">
          <div className="space-y-4 max-w-3xl text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary font-mono uppercase tracking-wider">
              <BookOpenCheck className="w-4 h-4" />
              <span>Knowledge Hub &amp; Blueprints</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient">
              Web Engineering &amp; SEO Insights
            </h1>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Explore in-depth pricing guides, technical SEO blueprints, portfolio strategies, and conversion frameworks engineered for founders and businesses in 2026.
            </p>
          </div>
          <a
            href="/feed.xml"
            target="_blank"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-card-border text-xs font-bold text-primary hover:text-primary-hover hover:border-primary/40 transition-all shrink-0 shadow-lg"
            aria-label="Subscribe to RSS Feed"
          >
            <Rss className="w-4 h-4" />
            <span>RSS FEED</span>
          </a>
        </div>

        {/* Interactive Search, Category Filters & Post Grid */}
        <BlogSearchFilter posts={posts} categories={categories} />

        {/* Newsletter Subscription Box */}
        <NewsletterBox />
      </main>

      <Consultation />
      <Footer />
    </div>
  );
}
