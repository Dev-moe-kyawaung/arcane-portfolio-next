"use client";

import { useState } from "react";

const responses: Record<string, string> = {
  compose: "Compose is your living spellwork: declarative UI, fewer bugs, faster iteration.",
  kotlin: "Kotlin is the core rune. Coroutines and Flow keep your mobile magic asynchronous and clean.",
  pos: "Your POS lineage proves senior judgment: iterate the same product with better architecture each time.",
  pulse: "PulseSync is the flagship proof of architecture, backend wiring, and CI discipline.",
  default: "I can explain Compose, Kotlin, POS, PulseSync, Firebase, CI/CD, or your app collection.",
};

export default function Familiar() {
  const [log, setLog] = useState<string[]>(["Familiar: The circle is ready. Ask your code magic."]);
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    const t = q.toLowerCase();
    const reply = t.includes("compose")
      ? responses.compose
      : t.includes("kotlin")
      ? responses.kotlin
      : t.includes("pos")
      ? responses.pos
      : t.includes("pulse")
      ? responses.pulse
      : responses.default;

    setLog((prev) => [...prev, `You: ${q}`, `Familiar: ${reply}`]);
    setValue("");
  }

  return (
    <section id="familiar" className="section-shell">
      <p className="section-label">Digital Familiar</p>
      <h2 className="section-title">AI that explains your code magic</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-[260px_1fr]">
        <img
          src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_12_iv8kpm.webp"
          alt="Digital familiar"
          className="w-full rounded-3xl border border-white/10 object-cover shadow-glow"
        />
        <div>
          <div className="glass-card max-h-[320px] overflow-auto">
            {log.map((line, idx) => (
              <p key={idx} className="mb-3 leading-7 text-white/80">
                {line}
              </p>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ask about PulseSync, POS, Compose, Kotlin…"
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/40"
            />
            <button className="solid-btn">Cast</button>
          </form>
        </div>
      </div>
    </section>
  );
}
