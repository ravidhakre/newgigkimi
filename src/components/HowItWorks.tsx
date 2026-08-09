"use client";

import { UserPlus, IdCard, Target, Wallet } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Register Profile", desc: "Create your candidate or partner account in under 60 seconds with simple OTP verification. No lengthy forms, no waiting." },
  { icon: IdCard, title: "Verify Credentials", desc: "Securely upload your basic documents for quick activation and approval by our verification desk. 100% digital, 100% secure." },
  { icon: Target, title: "Trigger Campaigns", desc: "Select open logistics, retail, or banking campaigns and activate your instant tracking links. Start working immediately." },
  { icon: Wallet, title: "Earn Weekly", desc: "Track lead conversions, check real-time ledgers, and receive secure payouts direct to your bank account every week." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full glass-card text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            4-Step Process
          </span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-4 gradient-text">
            How SRYN Works
          </h2>
          <p className="text-gray text-lg">
            From registration to your first payout — everything happens seamlessly on our platform.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 gradient-primary -translate-x-1/2" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 1;
            return (
              <div key={i} className={`relative flex items-center mb-12 last:mb-0 ${isEven ? "md:flex-row-reverse" : ""}`}>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full gradient-primary flex items-center justify-center text-white font-extrabold text-lg border-4 border-darker z-10 shadow-lg shadow-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? "md:pr-20" : "md:pl-20"}`}>
                  <div className="glass-card rounded-3xl p-6 md:p-8 transition-all duration-400 hover:scale-[1.03] hover:border-primary/30">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
