import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";
import { portfolioData } from "@/data/portfolioData";
import { getSortedPostsData } from "@/utils/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://makeportfolio.in";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/pricing",
    "/contact",
    "/services",
    "/portfolio",
    "/blog",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic services routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic portfolio routes
  const portfolioRoutes = portfolioData.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog routes
  const blogPosts = getSortedPostsData();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes];
}
