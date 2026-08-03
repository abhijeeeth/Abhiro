import Link from "next/link";
import { UserCheck, ShieldCheck, Globe, Sparkles } from "lucide-react";

interface AuthorCardProps {
  author: string;
  role?: string;
}

export default function AuthorCard({ author, role }: AuthorCardProps) {
  const displayRole = role || "Senior Web Architect & Technical SEO Lead";

  return (
    <div className="p-8 rounded-3xl bg-zinc-950/80 border border-card-border/80 text-left space-y-4 shadow-xl">
      <div className="flex items-start sm:items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/40 flex items-center justify-center text-primary shrink-0 shadow-lg">
          <UserCheck className="w-7 h-7" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <h4 className="text-lg font-bold text-white tracking-tight">{author}</h4>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary font-mono">
              <ShieldCheck className="w-3 h-3 mr-1" />
              Verified Author
            </span>
          </div>
          <p className="text-xs text-primary/90 font-mono font-medium">{displayRole}</p>
        </div>
      </div>

      <p className="text-xs text-muted leading-relaxed">
        Expert in ultra-fast Next.js engineering, conversion-focused UI/UX design, and technical SEO architecture. Leading digital strategy and high-performing web platforms for global brands and Indian startups at makePortfolio.in.
      </p>

      <div className="pt-2 flex items-center justify-between border-t border-card-border/40 text-xs">
        <span className="text-muted/80 flex items-center gap-1 font-mono text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Google E-E-A-T Verified Standard
        </span>
        <Link
          href="/about"
          className="text-primary hover:text-primary-hover font-bold inline-flex items-center gap-1"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>About Team</span>
        </Link>
      </div>
    </div>
  );
}
