"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="section-shell flex items-center justify-center">
      <div className="glass-card max-w-lg text-center">
        <h1 className="font-display text-5xl text-gold">Something broke</h1>
        <p className="mt-4 text-white/70">{error.message}</p>
        <button onClick={reset} className="mt-6 solid-btn">
          Try again
        </button>
      </div>
    </main>
  );
}
