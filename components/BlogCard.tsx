import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-card transition hover:-translate-y-1 hover:border-gold/40"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-gold">
        {post.date} · {post.readingTime}
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
      <p className="mt-3 text-white/70">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
