export default function Stack() {
  const items = ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Firebase", "REST APIs", "GitHub Actions", "Azure DevOps", "Python", "TFLite", "Security", "CI/CD"];

  return (
    <section id="stack" className="section-shell">
      <p className="section-label">Technical Expertise</p>
      <h2 className="section-title">Runes of the stack</h2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="glass-card text-center font-medium">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
