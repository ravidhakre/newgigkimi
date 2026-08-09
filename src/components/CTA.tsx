'use client';

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary via-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8 animate-slide-up">
          Don't miss out on transforming your business. Contact us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition btn-hover text-lg">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition btn-hover text-lg">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
