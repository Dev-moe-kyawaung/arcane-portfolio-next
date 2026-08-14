import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex items-center justify-center">
      <div className="glass-card text-center">
        <h1 className="font-display text-5xl text-gold">404</h1>
        <p className="mt-4 text-white/70">This page is hidden in the void.</p>
        <Link href="/" className="mt-6 inline-flex solid-btn">Return Home</Link>
      </div>
    </main>
  );
}
