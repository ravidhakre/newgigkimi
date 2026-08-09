'use client';

import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary via-indigo-600 to-purple-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with <span className="text-yellow-300">Expert Solutions</span>
            </h1>
            <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
              We deliver innovative digital solutions that empower your business to reach new heights. Professional expertise meets cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 btn-hover">
                Get Started <FiArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition btn-hover">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="animate-slide-in-right">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-white text-xl font-semibold">Premium Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white border-opacity-20">
          <div className="text-center">
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-indigo-100 mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="text-indigo-100 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-indigo-100 mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
