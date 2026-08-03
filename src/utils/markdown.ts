export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPostMetadata {
  title: string;
  category: string;
  date: string;
  author: string;
  authorRole?: string;
  authorAvatar?: string;
  excerpt: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  readTime: string;
  slug: string;
  tags?: string[];
  lastUpdated?: string;
  relatedSlugs?: string[];
  faqs?: FAQItem[];
  wordCount?: number;
}

export interface TableOfContentsEntry {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost {
  metadata: BlogPostMetadata;
  contentHtml: string;
  toc: TableOfContentsEntry[];
  rawBody: string;
  faqs: FAQItem[];
}

// Helper to convert heading text to slug friendly ID
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function parseMarkdown(markdownContent: string, slug: string): BlogPost {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = markdownContent.match(frontmatterRegex);

  const metadata: Partial<BlogPostMetadata> = {
    authorRole: "Senior Web Architect & SEO Specialist",
    authorAvatar: "/images/author-avatar.jpg",
    faqs: [],
  };
  let bodyContent = markdownContent;

  if (match) {
    const frontmatterText = match[1];
    bodyContent = markdownContent.substring(match[0].length).trim();

    // Parse key-value YAML & JSON inline arrays/objects
    const lines = frontmatterText.split("\n");
    let inFaqs = false;
    let currentFaq: Partial<FAQItem> | null = null;
    const parsedFaqs: FAQItem[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      
      // FAQ list parsing
      if (trimmed.startsWith("faqs:")) {
        inFaqs = true;
        continue;
      }

      if (inFaqs) {
        if (trimmed.startsWith("- q:") || trimmed.startsWith("- question:")) {
          if (currentFaq && currentFaq.question && currentFaq.answer) {
            parsedFaqs.push(currentFaq as FAQItem);
          }
          const qVal = trimmed.replace(/^- (q|question):\s*/, "").replace(/^["']|["']$/g, "");
          currentFaq = { question: qVal, answer: "" };
          continue;
        } else if (trimmed.startsWith("a:") || trimmed.startsWith("answer:")) {
          if (currentFaq) {
            const aVal = trimmed.replace(/^(a|answer):\s*/, "").replace(/^["']|["']$/g, "");
            currentFaq.answer = aVal;
          }
          continue;
        } else if (!trimmed.startsWith(" ") && trimmed.includes(":")) {
          // Exited faqs block
          inFaqs = false;
          if (currentFaq && currentFaq.question && currentFaq.answer) {
            parsedFaqs.push(currentFaq as FAQItem);
            currentFaq = null;
          }
        }
      }

      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1 && !inFaqs) {
        const key = line.substring(0, colonIndex).trim();
        let val = line.substring(colonIndex + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }

        if (key === "title") metadata.title = val;
        else if (key === "category") metadata.category = val;
        else if (key === "date") metadata.date = val;
        else if (key === "author") metadata.author = val;
        else if (key === "authorRole") metadata.authorRole = val;
        else if (key === "authorAvatar") metadata.authorAvatar = val;
        else if (key === "excerpt") metadata.excerpt = val;
        else if (key === "featuredImage") metadata.featuredImage = val;
        else if (key === "featuredImageAlt") metadata.featuredImageAlt = val;
        else if (key === "tags") metadata.tags = val.split(",").map((t) => t.trim());
        else if (key === "lastUpdated") metadata.lastUpdated = val;
        else if (key === "relatedSlugs") metadata.relatedSlugs = val.split(",").map((t) => t.trim());
      }
    }

    if (currentFaq && currentFaq.question && currentFaq.answer) {
      parsedFaqs.push(currentFaq as FAQItem);
    }
    metadata.faqs = parsedFaqs;
  }

  const rawBody = bodyContent;

  // Calculate reading time & word count

  const wordCount = bodyContent.split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(3, Math.ceil(wordCount / 200));
  metadata.readTime = `${readTimeMinutes} min read`;
  metadata.wordCount = wordCount;
  metadata.slug = slug;

  // Extract table of contents (TOC) and convert headings with anchors
  const toc: TableOfContentsEntry[] = [];
  const lines = bodyContent.split("\n");
  const processedLines = lines.map((line) => {
    // Matches ## and ### headings
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      const id = slugify(text);
      toc.push({ id, text, level });
      return `<h${level} id="${id}" class="text-white font-extrabold scroll-mt-28 mt-10 mb-4 flex items-center gap-2 group ${
        level === 2 ? "text-2xl sm:text-3xl border-b border-card-border/40 pb-3" : "text-xl sm:text-2xl text-primary/90"
      }"><span>${text}</span><a href="#${id}" class="text-muted/40 group-hover:text-primary transition-colors text-sm font-mono opacity-0 group-hover:opacity-100">#</a></h${level}>`;
    }
    return line;
  });

  let html = processedLines.join("\n");

  // Pre-render Custom CTA Blocks: [[CTA: Title | Description | ButtonText | ButtonLink]]
  const ctaRegex = /\[\[CTA:\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^\]]+)\]\]/g;
  html = html.replace(ctaRegex, (_, title, desc, btnText, btnLink) => {
    return `<div class="my-10 p-8 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-primary/30 text-left shadow-2xl relative overflow-hidden group">
      <div class="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
      <div class="relative z-10 space-y-4">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary font-mono uppercase tracking-wider">
          <span>🔥 High Impact Strategy</span>
        </div>
        <h4 class="text-xl sm:text-2xl font-extrabold text-white leading-tight">${title.trim()}</h4>
        <p class="text-sm text-muted leading-relaxed">${desc.trim()}</p>
        <div class="pt-2">
          <a href="${btnLink.trim()}" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20">
            <span>${btnText.trim()}</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </div>
    </div>`;
  });

