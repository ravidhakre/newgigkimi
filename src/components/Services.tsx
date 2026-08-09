'use client';

import { FiCode, FiSmartphone, FiBarChart3, FiShield, FiUsers, FiZap } from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Custom websites and web applications built with latest technologies for optimal performance.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications tailored to your business needs.',
  },
  {
    icon: FiBarChart3,
    title: 'Analytics & Insights',
    description: 'Data-driven solutions to understand your customers and optimize operations.',
  },
  {
    icon: FiShield,
    title: 'Security Solutions',
    description: 'Enterprise-grade security measures to protect your digital assets.',
  },
  {
    icon: FiUsers,
    title: 'Consulting',
    description: 'Expert guidance on digital transformation and business strategy.',
  },
  {
    icon: FiZap,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure for your growing business needs.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 border-2 border-gray-100 rounded-xl hover:border-primary hover:shadow-xl transition-all duration-300 animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="text-4xl text-primary mb-4" />
                <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
