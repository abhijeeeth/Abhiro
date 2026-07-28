export interface BlogPostMetadata {
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  readTime: string;
  slug: string;
  tags?: string[];
  lastUpdated?: string;
  relatedSlugs?: string[];
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
}

// Helper to convert heading text to slug friendly ID
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function parseMarkdown(markdownContent: string, slug: string): BlogPost {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = markdownContent.match(frontmatterRegex);

  const metadata: Partial<BlogPostMetadata> = {};
  let bodyContent = markdownContent;

  if (match) {
    const frontmatterText = match[1];
    bodyContent = markdownContent.substring(match[0].length).trim();

    // Parse simple key-value YAML structure
    const lines = frontmatterText.split("\n");
    for (const line of lines) {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const key = line.substring(0, colonIndex).trim();
        let val = line.substring(colonIndex + 1).trim();
        // Remove quotes if present
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }

        if (key === "title") metadata.title = val;
        else if (key === "category") metadata.category = val;
        else if (key === "date") metadata.date = val;
        else if (key === "author") metadata.author = val;
        else if (key === "excerpt") metadata.excerpt = val;
        else if (key === "tags") metadata.tags = val.split(",").map((t) => t.trim());
        else if (key === "lastUpdated") metadata.lastUpdated = val;
        else if (key === "relatedSlugs") metadata.relatedSlugs = val.split(",").map((t) => t.trim());
      }
    }
  }

  // Calculate reading time
  const wordCount = bodyContent.split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.ceil(wordCount / 200);
  metadata.readTime = `${readTimeMinutes} min read`;
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
      return `<h${level} id="${id}" class="text-white font-extrabold scroll-mt-24 mt-8 mb-4 ${
        level === 2 ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
      }">${text}</h${level}>`;
    }
    return line;
  });

  // Convert basic markdown formatting to HTML
  const rawBody = processedLines.join("\n");
  let html = rawBody;

  // Pre-render code blocks (```javascript ... ```)
  const codeBlockRegex = /```(\w*)\r?\n([\s\S]*?)```/g;
  html = html.replace(codeBlockRegex, (match, lang, code) => {
    const safeCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="bg-zinc-950 border border-card-border p-4 rounded-xl overflow-x-auto my-6 font-mono text-xs text-primary/95 leading-relaxed"><code class="language-${lang}">${safeCode}</code></pre>`;
  });

  // Bold (**text**)
  html = html.replace(/\*\*([\s\S]*?)\*\*/g, "<strong>$1</strong>");

  // Italics (*text*)
  html = html.replace(/\*([\s\S]*?)\*/g, "<em>$1</em>");

  // Inline Code (`code`)
  html = html.replace(/`([^`]+)`/g, "<code class='bg-zinc-900 px-1.5 py-0.5 rounded text-primary font-mono text-xs'>$1</code>");

  // Lists (un-ordered)
  const listRegex = /^-\s+(.+)$/gm;
  html = html.replace(listRegex, "<li class='list-disc list-inside ml-4 text-muted text-sm py-1'>$1</li>");

  // Links ([text](url))
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-primary hover:underline'>$1</a>");

  // Split remaining paragraphs by double newlines, skipping pre-rendered html code blocks and list items
  const blockSeparator = /\r?\n\r?\n/;
  const paragraphs = html.split(blockSeparator).map((block) => {
    const trimmed = block.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<pre") || trimmed.startsWith("<h") || trimmed.startsWith("<li") || trimmed.startsWith("<ul")) {
      return trimmed;
    }
    return `<p class="text-sm sm:text-base text-muted leading-relaxed mb-4">${trimmed}</p>`;
  });

  return {
    metadata: metadata as BlogPostMetadata,
    contentHtml: paragraphs.filter(Boolean).join("\n"),
    toc,
    rawBody,
  };
}
