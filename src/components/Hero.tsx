/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import craftPaper from "../../Images/Products/Craft_paper.png";
import duplexBoard from "../../Images/Products/Duplex_board.png";
import writingPaper from "../../Images/Products/writing_paper1.png";
import paperBags from "../../Images/Paper_bags.png";
import pizzaBox from "../../Images/Pizza_box.png";
import corrugatedCarton from "../../Images/Products/corrugated_carton.png";

const SLIDES = [
  {
    image: pizzaBox,
    name: "Pizza Box",
    description: "Sturdy and grease-resistant pizza boxes engineered for food-safe packaging with excellent print quality and structural integrity.",
  },
  {
    image: paperBags,
    name: "Paper Bags",
    description: "Eco-friendly and durable paper bags crafted for retail, packaging, and industrial use with superior strength and finish.",
  },
  {
    image: corrugatedCarton,
    name: "Corrugated Carton",
    description: "Heavy-duty corrugated cartons offering superior protection and structural strength — the ideal packaging solution for industrial and retail shipments.",
  },
  {
    image: craftPaper,
    name: "Craft Paper",
    description: "Premium quality craft paper engineered for strength and versatility across industrial packaging applications.",
  },
  {
    image: duplexBoard,
    name: "Duplex Board",
    description: "High-grade multilayer coated duplex boards engineered for excellent stiffness and stellar multicolor offset printing.",
  },
  {
    image: writingPaper,
    name: "Writing & Printing Paper",
    description: "High-brightness premium paper crafted from eco-responsible fiber, perfect for textbooks, journals, and office demands.",
  },
  // ...PRODUCTS.map((p) => ({
  //   image: p.images[0],
  //   name: p.name,
  //   description: p.description,
  // })),
];

export default function Hero({ onExploreClick }: { onExploreClick: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-[20px] overflow-hidden bg-slate-50">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2" />
        <div className="absolute -bottom-24 left-0 w-1/4 h-2/3 bg-slate-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Precision Engineered Materials
            </div> */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 sm:mb-8">
              The Gold Standard in <span className="text-blue-600">Merchant Exporting</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 sm:mb-10 max-w-xl">
              MP Fiber & Paper Mills Limited (MPF) is a trusted merchant exporter supplying paper, board, packaging, and stationery products to buyers around the world through dependable sourcing, quality control, and efficient export execution.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button 
                onClick={onExploreClick}
                className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Explore Range
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-slate-700 border border-slate-300 hover:bg-slate-100 transition-all">
                Download Catalog
              </button> */}
            </div>

            <div className="mt-4 sm:mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">45+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Years Excellence</span>
              </div>
              <div className="w-px h-8 sm:h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">500+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Client Projects</span>
              </div>
              <div className="w-px h-8 sm:h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">ISO</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">9001:2015 Cert.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border border-white relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img
                    src={SLIDES[currentIdx].image}
                    alt={SLIDES[currentIdx].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                      <h3 className="text-white font-bold text-xl mb-1">{SLIDES[currentIdx].name}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {SLIDES[currentIdx].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Indicators */}
              <div className="absolute top-8 right-8 flex gap-2">
                {SLIDES.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentIdx ? "w-8 bg-blue-500" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
