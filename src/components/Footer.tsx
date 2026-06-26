/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "../../Images/logo_new.png";

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-slate-600 py-16 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="MP Fiber Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-xs leading-relaxed mb-6">
              The gold standard in precision-engineered industrial materials since 1978. ISO-Certified quality and sustainable production processes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-wider">Quick Access</h3>
            <ul className="space-y-4 text-xs">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Our Product Range</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Industrial Applications</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Technical Specifications</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Infrastructure Detail</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Connect With Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-wider">Capabilities</h3>
            <ul className="space-y-4 text-xs">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Industrial Roofing FRP</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Safety Equipment Gear</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FRP Grating Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Reinforced Composites</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-wider">Regional HQ</h3>
            <ul className="space-y-4 text-xs">
              <li className="flex gap-3 leading-relaxed">
                <MapPin size={16} className="text-blue-600 shrink-0" />
                <span>Indore, Madhya Pradesh 452001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-600 shrink-0" />
                <span>+91 731 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-600 shrink-0" />
                <span>sales@mpfiber.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest leading-none">
          <p>© {new Date().getFullYear()} MP Fiber & Paper Mills Limited.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Protocols</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Operations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
