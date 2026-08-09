'use client';

import { FiCheckCircle } from 'react-icons/fi';

const features = [
  'Cutting-edge technology stack',
  'Experienced team of professionals',
  '24/7 customer support',
  'Scalable solutions',
  'Competitive pricing',
  'Fast deployment',
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold text-dark mb-8">Why Choose Us?</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <FiCheckCircle className="text-primary text-2xl flex-shrink-0" />
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-lg text-indigo-100 mb-8">
                Join hundreds of satisfied clients who have transformed their business with our solutions.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition btn-hover">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
