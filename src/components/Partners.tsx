"use client";

import { Landmark, CreditCard, Signal, Utensils, Zap, Package, Bicycle, ShoppingCart } from "lucide-react";

const partners = [
  { name: "HDFC Bank", icon: Landmark, color: "#004d99" },
  { name: "SBI Card", icon: CreditCard, color: "#0066b2" },
  { name: "Airtel KYC", icon: Signal, color: "#ff0000" },
  { name: "Zomato Fleet", icon: Utensils, color: "#e23744" },
  { name: "Swiggy", icon: Zap, color: "#fc8019" },
  { name: "Delhivery", icon: Package, color: "#0f4c81" },
  { name: "Shadowfax", icon: Bicycle, color: "#7b1fa2" },
  { name: "Flipkart", icon: ShoppingCart, color: "#f7a600" },
];

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 overflow-hidden relative">
      <div className="text-center max-w-2xl mx-auto mb-12 px-6">
        <span className="inline-block px-5 py-2 rounded-full glass-card text-accent text-sm font-semibold uppercase tracking-wider mb-4">
          Trusted Partners
        </span>
        <h2 className="font-grotesk text-4xl md:text-5xl font-bold gradient-text">
          Brands We Work With
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-darker to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-darker to-transparent z-10" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-center min-w-[200px] h-24 mx-4 glass-card rounded-2xl px-6 text-gray hover:text-light hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Icon className="w-6 h-6 mr-2" style={{ color: partner.color }} />
                <span className="font-bold text-lg">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
