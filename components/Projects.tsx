const projects = [
  {
    title: "PulseSync",
    tag: "Flagship",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795675037_heh9xk.png",
    desc: "Multi-module Android architecture, Firebase backend, offline-first behavior, and CI/CD discipline.",
    link: "https://github.com/Dev-moe-kyawaung/pulsesync-android",
  },
  {
    title: "POS Ultimate Pro Max",
    tag: "Retail system",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778794430377_n7xlmz.png",
    desc: "Premium point-of-sale evolution with billing, inventory, and resilient product workflows.",
    link: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
  },
  {
    title: "Job Portal App",
    tag: "Productivity",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794626112_ega7kk.png",
    desc: "Hiring flow UI built for fast scanning, clean discovery, and mobile-first browsing.",
    link: "https://github.com/moekyawaung-tech/Job-Portal-App",
  },
  {
    title: "Social Dashboard",
    tag: "Analytics",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp",
    desc: "Live panel-style UI with modular cards, metrics, and a strong information hierarchy.",
    link: "https://github.com/moekyawaung-tech/social-dashboard",
  },
  {
    title: "MoekyawTranslator",
    tag: "Current ritual",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png",
    desc: "AI translation app in progress with cultural nuance, local-first thinking, and practical utility.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <p className="section-label">Featured Projects</p>
      <h2 className="section-title">Spellbooks as case studies</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="min-h-56 bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">{p.tag}</p>
              <h3 className="mt-3 font-display text-3xl">{p.title}</h3>
              <p className="mt-3 leading-7 text-white/75">{p.desc}</p>
              {p.link && (
                <a className="mt-5 inline-block text-gold underline decoration-gold/40 underline-offset-4" href={p.link} target="_blank" rel="noreferrer">
                  Open tome ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
