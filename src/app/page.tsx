"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/* ─── Inline SVG Icons ─── */
const ShoppingCartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

/* ─── Main Page Component ─── */
export default function ParkedPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#800040]">
      {/* ── Background Effects ── */}
      <div className="absolute inset-0 paw-pattern-light opacity-30" />

      {/* Gradient orbs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        style={{ animation: "orbPulse 8s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-green/15 rounded-full blur-[100px]"
        style={{
          animation: "orbPulse 10s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Content Side ── */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Logo */}
            <div
              className={`transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Simply Diego's Natural Pet Food Market"
                width={320}
                height={120}
                className="w-48 sm:w-64 h-auto object-contain drop-shadow-lg mx-auto lg:mx-0"
                priority
              />
            </div>

            {/* Heading */}
            <h1
              className={`text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-[1.05] transition-all duration-700 delay-100 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Thank You for <br className="hidden md:block" />
              <span
                className="gradient-text inline-block"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 5s linear infinite",
                }}
              >
                Supporting Local
              </span>{" "}
              <br className="hidden sm:inline" />
              Small Businesses
              <HeartIcon className="inline-block w-8 h-8 sm:w-10 sm:h-10 text-primary ml-2 -mt-1 animate-pulse-soft" />
            </h1>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                // asChild
                // size="lg"
                className="h-14 px-8 rounded-[5px] text-lg font-bold shadow-lg hover:shadow-xl hover:shadow-secondary/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 bg-secondary hover:bg-[#017ce8] text-white"
              >
                <Link
                  href="https://shop.simplydiegos.com/products/shop/"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>Shop Online Now</span>
                </Link>
              </button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-14 px-8 rounded-[5px] text-lg font-bold border-2 border-white/20 text-white bg-white/5 hover:bg-white/15 hover:border-white/40 hover:text-white backdrop-blur-sm transition-all flex items-center gap-3"
              >
                <a
                  href="https://simplydiegos.as.me/"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <CalendarIcon className="h-5 w-5" />
                  <span>Book DIY Wash</span>
                </a>
              </Button>
            </div>
          </div>

          {/* ── Image Side ── */}
          <div
            className={`flex-1 relative w-full max-w-xl lg:max-w-2xl transition-all duration-1000 delay-400 ${
              mounted
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-[60px] scale-95"
            }`}
          >
            <div className="relative">
              {/* Decorative ring behind image */}
              <div
                className="absolute -inset-6 border-2 border-dashed border-primary/15 rounded-[2rem]"
                style={{ animation: "slowSpin 60s linear infinite" }}
              />

              {/* Glowing accent behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-transparent to-accent-green/15 rounded-[2rem] blur-lg" />

              {/* Main image container */}
              <div className="relative aspect-[4/5] md:aspect-square rounded-[5px] overflow-hidden shadow-2xl shadow-black/40 border-2 border-white/10">
                <Image
                  src="/hero-image.jpeg"
                  alt="Simply Diego's Local Healthy Pet Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                  priority
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 w-full py-3 text-center">
        <p className="text-xs text-white/30 font-medium">
          © <span className="mr-1">{new Date().getFullYear()}</span> Simply
          Diego&apos;s. Locally owned & operated.
        </p>
      </footer>
    </section>
  );
}
