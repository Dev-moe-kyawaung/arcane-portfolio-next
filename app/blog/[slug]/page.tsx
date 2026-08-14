import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { data } = getPostBySlug(slug);
    return {
      title: data.title,
      description: data.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { content, data } = getPostBySlug(slug);

    const { content: mdxContent } = await compileMDX({
      source: content,
      components: useMDXComponents({}),
      options: { parseFrontmatter: false },
    });

    return (
      <main className="section-shell">
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="text-gold underline decoration-gold/40 underline-offset-4">
            ← Back to Codex
          </Link>

          <div className="mt-6 glass-card">
            <p className="section-label">{data.date}</p>
            <h1 className="mt-3 font-display text-5xl">{data.title}</h1>
            <p className="mt-4 text-white/70">{data.description}</p>
          </div>

          <article className="prose mt-10">
            {mdxContent}
          </article>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
