/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Machinery from "./components/Machinery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CategoryCard from "./components/CategoryCard";
import ProductItemCard from "./components/ProductItemCard";
import { CATEGORIES, PRODUCTS } from "./constants";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, Layers, FileText, Factory, Award, Building, Briefcase, FileCheck2, HelpCircle } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [inquirySubject, setInquirySubject] = useState("");

  // Smooth reset scroll position to page-top upon dynamic view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedCategoryId]);

  const handlePageNavigation = (pageId: string) => {
    setCurrentPage(pageId);
    setSelectedCategoryId(null); // Clear active item subcategories on header clicks
  };

  const handleExploreCategory = (categoryId: string) => {
    setCurrentPage("products");
    setSelectedCategoryId(categoryId);
  };

  const handleProductInquiry = (productName: string) => {
    setInquirySubject(`Quotation Inquiry for ${productName}`);
    setCurrentPage("contact");
  };

  // Find active category context if selected
  const activeCategory = CATEGORIES.find(cat => cat.id === selectedCategoryId);
  const activeCategoryProducts = PRODUCTS.filter(prod => prod.categoryId === selectedCategoryId);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col justify-between">
      <div>
        <Navbar activeSection={currentPage} onNavClick={handlePageNavigation} />

        {/* Dynamic Multi-Page Router */}
        <main className="pt-20 flex-1">
          <AnimatePresence mode="wait">
            
            {/* ================= HOME PAGE ================= */}
            {currentPage === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Hero onExploreClick={() => handlePageNavigation("products")} />

                {/* Industrial Highlights Metric Section */}
                <section className="py-20 bg-white border-b border-slate-150">
                  <div className="max-w-7xl mx-auto px-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Our Footprint</span>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Enterprise Highlights</h2>
                      <p className="text-slate-500 text-sm">Empowering industrial packaging and offset printers across south-east Asia with consistent mill-grade materials.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="w-10 h-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                          <Building size={20} />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 mb-2">250K+ TN</h4>
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Annual Plant Yield</h5>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          State-of-the-art continuous refining lines operating at maximum capacity to satisfy market volumes.
                        </p>
                      </div>

                      <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="w-10 h-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                          <Briefcase size={20} />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 mb-2">99.8%</h4>
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">On-Time Logistics</h5>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          Secure container packaging, reliable regional transport, and meticulous freight scheduling controls.
                        </p>
                      </div>

                      <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="w-10 h-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                          <FileCheck2 size={20} />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 mb-2">ISO 9001</h4>
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Total Quality Certified</h5>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          Strict testing protocols from raw fiber grading up to finished reel shipment roll checks.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Primary Capabilities Teaser Grid */}
                <section className="py-24 bg-slate-50 border-b border-slate-200">
                  <div className="max-w-7xl mx-auto px-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                      <div>
                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Industrial Solutions</span>
                        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Core Product Segments</h2>
                      </div>
                      <button 
                        onClick={() => handlePageNavigation("products")}
                        className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md shrink-0"
                      >
                        Explore Complete Catalog
                        <ArrowRight size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                      {CATEGORIES.map((category) => (
                        <div key={category.id}>
                          <CategoryCard category={category} onExplore={handleExploreCategory} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Infrastructure Teaser CTA */}
                <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-10">
                    <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden border border-slate-800">
                      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full rotate-12">
                          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
                          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" />
                        </svg>
                      </div>
                      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="max-w-xl">
                          <span className="px-3 py-1 bg-blue-600 text-white rounded text-[9px] uppercase font-bold tracking-widest inline-block mb-4">Precision Engineering</span>
                          <h3 className="text-3xl font-extrabold mb-4">Our High-Capacity Infrastructure</h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-1">
                            Equipped with high-performance paper-making machines, double wire continuous Fourdrinier setup, and automated caliber profiling tools.
                          </p>
                        </div>
                        <button 
                          onClick={() => handlePageNavigation("machinery")}
                          className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-black/20 self-start lg:self-auto shrink-0"
                        >
                          View Our Machinery
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {/* ================= ABOUT PAGE ================= */}
            {currentPage === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-slate-50 border-b border-slate-200 py-16">
                  <div className="max-w-7xl mx-auto px-10">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Our Identity</span>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight">About M.P. Fiber</h1>
                    <p className="text-slate-550 max-w-xl text-sm leading-relaxed mt-4">
                      Established with a vision for redefining industrial-grade paper material synthesis, backed by continuous testing rigs and certifications.
                    </p>
                  </div>
                </div>
                <About />
              </motion.div>
            )}

            {/* ================= PRODUCTS DIRECTORY HUB ================= */}
            {currentPage === "products" && (
              <motion.div
                key="products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="py-12 bg-slate-50 min-h-[70vh]"
              >
                <div className="max-w-7xl mx-auto px-10">
                  {/* Breadcrumb Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    <button 
                      onClick={() => setSelectedCategoryId(null)}
                      className="hover:text-blue-600 transition-colors"
                    >
                      Products
                    </button>
                    {activeCategory && (
                      <>
                        <ChevronRight size={12} className="text-slate-400" />
                        <span className="text-slate-900 font-bold">{activeCategory.name}</span>
                      </>
                    )}
                  </div>

                  {/* Active Selection Tabs */}
                  <div className="flex flex-wrap gap-2.5 mb-10 pb-6 border-b border-slate-200">
                    <button
                      onClick={() => setSelectedCategoryId(null)}
                      className={`px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                        selectedCategoryId === null 
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      All Categories
                    </button>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategoryId(cat.id)}
                        className={`px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                          selectedCategoryId === cat.id 
                            ? "bg-blue-600 text-white border-blue-600 shadow-md"
                            : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {selectedCategoryId === null ? (
                    // Show Category Listing Grid
                    <div>
                      <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Our Material Engineering</span>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Product Categories</h2>
                        <p className="text-slate-600 text-sm">
                          Select an industrial category to browse custom spec sheets, verified GSM ranges, tear resistances, and sub-grade catalog lists.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {CATEGORIES.map((category) => (
                          <div key={category.id}>
                            <CategoryCard category={category} onExplore={handleExploreCategory} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Show Products in Selected Category
                    <div>
                      <div className="mb-12">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                          <div className="max-w-3xl">
                            <span className="p-1 px-2.5 rounded bg-blue-50 text-blue-600 font-extrabold uppercase tracking-wider text-[9px]">
                              Active Segment
                            </span>
                            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-4 tracking-tight">{activeCategory?.name}</h2>
                            <p className="text-slate-600 text-base leading-relaxed">
                              {activeCategory?.description}
                            </p>
                          </div>
                          
                          {/* Key characteristics list header */}
                          <div className="bg-white border border-slate-200 p-5 rounded-xl shrink-0">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Category Standards</h4>
                            <ul className="space-y-1.5">
                              {activeCategory?.keyFeatures.map((feat, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Display Products */}
                      <div className="space-y-10">
                        {activeCategoryProducts.length > 0 ? (
                          activeCategoryProducts.map((product) => (
                            <div key={product.id}>
                              <ProductItemCard 
                                product={product} 
                                onInquire={handleProductInquiry} 
                              />
                            </div>
                          ))
                        ) : (
                          <div className="p-12 text-center bg-white border border-slate-200 rounded-2xl">
                            <HelpCircle size={40} className="text-slate-400 mx-auto mb-4" />
                            <p className="text-slate-600 text-sm font-semibold">No specialized grades found in this category.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ================= MACHINERY INFRASTRUCTURE PAGE ================= */}
            {currentPage === "machinery" && (
              <motion.div
                key="machinery"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-slate-50 border-b border-slate-200 py-16">
                  <div className="max-w-7xl mx-auto px-10">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Our Plant</span>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight">Machinery & Assets</h1>
                    <p className="text-slate-550 max-w-xl text-sm leading-relaxed mt-4">
                      Exploring our automatic continuous sizing, high consistency clay-blades, and digital IR caliber diagnostic lines.
                    </p>
                  </div>
                </div>
                <Machinery />
              </motion.div>
            )}

            {/* ================= CONTACT DESK PAGE ================= */}
            {currentPage === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-slate-50 border-b border-slate-200 py-16">
                  <div className="max-w-7xl mx-auto px-10">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Inquiry Desk</span>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight">Contact & Contracting</h1>
                    <p className="text-slate-550 max-w-xl text-sm leading-relaxed mt-4">
                      Submit precise structural wrapping or printing specs to our engineers to process customized material reels.
                    </p>
                  </div>
                </div>
                <Contact prefilledSubject={inquirySubject} />
              </motion.div>
            )}

          </AnimatePresence>
        </main>
      </div>

      <Footer />
    </div>
  );
}
