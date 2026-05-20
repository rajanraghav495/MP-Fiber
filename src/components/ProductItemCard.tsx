/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ClipboardList, ArrowRight, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductItem } from "../constants";

type ProductItemCardProps = {
  product: ProductItem;
  onInquire: (productName: string) => void;
};

export default function ProductItemCard({ product, onInquire }: ProductItemCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-600/30 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row shadow-sm"
    >
      {/* Product Image Panel / Slider */}
      <div className="w-full md:w-2/5 relative overflow-hidden bg-slate-100 min-h-[300px] md:min-h-full group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={product.images[currentImageIndex]}
            alt={`${product.name} - view ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />

        {/* Navigation Controls */}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
            >
              <ChevronRight size={18} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? "bg-white w-3" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Info Panel */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="p-1 px-2.5 rounded bg-blue-50 text-blue-600 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1">
              <Tag size={10} /> Certified Grade
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{product.name}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            {/* Tech Specs Table */}
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5 mb-3">
                <ClipboardList size={12} /> Technical Specifications
              </span>
              <div className="border border-slate-150 rounded-lg overflow-hidden bg-slate-50/50">
                <table className="w-full text-left text-xs font-medium">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-slate-100 last:border-0 ${
                          idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                        }`}
                      >
                        <td className="p-2.5 px-3 font-bold text-slate-500 w-1/2">{key}</td>
                        <td className="p-2.5 px-3 text-slate-950 font-mono">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Industrial Applications */}
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5 mb-3">
                <Check size={12} className="text-emerald-600" /> Recommended Applications
              </span>
              <ul className="space-y-2">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span className="font-semibold leading-relaxed">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Bottom */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 font-medium">
            * Custom dimensions and tailored GSM ranges available upon bulk contract validation.
          </p>
          <button 
            onClick={() => onInquire(product.name)}
            className="whitespace-nowrap flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-600/25 transition-all self-end sm:self-auto group"
          >
            Request Quotation
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
