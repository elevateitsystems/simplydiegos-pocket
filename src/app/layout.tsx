import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Simply Diego's | Natural Pet Food Market — Coming Soon",
  description:
    "Simply Diego's Natural Pet Food Market in Albuquerque. We're building something special — shop online, check our schedule, and thank you for supporting local small businesses!",
  keywords: [
    "pet food",
    "natural pet food",
    "Albuquerque",
    "pet store",
    "dog food",
    "cat food",
    "Simply Diegos",
    "local business",
  ],
  openGraph: {
    title: "Simply Diego's | Natural Pet Food Market",
    description:
      "Thank you for supporting local small businesses. Shop online and visit us in Albuquerque!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", poppins.variable, geist.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
