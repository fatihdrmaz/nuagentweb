import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nu-Agent — AI Employee Platform",
  description: "Slack/Teams'e entegre, 3 katmanlı hafızalı AI çalışanlar: personal, organizational, social. RAG destekli, güvenli, tekil kimlikli.",
  keywords: ["AI", "artificial intelligence", "AI employee", "Slack bot", "Teams bot", "RAG", "enterprise AI", "automation"],
  authors: [{ name: "Nu-Agent" }],
  creator: "Nu-Agent",
  publisher: "Nu-Agent",
  metadataBase: new URL("https://nuagent.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://nuagent.com",
    title: "Nu-Agent — AI Employee Platform",
    description: "Slack/Teams'e entegre, 3 katmanlı hafızalı AI çalışanlar: personal, organizational, social. RAG destekli, güvenli, tekil kimlikli.",
    siteName: "Nu-Agent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nu-Agent — AI Employee Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nu-Agent — AI Employee Platform",
    description: "Slack/Teams'e entegre, 3 katmanlı hafızalı AI çalışanlar: personal, organizational, social. RAG destekli, güvenli, tekil kimlikli.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
