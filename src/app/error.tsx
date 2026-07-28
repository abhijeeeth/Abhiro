"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Magnetic from "@/components/ui/Magnetic";
import { AlertOctagon, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime exception captured:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />
      <main className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
          <AlertOctagon className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient">
            Something Went Wrong
          </h1>
          <p className="text-sm sm:text-base text-muted max-w-sm leading-relaxed mx-auto">
            An unexpected error occurred while processing this request. We have recorded this issue.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Magnetic>
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-xs transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </button>
          </Magnetic>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-zinc-900 border border-card-border hover:bg-zinc-800 text-white font-semibold text-xs transition-colors"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
