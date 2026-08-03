import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";

interface BlogCtaBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function BlogCtaBanner({
  title = "Ready to Build a High-Converting Portfolio or Business Website?",
  description = "Get a custom, high-speed website built with Next.js and modern SEO standards. Work directly with makePortfolio.in experts today.",
  buttonText = "Schedule Free Consultation",
  buttonLink = "/contact",
}: BlogCtaBannerProps) {
  return (
    <div className="relative my-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-primary/40 text-left shadow-2xl overflow-hidden group">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />

      <div className="relative z-10 space-y-6 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>makePortfolio.in Web Engineering</span>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <Link
            href={buttonLink}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

          <a
            href="tel:+919000000000"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-zinc-900 border border-card-border hover:border-zinc-700 text-white font-bold text-xs sm:text-sm transition-colors"
          >
            <PhoneCall className="w-4 h-4 mr-2 text-primary" />
            <span>Instant Phone Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}
