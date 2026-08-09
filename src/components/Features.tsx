"use client";

import { Shield, MapPin, BarChart3, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "Quality & Compliance First", desc: "Automated Aadhar KYC validation, background checks, and customized training modules ensure every executive meets corporate standards before deployment." },
  { icon: MapPin, title: "Geographical Outreach", desc: "Active operations across Tier-1, Tier-2, and Tier-3 cities in India for hyper-local delivery scales and pan-India banking coverage." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Track every lead, conversion, and payout in real-time. Our dashboard gives you complete visibility into campaign performance and workforce metrics." },
  { icon: Headphones, title: "Dedicated HR Support", desc: "Round-the-clock calling support, dispute resolution, and dedicated account managers for enterprise clients and field executives alike." },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full glass-card text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Tech-Enabled Force Hiring Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-3xl p-8 transition-all duration-400 hover:-translate-y-1 hover:border-primary/30"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <Icon className="w-6 h-6 text-accent" />
                  {feature.title}
                </h3>
                <p className="text-gray leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
