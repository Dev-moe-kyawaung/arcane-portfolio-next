import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Engineering Codex",
  description: "MDX blog posts about Android architecture, Compose, and delivery craft.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="section-shell">
      <p className="section-label">Engineering Blog</p>
      <h1 className="mt-3 font-display text-5xl text-gold">Codex</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Architecture notes, release lessons, and mobile engineering rituals.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="ghost-btn">Back to Home</Link>
      </div>
    </main>
  );
}
