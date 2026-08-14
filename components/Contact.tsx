const emails = [
  "moekyawaung@programmer.net",
  "moekyawaung@collector.org",
  "moekyawaung@technologist.com",
  "moekyawaung@engineer.com",
  "moekyawaung@mail.com",
];

const socials = [
  ["GitHub", "https://github.com/Dev-moe-kyawaung/"],
  ["LinkedIn", "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1"],
  ["YouTube", "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG"],
  ["Bluesky", "https://bsky.app/profile/moekyawaung96.bsky.social"],
  ["Gravatar", "https://gravatar.com/moekyawaung2026"],
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Recruiters · Companies · Collaborations</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="glass-card">
          <p className="section-label">Phone</p>
          <a href="tel:+959889000889" className="mt-3 block text-lg">+95 9 889 000 889</a>
          <a href="tel:+959666000050" className="block text-lg">+959 666 000 050</a>
        </div>

        <div className="glass-card">
          <p className="section-label">Emails</p>
          <div className="mt-3 flex flex-col gap-2">
            {emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="text-white/75 hover:text-gold">
                {email}
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <p className="section-label">Social constellations</p>
          <div className="mt-3 flex flex-col gap-2">
            {socials.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" className="text-white/75 hover:text-gold">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href="https://github.com/Dev-moe-kyawaung/" className="ghost-btn" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://gravatar.com/moekyawaung2026" className="ghost-btn" target="_blank" rel="noreferrer">Gravatar</a>
      </div>
    </section>
  );
}
