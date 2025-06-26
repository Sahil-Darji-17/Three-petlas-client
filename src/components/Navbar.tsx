'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link href="/" className="flex items-center space-x-2 min-w-0">
              <span className="truncate text-xl font-bold text-black font-[Montserrat] tracking-wide">Three Petals</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-0 md:ml-10 flex flex-col md:flex-row items-baseline space-y-2 md:space-y-0 md:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
              <Link href="#team" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                Team
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-4">
            <Link href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 p-2"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 rounded-b-xl shadow-lg">
              <Link href="/" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors rounded">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors rounded">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors rounded">
                Services
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors rounded">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors rounded">
                Contact
              </Link>
              <Link href="#team" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors rounded">
                Team
              </Link>
              <div className="pt-4">
                <Link href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors block text-center">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 