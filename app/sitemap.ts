import type { MetadataRoute } from "next";
import { blogPreviews } from "@/lib/blog-preview";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes: Array<{
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  path: string;
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  {
    path: "/digital-marketing-consultant-thailand-myanmar-sea",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  { path: "/work-with-me", changeFrequency: "monthly", priority: 0.9 },
  { path: "/book-call", changeFrequency: "monthly", priority: 0.8 },
  { path: "/media-plan-template", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogRoutes = blogPreviews.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogRoutes,
  ];
}
