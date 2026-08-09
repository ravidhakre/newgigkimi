'use client';

import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    period: '/month',
    description: 'Perfect for small projects',
    features: [
      'Up to 3 projects',
      '5GB storage',
      'Email support',
      'Basic analytics',
      'Monthly reporting',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '₹29,999',
    period: '/month',
    description: 'Best for growing businesses',
    features: [
      'Unlimited projects',
      '500GB storage',
      'Priority support',
      'Advanced analytics',
      'Weekly reporting',
      'API access',
      'Custom integrations',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '₹99,999',
    period: '/month',
    description: 'For large-scale operations',
    features: [
      'Unlimited everything',
      'Unlimited storage',
      '24/7 dedicated support',
      'Real-time analytics',
      'Custom reporting',
      'API access',
      'Custom integrations',
      'SLA guarantee',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 animate-slide-up transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary to-purple-600 text-white shadow-2xl -translate-y-4'
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-4 ${plan.highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? 'text-indigo-100' : 'text-gray-600'}>{plan.period}</span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition btn-hover ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-indigo-700'
                }`}
              >
                Get Started
              </button>
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FiCheck className="text-xl flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
