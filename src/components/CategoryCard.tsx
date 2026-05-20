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
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-600/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all flex flex-col h-full"
    >
      {/* Category Image */}
      <div className="aspect-[16/10] overflow-hidden border-b border-slate-100 relative bg-slate-50">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {category.description}
          </p>
          
          {/* Characteristic Features */}
          <ul className="space-y-3 mb-8">
            {category.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-700">
                <div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Check size={11} strokeWidth={3.5} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore Button */}
        <button 
          onClick={() => onExplore(category.id)}
          className="w-full py-4 rounded-xl border border-blue-600/20 text-blue-600 text-xs font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
        >
          Explore Grade Options
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
