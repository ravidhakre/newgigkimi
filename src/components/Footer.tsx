"use client";

import { Rocket, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const links = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Services: ["Financial Products", "Delivery Fleet", "KYC Verification", "Corporate Hiring"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-dark/80 border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-1">
          <a href="#" className="flex items-center gap-2 text-2xl font-extrabold gradient-primary bg-clip-text text-transparent mb-4">
            <Rocket className="w-7 h-7 text-primary" />
            SRYN
          </a>
          <p className="text-gray text-sm leading-relaxed mb-6">
            India's premier corporate workforce solutions partner. Scaling logistics, banking, and retail operations with certified field forces since 2020.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-bold mb-4">{title}</h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray text-sm hover:text-primary hover:pl-1 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center pt-8 border-t border-white/10 text-gray text-sm">
        <p>© 2026 SRYN (Gig Sathi). All rights reserved. Made with ❤️ in India</p>
      </div>
    </footer>
  );
}
