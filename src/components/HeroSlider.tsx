"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Rocket, PlayCircle, Shield, UserPlus } from "lucide-react";

const slides = [
  {
    tag: "🚀 India's Leading Recruitment Partner",
    title: "Scale Your Workforce in 72 Hours",
    desc: "SRYN is India's premier corporate workforce solutions partner. We help top national brands scale their logistics, banking, and retail operations with certified field forces.",
    bg: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920",
    btn1: { text: "Hire Now", icon: Rocket },
    btn2: { text: "Watch Demo", icon: PlayCircle },
  },
  {
    tag: "💰 Maximum Commission Payouts",
    title: "Earn Weekly with Premium Campaigns",
    desc: "Access high-yielding campaigns, view complete real-time ledgers, and enjoy fast, direct weekly bank transfers with complete transactional transparency.",
    bg: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920",
    btn1: { text: "Join as Executive", icon: UserPlus },
    btn2: { text: "Learn More", icon: PlayCircle },
  },
  {
    tag: "🛡️ 100% Secure & Verified",
    title: "Verified Profiles, Trusted Results",
    desc: "Automated Aadhar KYC validation, background checks, and customized training modules ensure only the best talent reaches your doorstep.",
    bg: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920",
    btn1: { text: "Verify Now", icon: Shield },
    btn2: { text: "Our Process", icon: PlayCircle },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {slides.map((slide, i) => {
        const Btn1Icon = slide.btn1.icon;
        const Btn2Icon = slide.btn2.icon;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})`, filter: "brightness(0.3)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-dark/90 to-primary/20" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-2xl">
                <span className="inline-block px-5 py-2 rounded-full glass-card text-accent text-sm font-semibold uppercase tracking-wider mb-6">
                  {slide.tag}
                </span>
                <h1 className="font-grotesk text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gradient-text">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray mb-8 leading-relaxed max-w-xl">
                  {slide.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">
                    <Btn1Icon className="w-5 h-5" />
                    {slide.btn1.text}
                  </button>
                  <button className="btn-secondary">
                    <Btn2Icon className="w-5 h-5" />
                    {slide.btn2.text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-6 z-20 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto w-12 h-12 rounded-full glass-card flex items-center justify-center text-light hover:bg-primary hover:border-primary transition-all hover:scale-110"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-12 h-12 rounded-full glass-card flex items-center justify-center text-light hover:bg-primary hover:border-primary transition-all hover:scale-110"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current ? "w-9 bg-primary border-primary" : "w-3 bg-white/10 border border-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
