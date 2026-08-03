"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Twitter / X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:bg-sky-500/10 hover:text-sky-400 hover:border-sky-500/30",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/30",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
      ),
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy URL", err);
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-zinc-950/80 border border-card-border/80 text-left space-y-4 shadow-xl">
      <h3 className="text-xs uppercase font-extrabold tracking-widest text-white/90 font-mono">
        Share Article
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {shareLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl bg-zinc-900 border border-card-border text-muted transition-all duration-200 ${item.color}`}
            title={`Share on ${item.name}`}
            aria-label={`Share on ${item.name}`}
          >
            {item.svg}
          </a>
        ))}

        <button
          onClick={handleCopy}
          className={`p-2.5 rounded-xl bg-zinc-900 border border-card-border transition-all duration-200 cursor-pointer ${
            copied
              ? "bg-primary/20 text-primary border-primary/40"
              : "text-muted hover:text-primary hover:border-primary/40"
          }`}
          title="Copy Link to Clipboard"
          aria-label="Copy Link"
        >
          {copied ? <Check className="w-4 h-4 text-primary" /> : <Link2 className="w-4 h-4" />}
        </button>
      </div>
      {copied && (
        <p className="text-[11px] font-mono text-primary animate-fade-in">
          ✓ Article link copied to clipboard!
        </p>
      )}
    </div>
  );
}
