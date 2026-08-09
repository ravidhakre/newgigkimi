'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-lg z-50 top-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            NewGig
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li><a href="#home" className="hover:text-primary transition">Home</a></li>
            <li><a href="#services" className="hover:text-primary transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-primary transition">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition">Testimonials</a></li>
            <li><a href="#pricing" className="hover:text-primary transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
          </ul>

          {/* CTA Button */}
          <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li><a href="#home" className="block hover:text-primary transition">Home</a></li>
            <li><a href="#services" className="block hover:text-primary transition">Services</a></li>
            <li><a href="#portfolio" className="block hover:text-primary transition">Portfolio</a></li>
            <li><a href="#testimonials" className="block hover:text-primary transition">Testimonials</a></li>
            <li><a href="#pricing" className="block hover:text-primary transition">Pricing</a></li>
            <li><a href="#contact" className="block hover:text-primary transition">Contact</a></li>
            <li><button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">Get Started</button></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
