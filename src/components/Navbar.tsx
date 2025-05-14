
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-bold text-xl text-brtech-600">BR<span className="text-accent-purple">Tech</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Button className="bg-brtech-600 hover:bg-brtech-700">Get in Touch</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-brtech-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brtech-600">Home</a>
            <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brtech-600">Products</a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brtech-600">Features</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brtech-600">Contact</a>
            <div className="mt-4 px-3 py-2">
              <Button className="w-full bg-brtech-600 hover:bg-brtech-700">Get in Touch</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
