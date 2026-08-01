import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kimiya Jafarpor — AI & Machine Learning Developer",
  description: "Portfolio of Kimiya Jafarpor, an AI and machine learning developer in Tehran working across speech, language, vision, and embedded systems.",
  openGraph: {
    title: "Kimiya Jafarpor — AI & Machine Learning Developer",
    description: "Applied AI across speech, language, vision, and embedded systems.",
    type: "website",
    images: [{ url: "https://kimiya1991.github.io/kimiya-portfolio/og.png", width: 1734, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimiya Jafarpor — AI & Machine Learning Developer",
    description: "Applied AI across speech, language, vision, and embedded systems.",
    images: ["https://kimiya1991.github.io/kimiya-portfolio/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
