/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, PhoneIcon, Smartphone } from "lucide-react";
import logo from "../../Images/logo_new.png";

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-slate-600 py-16 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-left grid md:grid-cols-2 gap-12 items-start">
          {/* <div className="col-span-1 md:col-span-1">
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
          </div> */}

          <div>
            <h3 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-wider">Quick Access</h3>
            <ul className="space-y-4 text-xs text-left">
              <li><a href="#" className="hover:text-blue-600 transition-colors text-left">Our Product Range</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Connect With Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-wider">Regional HQ</h3>
            <ul className="space-y-4 text-xs text-left">
              <li className="flex gap-3 leading-relaxed">
                <MapPin size={16} className="text-blue-600 shrink-0" />
                <span>403, Vireshwar Chambers, M.G.Road, Vile Parle (E), Mumbai - 400057, India.</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <Phone size={16} className="text-blue-600 shrink-0" />
                <span>+91 22 66964302, +91 22 67983728</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <Smartphone size={16} className="text-blue-600 shrink-0" />
                <span>+91 9987519270, +91 8369270223</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <Mail size={16} className="text-blue-600 shrink-0" />
                <span>info@mpfiber.com, mpfiber53@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-200 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest leading-none">
          <p>© {new Date().getFullYear()} MP Fiber & Paper Mills Limited.</p>
          <div className="flex gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
}
