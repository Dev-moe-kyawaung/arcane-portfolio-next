import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://your-domain.com";

export default function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
    },
    ...posts,
  ];
}
