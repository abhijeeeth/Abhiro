"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import GlowCard from "../ui/GlowCard";
import { getSortedPostsData } from "@/utils/blog";

// Since it's a client component preview, we can render from a pre-defined data sweep or call the utility directly if loaded.
// To ensure it is fully compliant, let's keep the content clean and import it.
// Wait, getSortedPostsData uses Node fs which works in Server Components but might fail if evaluated purely client-side.
// Since BlogPreview is marked with "use client", we can either pass the posts down as props from page.tsx (Home page), or we can keep a client-safe dataset copy.
// Passing posts as props or rendering it as a Server Component is the standard Next.js 15 way!
// Let's check: src/app/page.tsx imports BlogPreview as a client component currently.
// If we make BlogPreview a Server Component, can we do that?
// Yes! In Next.js, we should make components Server Components by default unless they use client-side hooks like state/effects.
// Let's check: BlogPreview only uses Framer Motion motion.div which works fine, but motion.div usually requires Client boundaries or works under direct framer-motion calls.
// Let's see: we can pass the blog posts as props to BlogPreview from the server-rendered page.tsx! This is highly standard, clean, keeps BlogPreview as a fast client component for animations, and handles node fs imports on the server side!
// That's an amazing engineering design pattern! Let's do that.

interface BlogPreviewProps {
  posts: Array<{
    title: string;
    category: string;
    date: string;
    author: string;
    excerpt: string;
    slug: string;
    readTime: string;
  }>;
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  const displayPosts = posts.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-t border-card-border">
      {/* Background glow highlights */}
      <div className="absolute bottom-12 left-12 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient">
              Latest Insights &amp; Guides
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Read our collection of articles explaining web standards, search indexing hacks, conversion optimization, and design trends.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center text-primary font-bold text-sm hover:text-primary-hover group shrink-0"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((art, idx) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="h-full"
            >
              <GlowCard className="h-full border border-card-border/80 hover:border-zinc-700 bg-zinc-950/20 backdrop-blur-sm p-6 flex flex-col justify-between items-start group min-h-[340px] text-left">
                <div className="space-y-4 w-full">
                  {/* Category badge */}
                  <span className="inline-block px-2.5 py-1 rounded bg-zinc-900 border border-card-border text-[10px] font-bold text-primary uppercase tracking-widest">
                    {art.category}
                  </span>

                  {/* Title */}
                  <Link href={`/blog/${art.slug}`} className="block">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                      {art.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                {/* Meta details footer */}
                <div className="w-full mt-6 space-y-4">
                  <div className="w-full h-px bg-card-border/40" />
                  <div className="flex items-center justify-between text-xs text-muted font-semibold font-mono">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{art.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 font-mono">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                      <span>{art.readTime}</span>
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
