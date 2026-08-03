"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-card-border overflow-hidden text-left shadow-2xl">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary mx-auto">
          <Mail className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Subscribe to makePortfolio.in Insights
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            Get exclusive Web Design breakdowns, SEO strategies, Core Web Vitals optimizations, and digital pricing blueprints delivered straight to your inbox.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center space-x-3 text-primary text-sm font-bold animate-fade-in">
            <CheckCircle2 className="w-5 h-5" />
            <span>Thank you for subscribing! Check your inbox for updates.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              required
              className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-card-border/80 text-white placeholder-muted text-sm focus:outline-none focus:border-primary/80 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-50"
            >
              <span>{status === "loading" ? "Subscribing..." : "Subscribe Now"}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-muted/70 font-mono">
          No spam ever. Unsubscribe at any time with one click.
        </p>
      </div>
    </div>
  );
}
