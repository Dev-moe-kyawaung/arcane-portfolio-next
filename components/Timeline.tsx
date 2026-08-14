export default function Timeline() {
  const items = [
    ["Foundation", "Computer Science graduate from Pathumthani University."],
    ["Mastery", "Senior Android craft with Kotlin, Compose, Firebase, and production habits."],
    ["Current ritual", "MoekyawTranslator, premium portfolio systems, and repeatable workflows."],
    ["Next horizon", "Microsoft-scale mobile systems, mentorship, architecture leadership, and polished delivery."],
  ];

  return (
    <section id="timeline" className="section-shell">
      <p className="section-label">Career Roadmap</p>
      <h2 className="section-title">Growth timeline</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map(([title, body]) => (
          <article key={title} className="glass-card">
            <h3 className="font-display text-2xl text-gold">{title}</h3>
            <p className="mt-3 leading-7 text-white/75">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
