/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Lock, ExternalLink, Globe } from "lucide-react";

interface SitePreviewProps {
  url: string;
  name: string;
  client?: string;
  bgGradient?: string;
  className?: string;
  showExternalLink?: boolean;
}

export default function SitePreview({
  url,
  name,
  client,
  bgGradient = "from-zinc-900 to-zinc-950",
  className = "",
  showExternalLink = true,
}: SitePreviewProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Clean domain name for address bar
  const formattedDomain = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const screenshotUrl = `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`;

  return (
    <div className={`w-full bg-gradient-to-br ${bgGradient} relative flex items-center justify-center p-3 sm:p-5 border-b border-card-border overflow-hidden group ${className}`}>
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Browser Window Frame */}
      <div className="w-full aspect-[16/10] rounded-xl bg-black/70 backdrop-blur-md border border-white/15 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 group-hover:scale-[1.02] group-hover:border-primary/40 group-hover:shadow-primary/10">
        
        {/* Browser Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-zinc-900/90 border-b border-white/10 shrink-0 z-20">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors" />
          </div>

          {/* URL Bar */}
          <div className="flex-1 mx-2 sm:mx-4 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[10px] sm:text-xs font-mono text-zinc-300 flex items-center justify-center gap-1.5 truncate">
            <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 shrink-0" />
            <span className="truncate tracking-tight font-medium text-zinc-200">{formattedDomain}</span>
          </div>

          {showExternalLink ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-zinc-400 hover:text-primary hover:bg-white/10 transition-all shrink-0"
              title={`Open ${name} in new tab`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          ) : (
            <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </div>
          )}
        </div>

        {/* Viewport Display Area */}
        <div className="relative flex-1 w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
          {/* 1. Live iFrame rendering scaled to fit viewport */}
          <iframe
            src={url}
            title={`${name} website preview`}
            onLoad={() => setIframeLoaded(true)}
            className={`w-[1280px] h-[800px] absolute top-0 left-0 origin-top-left pointer-events-none border-0 select-none transition-opacity duration-700 ${
              iframeLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: "scale(0.28)",
              width: "357.14%",
              height: "357.14%",
            }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />

          {/* 2. Fallback / Pre-load Image Screenshot */}
          <img
            src={screenshotUrl}
            alt={`${name} site screenshot`}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover object-top absolute inset-0 pointer-events-none transition-opacity duration-700 ${
              !iframeLoaded && imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />

          {/* 3. Initial Loading Skeleton / Fallback Card if both iframe & image are loading */}
          {(!iframeLoaded && !imgLoaded) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-zinc-950 text-center space-y-2">
              <Globe className="w-8 h-8 text-primary/40 animate-pulse" />
              <span className="text-xs font-mono text-zinc-400 font-semibold">{name}</span>
              <span className="text-[10px] text-zinc-600 font-mono">Loading live site preview...</span>
            </div>
          )}

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10 backdrop-blur-[1px]">
            <span className="px-3 py-1.5 rounded-full bg-black/80 border border-primary/50 text-primary text-[10px] sm:text-xs font-bold tracking-wider font-mono shadow-lg uppercase flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-primary animate-pulse" />
              Live Site Preview
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
