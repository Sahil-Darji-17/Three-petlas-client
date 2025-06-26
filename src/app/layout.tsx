import { Montserrat } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "Three Petals - Expert Physiotherapy & Fitness Training",
  description: "Leading physiotherapy, fitness training, and rehabilitation center. Expert care for pain relief, injury recovery, and wellness programs. Book your consultation today.",
  keywords: ["physiotherapy", "fitness training", "rehabilitation", "pain relief", "sports injury", "wellness programs", "Mumbai"],
  authors: [{ name: "Three Petals" }],
  creator: "Three Petals",
  openGraph: {
    title: "Three Petals - Expert Physiotherapy & Fitness Training",
    description: "Leading physiotherapy, fitness training, and rehabilitation center in Mumbai. Expert care for pain relief, injury recovery, and wellness programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased bg-white text-black font-sans">
        {children}
      </body>
    </html>
  );
}
