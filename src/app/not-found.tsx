import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Magnetic from "@/components/ui/Magnetic";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
      <div className="absolute inset-0 radial-grid pointer-events-none z-0" />
      <Navbar />
      <main className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 space-y-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <HelpCircle className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient">
            404 - Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-muted max-w-sm leading-relaxed mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <div className="pt-4">
          <Magnetic>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-sm transition-all duration-300"
            >
              Return Home
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Magnetic>
        </div>
      </main>
      <Footer />
    </div>
  );
}
