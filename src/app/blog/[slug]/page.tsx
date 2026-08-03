import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GlowCard from "@/components/ui/GlowCard";
import SocialShare from "@/components/blog/SocialShare";
import AuthorCard from "@/components/blog/AuthorCard";
import BlogCtaBanner from "@/components/blog/BlogCtaBanner";
import NewsletterBox from "@/components/blog/NewsletterBox";
import Accordion from "@/components/ui/Accordion";
import { getPostData, getSortedPostsData } from "@/utils/blog";
import { Calendar, User, ChevronRight, ArrowLeft, ArrowRight, Clock, Tag, HelpCircle, CheckCircle2 } from "lucide-react";

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

  const articleUrl = `https://makeportfolio.in/blog/${slug}`;

  return {
    title: `${post.metadata.title} | makePortfolio.in Blog`,
    description: post.metadata.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${post.metadata.title} | makePortfolio.in Blog`,
      description: post.metadata.excerpt,
      url: articleUrl,
      type: "article",
      publishedTime: post.metadata.date,
      modifiedTime: post.metadata.lastUpdated || post.metadata.date,
      authors: [post.metadata.author],
      siteName: "makePortfolio.in",
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

  const allPosts = getSortedPostsData();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  // Find related posts
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        (post.metadata.relatedSlugs?.includes(p.slug) || p.category === post.metadata.category)
    )
    .slice(0, 2);

  const articleUrl = `https://makeportfolio.in/blog/${slug}`;

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.metadata.title,
    "description": post.metadata.excerpt,
    "image": post.metadata.featuredImage ? [`https://makeportfolio.in${post.metadata.featuredImage}`] : undefined,
    "datePublished": post.metadata.date,
    "dateModified": post.metadata.lastUpdated || post.metadata.date,
    "author": {
      "@type": "Person",
      "name": post.metadata.author,
      "jobTitle": post.metadata.authorRole || "Lead Web Architect",
      "url": "https://makeportfolio.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "makePortfolio.in Web Engineering Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://makeportfolio.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };

  // Breadcrumb Schema
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.metadata.title,
        "item": articleUrl
      }
    ]
  };

  // FAQ Schema
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "makePortfolio.in",
    "url": "https://makeportfolio.in",
    "logo": "https://makeportfolio.in/logo.png"
  };

  const schemasToInject: object[] = [articleSchema, breadcrumbSchema, organizationSchema];
  if (faqSchema) schemasToInject.push(faqSchema);

  // Convert FAQs for the Accordion component
  const accordionFaqs = (post.faqs || []).map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      {/* Inject JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemasToInject) }}
      />

      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6 space-y-12">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-card-border/40 pb-6">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-muted tracking-wide font-mono flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              BLOG
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white uppercase truncate max-w-[200px] sm:max-w-[320px]">{post.metadata.title}</span>
          </nav>

          <Link href="/blog" className="inline-flex items-center text-xs font-bold text-muted hover:text-white transition-colors group shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" />
            Back to All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content Column */}
          <article className="lg:col-span-8 space-y-10 text-left">
            <header className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="inline-block px-3 py-1 rounded bg-zinc-900 border border-card-border text-[10px] font-bold text-primary uppercase tracking-widest font-mono">
                  {post.metadata.category}
                </span>
                {post.metadata.wordCount && (
                  <span className="text-[10px] text-muted font-mono">
                    ~{post.metadata.wordCount.toLocaleString()} words
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {post.metadata.title}
              </h1>

              <p className="text-base sm:text-lg text-muted leading-relaxed font-normal">
                {post.metadata.excerpt}
              </p>

              {/* Article Author & Date Meta */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-muted font-mono pt-4 border-y border-card-border/40 py-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-[10px] font-bold">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-white font-bold">{post.metadata.author}</span>
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
            </header>

            {/* Markdown Rendered Body */}
            <div
              className="prose prose-invert max-w-none text-muted leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* In-Article Call to Action */}
            <BlogCtaBanner
              title="Need Professional Next.js Web Engineering for Your Brand?"
              description="Work directly with makePortfolio.in experts to build a sub-second, SEO-optimized custom web platform."
              buttonText="Get Free Consultation"
              buttonLink="/contact"
            />

            {/* FAQ Section with Accordion & Schema */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="pt-8 space-y-6 border-t border-card-border/40">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Frequently Asked Questions
                  </h3>
                </div>
                <Accordion items={accordionFaqs} />
              </section>
            )}

            {/* Tags Footer */}
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <div className="flex items-center gap-2 pt-6 border-t border-card-border/40">
                <Tag className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-zinc-900 border border-card-border text-[11px] font-mono text-muted">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Profile Card */}
            <AuthorCard author={post.metadata.author} role={post.metadata.authorRole} />

            {/* Previous / Next Post Navigation */}
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-card-border/40">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="p-5 rounded-2xl bg-zinc-950 border border-card-border/80 hover:border-primary/50 text-left transition-colors group flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider mb-2 flex items-center">
                    <ArrowLeft className="w-3 h-3 mr-1 transition-transform group-hover:-translate-x-1" />
                    Previous Article
                  </span>
                  <p className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              ) : <div />}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="p-5 rounded-2xl bg-zinc-950 border border-card-border/80 hover:border-primary/50 text-right transition-colors group flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider mb-2 flex items-center justify-end">
                    Next Article
                    <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                  <p className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              ) : <div />}
            </nav>
          </article>

          {/* Sidebar Sticky Column */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            {/* Table of Contents */}
            {post.toc.length > 0 && (
              <div className="p-6 rounded-2xl bg-zinc-950 border border-card-border/80 text-left space-y-4 shadow-xl">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-white/90 font-mono">
                  Table of Contents
                </h3>
                <nav className="flex flex-col space-y-2 max-h-[380px] overflow-y-auto pr-2 scrollbar-none">
                  {post.toc.map((entry) => (
                    <a
                      key={entry.id}
                      href={`#${entry.id}`}
                      className={`text-xs text-muted hover:text-primary transition-colors block leading-relaxed ${
                        entry.level === 3 ? "pl-3 text-[11px]" : "font-semibold text-white/90"
                      }`}
                    >
                      {entry.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Social Share Buttons */}
            <SocialShare title={post.metadata.title} url={articleUrl} />

            {/* Direct Consultation Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-primary/30 text-left space-y-4 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold font-mono text-primary uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Expert Web Strategy</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Want to Upgrade Your Web Platform?
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Schedule a direct speed tuneup, technical SEO audit, or custom Next.js web application architecture review.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-xs transition-colors shadow-lg shadow-primary/20"
              >
                Book Consultation Now
              </Link>
            </div>
          </aside>
        </div>

        {/* RELATED ARTICLES SECTION */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-card-border/40 pt-16 space-y-8 text-left">
            <h3 className="text-xl font-extrabold text-white uppercase tracking-wider font-mono">
              Related Articles &amp; Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((postItem) => (
                <GlowCard key={postItem.slug} className="border border-card-border/80 bg-zinc-950/30 backdrop-blur-sm p-6 flex flex-col justify-between items-start group min-h-[220px]">
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-zinc-900 border border-card-border text-[9px] font-bold text-primary uppercase tracking-widest font-mono">
                      {postItem.category}
                    </span>
                    <Link href={`/blog/${postItem.slug}`} className="block">
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                        {postItem.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {postItem.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 w-full flex items-center justify-between text-[11px] text-muted border-t border-card-border/30 mt-4 font-mono">
                    <span>{postItem.date}</span>
                    <Link href={`/blog/${postItem.slug}`} className="text-primary hover:text-primary-hover font-bold inline-flex items-center">
                      Read Post
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </GlowCard>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Subscription Box */}
        <NewsletterBox />
      </main>

      <Footer />
    </div>
  );
}
