export default function Impact() {
  const items = [
    ["Apps shipped", "POS suites, social dashboard, PWA, video player, job portal, weather, planner, games."],
    ["Systems built", "Offline-first flows, API integration, auth, caching, modular code, and clean UI architecture."],
    ["Performance gains", "Compose-first interfaces, better state handling, CI safety, and fewer fragile release paths."],
  ];

  return (
    <section id="impact" className="section-shell">
      <p className="section-label">Engineering Impact</p>
      <h2 className="section-title">Proof of shipped value</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map(([title, body]) => (
          <article key={title} className="glass-card">
            <h3 className="text-2xl font-display text-gold">{title}</h3>
            <p className="mt-3 leading-7 text-white/75">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
