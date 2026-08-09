"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Building2, Wallet, Clock } from "lucide-react";

const stats = [
  { icon: Users, target: 25000, suffix: "+", label: "Active Field Force" },
  { icon: Building2, target: 150, suffix: "+", label: "Corporate Clients Scaled" },
  { icon: Wallet, target: 50, suffix: " Lakhs+", label: "Commissions Disbursed" },
  { icon: Clock, target: 72, suffix: "", label: "Hours Deployment Time" },
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} visible={visible} delay={i * 200} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ stat, visible, delay }: { stat: typeof stats[0]; visible: boolean; delay: number }) {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          setCount(stat.target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [visible, stat.target, delay]);

  return (
    <div className="glass-card rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 group">
      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 text-white text-2xl group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7" />
      </div>
      <div className="text-4xl md:text-5xl font-extrabold mb-2 font-grotesk gradient-primary bg-clip-text text-transparent">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-gray font-medium">{stat.label}</div>
    </div>
  );
}
