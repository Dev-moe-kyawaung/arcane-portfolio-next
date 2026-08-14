export default function Hero() {
  return (
    <section id="hero" className="section-shell flex items-center">
      <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div>
          <p className="section-label">Senior Android Engineer · Kotlin · Compose · Clean Architecture</p>
          <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">
            မိုးကျော်အောင် <span className="text-gold">Moe Kyaw Aung</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            I build production-grade mobile systems with cinematic UI, strong architecture, and real engineering judgment.
          </p>
          <p className="mt-4 text-sm tracking-[0.2em] text-mist">
            Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭 · Burmese · English · Kotlin
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="solid-btn">Open Spellbooks</a>
            <a href="#contact" className="ghost-btn">Summon Me</a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["40+", "Certifications"],
              ["16", "App Collection"],
              ["5", "Flagship Case Studies"],
              ["Open", "to work"],
            ].map(([a, b]) => (
              <div key={b} className="glass-card">
                <strong className="block font-display text-3xl text-gold">{a}</strong>
                <span className="text-sm text-white/70">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-full border border-dashed border-gold/60 animate-[spin_36s_linear_infinite]" />
          <img
            className="relative z-10 mx-auto aspect-square w-4/5 rounded-full border-4 border-gold object-cover shadow-glow"
            src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png"
            alt="Moe Kyaw Aung"
          />
          <div className="glass-card mt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Arcane Signature</p>
            <p className="mt-3 text-white/75">Code with culture. Build with purpose.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
