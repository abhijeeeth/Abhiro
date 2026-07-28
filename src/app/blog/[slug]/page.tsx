import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GlowCard from "@/components/ui/GlowCard";
import { getPostData, getSortedPostsData } from "@/utils/blog";
import { Calendar, User, ChevronRight, ArrowLeft, ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) return {};

  return {
    title: `${post.metadata.title} | makePortfolio.in Blog`,
    description: post.metadata.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.metadata.title} | makePortfolio.in Blog`,
      description: post.metadata.excerpt,
      url: `https://makeportfolio.in/blog/${slug}`,
      type: "article",
      publishedTime: post.metadata.date,
      authors: [post.metadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.metadata.title} | makePortfolio.in Blog`,
      description: post.metadata.excerpt,
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  // Schema for Article
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.metadata.title,
    "description": post.metadata.excerpt,
    "datePublished": post.metadata.date,
    "dateModified": post.metadata.lastUpdated || post.metadata.date,
    "author": {
      "@type": "Person",
      "name": post.metadata.author,
      "url": "https://makeportfolio.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "makePortfolio.in Web Development Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://makeportfolio.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://makeportfolio.in/blog/${post.metadata.slug}`
    }
  };

  // Find related posts
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts.filter(
    (p) => p.slug !== slug && (post.metadata.relatedSlugs?.includes(p.slug) || p.category === post.metadata.category)
  ).slice(0, 2);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      {/* Schema LD-JSON */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6 space-y-12">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-card-border/40 pb-6">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-muted tracking-wide font-mono">
            <Link href="/" className="hover:text-primary transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              BLOG
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white uppercase truncate max-w-[200px] sm:max-w-none">{post.metadata.title}</span>
          </nav>

          <Link href="/blog" className="inline-flex items-center text-xs font-bold text-muted hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content */}
          <article className="lg:col-span-8 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-block px-2.5 py-1 rounded bg-zinc-900 border border-card-border text-[10px] font-bold text-primary uppercase tracking-widest">
                {post.metadata.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {post.metadata.title}
              </h1>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-muted font-mono pt-2 border-b border-card-border/40 pb-6">
                <div className="flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-primary" />
                  <span>{post.metadata.author}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{post.metadata.date}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{post.metadata.readTime}</span>
                </div>
              </div>
            </div>

            {/* Markdown Rendered Output */}
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Tags footer */}
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <div className="flex items-center gap-2 pt-8 border-t border-card-border/40">
                <Tag className="w-4 h-4 text-primary" />
                <div className="flex flex-wrap gap-1.5">
                  {post.metadata.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded bg-zinc-900 border border-card-border text-[10px] font-semibold text-muted">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar (TOC & Sharing) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            {post.toc.length > 0 && (
              <div className="p-6 rounded-2xl bg-zinc-950 border border-card-border text-left space-y-4">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-white/90 font-mono">
                  Table of Contents
                </h3>
                <nav className="flex flex-col space-y-2">
                  {post.toc.map((entry) => (
                    <a
                      key={entry.id}
                      href={`#${entry.id}`}
                      className={`text-xs text-muted hover:text-primary transition-colors block ${
                        entry.level === 3 ? "pl-3 text-[11px]" : "font-medium"
                      }`}
                    >
                      {entry.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-zinc-950 border border-card-border text-left space-y-4">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono">
                Need Custom Assistance?
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Contact us to schedule a direct website audit, speed tuneup, or marketing strategy.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-xs transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </aside>
        </div>

        {/* RELATED POSTS SECTION */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-card-border/40 pt-16 space-y-8 text-left">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Related Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <GlowCard key={post.slug} className="border border-card-border/80 bg-zinc-950/20 backdrop-blur-sm p-6 flex flex-col justify-between items-start group min-h-[220px]">
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-zinc-900 border border-card-border text-[9px] font-bold text-primary uppercase tracking-widest">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 w-full flex items-center justify-between text-[11px] text-muted border-t border-card-border/30 mt-4">
                    <span>{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="text-primary hover:text-primary-hover font-bold inline-flex items-center">
                      Read Post
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </GlowCard>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
