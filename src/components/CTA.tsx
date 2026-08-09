"use client";

import { Phone, FileText, UserPlus, Eye } from "lucide-react";

export default function CTA() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="relative z-10">
            <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-4">
              Need Instant Scale?
            </h2>
            <p className="text-gray text-lg mb-8 max-w-xl mx-auto">
              Deploy 100+ vetted field executives or delivery boy fleets within 72 hours. Let's discuss your workforce requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">
                <Phone className="w-5 h-5" />
                Get Corporate Consultation
              </button>
              <button className="btn-secondary">
                <FileText className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(249,115,22,0.1))", border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="relative z-10">
            <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-4">
              Apply For Open Projects
            </h2>
            <p className="text-gray text-lg mb-8 max-w-xl mx-auto">
              Register as an executive to earn weekly commissions. Join 25,000+ active field force members already earning with SRYN.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary" style={{ background: "linear-gradient(135deg, #ec4899, #f97316)" }}>
                <UserPlus className="w-5 h-5" />
                Register as Executive
              </button>
              <button className="btn-secondary">
                <Eye className="w-5 h-5" />
                View Open Campaigns
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
