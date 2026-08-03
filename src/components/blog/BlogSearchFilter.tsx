"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";
import { BlogPostMetadata } from "@/utils/markdown";
import { Search, Calendar, BookOpen, ArrowRight, Tag, Sparkles, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

interface BlogSearchFilterProps {
  posts: BlogPostMetadata[];
  categories: string[];
}

const POSTS_PER_PAGE = 6;

export default function BlogSearchFilter({ posts, categories }: BlogSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts dynamically based on query & category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesQuery;
    });
  }, [posts, searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Popular / Featured selection (first post if available)
  const featuredPost = posts[0];

  return (
    <div className="space-y-12">
      {/* Featured Header Card */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <div className="relative group rounded-3xl overflow-hidden border border-card-border/80 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-8 sm:p-10 shadow-2xl text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Guide</span>
                </span>
                <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-card-border text-[10px] font-bold text-muted font-mono uppercase">
                  {featuredPost.category}
                </span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`} className="block group/link">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white group-hover/link:text-primary transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="text-sm text-muted leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-muted font-mono pt-4 border-t border-card-border/40">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Tag className="w-3.5 h-3.5 text-primary" />
                  <span>By {featuredPost.author}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-xs transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
                >
                  Read Featured Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Visual Thumbnail representation */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="w-full aspect-square rounded-2xl bg-zinc-900 border border-card-border/80 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-primary/40 transition-colors">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold font-mono">
                    2026
                  </div>
                  <span className="text-xs font-mono text-muted/80 block">makePortfolio.in Blueprint</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-white/90 font-mono font-bold leading-snug line-clamp-3">
                    {featuredPost.title}
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Controls: Search Bar + Category Pills */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search articles by topic, keyword, or guide title..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-zinc-950 border border-card-border/80 text-white placeholder-muted/60 text-sm focus:outline-none focus:border-primary/80 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-muted hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-muted shrink-0 px-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            <span>Showing {filteredPosts.length} Articles</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {["All", ...categories].map((cat) => {
            const active = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                  active
                    ? "bg-primary text-black shadow-lg shadow-primary/20"
                    : "bg-zinc-900 border border-card-border text-muted hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Blog Post Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <GlowCard
              key={post.slug}
              className="border border-card-border/80 hover:border-zinc-700 bg-zinc-950/40 backdrop-blur-sm p-6 flex flex-col justify-between items-start group min-h-[340px] text-left transition-all duration-300"
            >
              <div className="space-y-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="inline-block px-2.5 py-1 rounded bg-zinc-900 border border-card-border text-[10px] font-bold text-primary uppercase tracking-widest font-mono">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-muted font-mono">{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group/title">
                  <h3 className="text-xl font-bold text-white group-hover/title:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Meta Footer */}
              <div className="w-full mt-6 space-y-4">
                <div className="w-full h-px bg-card-border/40" />
                <div className="flex items-center justify-between text-xs text-muted font-semibold">
                  <div className="flex items-center space-x-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{post.date}</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted/70">{post.author}</span>
                </div>
                <div className="pt-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-primary group-hover:text-primary-hover group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-zinc-950 border border-card-border space-y-4">
          <p className="text-base text-muted font-mono">No articles found matching your filter criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-4 py-2 rounded-xl bg-zinc-900 border border-card-border text-xs font-bold text-primary hover:text-white transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-3 pt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl bg-zinc-900 border border-card-border text-xs text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const active = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all ${
                    active
                      ? "bg-primary text-black"
                      : "bg-zinc-900 border border-card-border text-muted hover:text-white"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl bg-zinc-900 border border-card-border text-xs text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
