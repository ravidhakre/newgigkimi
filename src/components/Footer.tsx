'use client';

import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">NewGig</h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex gap-4">
              <FiFacebook className="text-xl hover:text-primary cursor-pointer transition" />
              <FiTwitter className="text-xl hover:text-primary cursor-pointer transition" />
              <FiLinkedin className="text-xl hover:text-primary cursor-pointer transition" />
              <FiInstagram className="text-xl hover:text-primary cursor-pointer transition" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition">Press</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition">Consulting</a></li>
              <li><a href="#" className="hover:text-primary transition">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:info@newgig.com" className="hover:text-primary transition">info@newgig.com</a></li>
              <li><a href="tel:+919876543210" className="hover:text-primary transition">+91 9876543210</a></li>
              <li>Mumbai, India</li>
              <li className="pt-2"><a href="#" className="hover:text-primary transition">Get Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; {currentYear} NewGig. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms of Service</a>
              <a href="#" className="hover:text-primary transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
