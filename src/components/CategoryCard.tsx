/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { ProductCategory } from "../constants";

type CategoryCardProps = {
  category: ProductCategory;
  onExplore: (id: string) => void;
};

export default function CategoryCard({ category, onExplore }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-600/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col h-full max-w-[30rem] mx-auto w-full"
    >
      {/* Category Image */}
      <div className="aspect-[4/2.6] overflow-hidden border-b border-slate-100 relative bg-slate-50">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3 sm:mb-4 pb-6">
            {category.description}
          </p>
          
          {/* Characteristic Features */}
          <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
            {category.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-slate-700">
                <div className="w-4 h-4 rounded bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Check size={10} strokeWidth={3.5} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore Button */}
        <button 
          onClick={() => onExplore(category.id)}
          className="w-full py-2.5 rounded-xl border border-blue-600/20 text-blue-600 text-[10px] sm:text-[11px] font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
        >
          Explore Grade Options
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
