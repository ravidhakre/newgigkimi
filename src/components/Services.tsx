"use client";

import { CreditCard, Truck, UserCheck, CheckCircle } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Financial Products",
    desc: "We deploy certified field agents to acquire credit card customers, merchant scanner onboardings, and bank account activations.",
    features: ["Credit Card Sales", "Merchant Onboarding", "Account Activations", "Insurance Leads"],
  },
  {
    icon: Truck,
    title: "Delivery Fleet Sourcing",
    desc: "High-volume sourcing of delivery partners for leading logistics, e-commerce, quick-commerce, and food delivery companies in India.",
    features: ["Same-Day Onboarding", "Background Verification", "Vehicle Compliance", "24/7 Support"],
  },
  {
    icon: UserCheck,
    title: "Third-Party Hiring & Verification",
    desc: "Complete end-to-end recruitment process, background KYC checkups, document uploads, training module setups, and onboarding compliance.",
    features: ["Aadhar KYC Validation", "Document Verification", "Training Modules", "Compliance Reports"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full glass-card text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Our Domains
          </span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Hiring Programs We Manage
          </h2>
          <p className="text-gray text-lg">
            We recruit, verify, and train personnel across multiple channels to ensure absolute delivery metrics and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <div className="glass-card rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-primary/30 hover:shadow-2xl group cursor-pointer relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full gradient-primary opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-500" />
      
      <div className="w-[70px] h-[70px] rounded-2xl gradient-secondary flex items-center justify-center text-white text-3xl mb-6 relative z-10">
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
      <p className="text-gray text-sm leading-relaxed mb-5 relative z-10">{service.desc}</p>
      
      <ul className="space-y-2 relative z-10">
        {service.features.map((feature, j) => (
          <li key={j} className="flex items-center gap-2 text-gray text-sm">
            <CheckCircle className="w-4 h-4 text-accent shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