  // Pre-render Images: ![alt](src "caption") or ![alt](src)
  const imageRegex = /!\[([^\]]*)\]\(([^"')]*) *(?:"([^"]*)")?\)/g;
  html = html.replace(imageRegex, (_, alt, src, caption) => {
    const capText = caption || alt || "";
    return `<figure class="my-8 space-y-3 group">
      <div class="relative w-full rounded-2xl overflow-hidden border border-card-border/80 bg-zinc-900/60 p-2 backdrop-blur-sm shadow-xl">
        <div class="aspect-video relative w-full rounded-xl bg-zinc-950 overflow-hidden flex flex-col items-center justify-center border border-card-border/40">
          <img src="${src}" alt="${alt || "Article Visual"}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="hidden flex-col items-center justify-center p-8 text-center space-y-3 bg-gradient-to-b from-zinc-900 to-zinc-950 w-full h-full">
            <div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg font-mono">
              ⚡
            </div>
            <p class="text-sm font-bold text-white max-w-md">${alt || capText}</p>
            <span class="text-xs text-primary/80 font-mono">makePortfolio.in Architecture & Visual Insights</span>
          </div>
        </div>
      </div>
      ${capText ? `<figcaption class="text-center text-xs text-muted font-mono tracking-wide">Figure: ${capText}</figcaption>` : ""}
    </figure>`;
  });

  // Pre-render Code Blocks (```javascript ... ```)
  const codeBlockRegex = /```(\w*)\r?\n([\s\S]*?)```/g;
  html = html.replace(codeBlockRegex, (_, lang, code) => {
    const safeCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="bg-zinc-950 border border-card-border p-5 rounded-2xl overflow-x-auto my-6 font-mono text-xs text-primary/95 leading-relaxed shadow-inner"><code class="language-${lang}">${safeCode}</code></pre>`;
  });

  // Callouts blockquote: > **Note:** ...
  const blockquoteRegex = /^>\s+(.+)$/gm;
  html = html.replace(blockquoteRegex, (_, quoteContent) => {
    return `<blockquote class="border-l-4 border-primary bg-zinc-900/50 p-4 rounded-r-xl my-6 text-sm text-foreground/90 italic leading-relaxed">${quoteContent}</blockquote>`;
  });

  // Bold (**text**)
  html = html.replace(/\*\*([\s\S]*?)\*\*/g, "<strong class='text-white font-bold'>$1</strong>");

  // Italics (*text*)
  html = html.replace(/\*([\s\S]*?)\*/g, "<em>$1</em>");

  // Inline Code (`code`)
  html = html.replace(/`([^`]+)`/g, "<code class='bg-zinc-900 border border-card-border/60 px-2 py-0.5 rounded text-primary font-mono text-xs'>$1</code>");

  // Bulleted Lists (- Item)
  const bulletListRegex = /^-\s+(.+)$/gm;
  html = html.replace(bulletListRegex, "<li class='flex items-start gap-2.5 text-muted text-sm py-1.5'><span class='w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0'></span><span>$1</span></li>");

  // Numbered Lists (1. Item)
  const numListRegex = /^(\d+)\.\s+(.+)$/gm;
  html = html.replace(numListRegex, "<li class='flex items-start gap-3 text-muted text-sm py-1.5'><span class='px-2 py-0.5 rounded bg-zinc-900 border border-card-border text-[11px] font-mono font-bold text-primary shrink-0'>$1</span><span>$2</span></li>");

  // Links ([text](url))
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-primary hover:text-primary-hover font-medium underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors'>$1</a>");

  // Paragraph splitting
  const blockSeparator = /\r?\n\r?\n/;
  const blocks = html.split(blockSeparator).map((block) => {
    const trimmed = block.trim();
    if (!trimmed) return "";
    if (
      trimmed.startsWith("<pre") ||
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<li") ||
      trimmed.startsWith("<figure") ||
      trimmed.startsWith("<div") ||
      trimmed.startsWith("<blockquote")
    ) {
      return trimmed;
    }
    return `<p class="text-sm sm:text-base text-muted leading-relaxed mb-6 font-normal">${trimmed}</p>`;
  });

  return {
    metadata: metadata as BlogPostMetadata,
    contentHtml: blocks.filter(Boolean).join("\n"),
    toc,
    rawBody,
    faqs: metadata.faqs || [],
  };
}

