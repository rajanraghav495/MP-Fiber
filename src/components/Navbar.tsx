/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../Images/logo_new.png";

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavClick("home")}>
            <img src={logo} alt="M P Fibers Logo" className="h-14 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 relative py-2 ${
                  activeSection === item.id ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => onNavClick("contact")}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-200 shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 text-sm font-bold uppercase tracking-wider ${
                  activeSection === item.id ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
