/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Settings, Cpu, Gauge, Zap } from "lucide-react";
import { MACHINERY } from "../constants";

export default function Machinery() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Industrial Infrastructure</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Equipped with high-performance manufacturing machines and automated systems, our facility maintains superior efficiency and multi-layered quality control.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-5 py-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm">
              <Cpu size={20} className="text-blue-600" />
              <span className="font-bold uppercase tracking-widest text-[10px]">Automated Sytems</span>
            </div>
            <div className="px-5 py-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm">
              <Settings size={20} className="text-blue-600" />
              <span className="font-bold uppercase tracking-widest text-[10px]">Smart Control</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {MACHINERY.map((machine, idx) => (
            <motion.div
              key={machine.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group h-[500px] rounded-[2.5rem] overflow-hidden border border-white shadow-xl"
            >
              <img 
                src={machine.image} 
                alt={machine.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 rounded bg-blue-600 text-white text-[10px] uppercase font-bold tracking-widest mb-4"
                >
                  High-Precision Machinery
                </motion.span>
                <h3 className="text-3xl font-extrabold text-white mb-4">{machine.name}</h3>
                <p className="text-slate-300 text-sm mb-8 max-w-sm">
                  {machine.description}
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                    <Gauge size={16} className="text-blue-400" />
                    High Capacity
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                    <Zap size={16} className="text-blue-400" />
                    Eco-Efficient
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[2.5rem] relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-45">
              <rect width="10" height="100" fill="white" />
              <rect x="20" width="10" height="100" fill="white" />
              <rect x="40" width="10" height="100" fill="white" />
              <rect x="60" width="10" height="100" fill="white" />
              <rect x="80" width="10" height="100" fill="white" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-extrabold text-white mb-4">Continuous Infrastructure Upgrades</h3>
              <p className="text-slate-400 leading-relaxed">
                We invest heavily in R&D and digital transformation to maintain our position at the forefront of global industrial standards.
              </p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-2xl">
              Technical Specifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
