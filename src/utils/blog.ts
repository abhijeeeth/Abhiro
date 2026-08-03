import fs from "fs";
import path from "path";
import { parseMarkdown, BlogPost, BlogPostMetadata } from "./markdown";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export function getSortedPostsData(): BlogPostMetadata[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const parsed = parseMarkdown(fileContents, slug);

      return parsed.metadata;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    return parseMarkdown(fileContents, slug);
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllCategories(): string[] {
  const posts = getSortedPostsData();
  const categories = new Set<string>();
  posts.forEach((post) => {
    if (post.category) categories.add(post.category);
  });
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const posts = getSortedPostsData();
  const tags = new Set<string>();
  posts.forEach((post) => {
    if (post.tags) post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}

export function getPopularPostsData(limit: number = 3): BlogPostMetadata[] {
  const posts = getSortedPostsData();
  // Return top items or curated selection
  return posts.slice(0, limit);
}

