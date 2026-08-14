import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-12 text-3xl font-semibold tracking-tight text-gold" {...props} />,
    h3: (props) => <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white" {...props} />,
    p: (props) => <p className="my-5 leading-8 text-white/75" {...props} />,
    a: (props) => <a className="text-gold underline decoration-gold/40 underline-offset-4" {...props} />,
    ul: (props) => <ul className="my-5 list-disc pl-6 text-white/75" {...props} />,
    ol: (props) => <ol className="my-5 list-decimal pl-6 text-white/75" {...props} />,
    blockquote: (props) => (
      <blockquote className="my-6 border-l-4 border-gold/60 bg-white/5 p-5 italic text-white/80" {...props} />
    ),
    code: (props) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-gold" {...props} />
    ),
    ...components,
  };
}
