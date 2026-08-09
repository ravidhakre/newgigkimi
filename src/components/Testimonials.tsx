"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    initials: "RK",
    text: "SRYN helped us scale our delivery fleet by 300% in just 2 weeks. Their verification process is top-notch and the executives are well-trained.",
    author: "Rahul Kumar",
    role: "Operations Head, QuickCommerce Startup",
    rating: 5,
  },
  {
    initials: "PS",
    text: "The weekly payout system is a game changer. I earn consistent commissions working with HDFC and SBI campaigns. Best platform for gig workers!",
    author: "Priya Sharma",
    role: "Field Executive, Delhi NCR",
    rating: 5,
  },
  {
    initials: "AV",
    text: "We needed 500+ verified delivery partners in Mumbai within 72 hours. SRYN delivered with 98% retention rate. Incredible speed and quality.",
    author: "Amit Verma",
    role: "Logistics Manager, E-commerce Giant",
    rating: 4.5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full glass-card text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold gradient-text">
            What Our Partners Say
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full glass-card p-8 md:p-12 text-center">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {t.initials}
                </div>
                <p className="text-lg md:text-xl italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-lg">{t.author}</div>
                <div className="text-gray text-sm mb-4">{t.role}</div>
                <div className="flex justify-center gap-1 text-yellow-400">
                  {Array.from({ length: Math.floor(t.rating) }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                  {t.rating % 1 !== 0 && <StarHalf className="w-5 h-5 fill-current" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-white/20 border border-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
