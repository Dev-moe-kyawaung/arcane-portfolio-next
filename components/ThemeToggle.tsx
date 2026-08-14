"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <button
      onClick={() => setLight((v) => !v)}
      className="fixed right-5 top-5 z-50 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl"
    >
      {light ? "☼" : "☽"}
    </button>
  );
}
