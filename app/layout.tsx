import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio SEO Optimizer – Rank Higher, Get Hired Faster",
  description: "Analyze your developer portfolio for SEO issues and get actionable recommendations to appear in front of hiring managers on Google.",
  keywords: "developer portfolio SEO, portfolio optimization, get hired, freelance developer SEO",
  openGraph: {
    title: "Portfolio SEO Optimizer",
    description: "Boost your developer portfolio's Google visibility and attract more hiring managers.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="48055936-d962-4c2e-9213-048046231377"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
