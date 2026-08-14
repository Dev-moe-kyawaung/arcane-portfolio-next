import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Moe Kyaw Aung · Arcane Code Sorcerer",
    template: "%s · Moe Kyaw Aung",
  },
  description: "Premium cinematic Android portfolio with MDX blog posts.",
  openGraph: {
    title: "Moe Kyaw Aung · Arcane Code Sorcerer",
    description: "Senior Android Engineer portfolio with cinematic motion and MDX blog.",
    url: "https://your-domain.com",
    siteName: "Moe Kyaw Aung",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe Kyaw Aung · Arcane Code Sorcerer",
    description: "Senior Android Engineer portfolio with cinematic motion and MDX blog.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
