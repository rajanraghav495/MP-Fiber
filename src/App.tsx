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
                <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
                  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="max-w-3xl mb-10 sm:mb-12">
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Our Footprint</span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Enterprise Highlights</h2>
                      <p className="text-slate-500 text-sm leading-relaxed">Empowering industrial packaging and offset printers across south-east Asia with consistent mill-grade materials.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                      <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                          <Building size={18} />
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1.5">250K+ TN</h4>
                        <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Annual Plant Yield</h5>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          State-of-the-art continuous refining lines operating at maximum capacity to satisfy market volumes.
                        </p>
                      </div>

                      <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                          <Briefcase size={18} />
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1.5">99.8%</h4>
                        <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">On-Time Logistics</h5>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Secure container packaging, reliable regional transport, and meticulous freight scheduling controls.
                        </p>
                      </div>

                      <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                          <FileCheck2 size={18} />
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1.5">ISO 9001</h4>
                        <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Total Quality Certified</h5>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Strict testing protocols from raw fiber grading up to finished reel shipment roll checks.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Primary Capabilities Teaser Grid */}
                <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
                  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 sm:mb-12">
                      <div>
                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Industrial Solutions</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Core Product Segments</h2>
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

                {/* Services Section */}
                <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
                  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="max-w-3xl mb-10 sm:mb-12">
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Services</span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Export and import solutions tailored for the paper and packaging industry</h2>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        We support clients with turnkey project delivery, specialized paper products, stationery, packaging essentials, and sourcing solutions for pulp and paper mill requirements.
                      </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
                            <FileText size={18} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900">Export</h3>
                            <p className="text-sm text-slate-500">Turnkey support for mills, paper products, and stationery</p>
                          </div>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-600">
                          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0" />Turnkey project solutions for Kraft Paper, Duplex Board, Tissue Paper, and Writing & Printing Paper plants, with capacities from 5 TPD to 100 TPD.</li>
                          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0" />A diverse range of paper products including Art Paper, Cast Coated Paper, specialty papers, White Lined Chip Board, and Kraft Paper.</li>
                          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0" />Stationery products such as composition books, subject books, counter books, filler papers, index cards, yellow pencils, eco-friendly pencils, crayons, and markers.</li>
                          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0" />Brown paper bags and thermal rolls for credit card terminals, gas stations, ATMs, and similar applications.</li>
                          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0" />Consultancy and chartered engineering services for the pulp, paper, and paperboard industries.</li>
                        </ul>
                      </div>

                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                            <Factory size={18} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900">Import</h3>
                            <p className="text-sm text-slate-500">Raw materials and machinery sourcing from global markets</p>
                          </div>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-600">
                          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />Waste paper grades including OCC, DSOCC, NDLKC, Mixed Waste, SWL, and other varieties of white paper.</li>
                          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />New and pre-owned pulp and paper mill machinery sourced from Europe, USA, and China.</li>
                          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />A wide range of paper and paperboard grades to suit diverse industrial needs.</li>
                        </ul>
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
                className="py-14 sm:py-16 bg-slate-50 min-h-[70vh]"
              >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
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
                      <div className="mb-16 max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Product Categories</h2>
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
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-3 tracking-tight">{activeCategory?.name}</h2>
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

            {/* ================= CONTACT DESK PAGE ================= */}
            {currentPage === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* <div className="bg-slate-50 border-b border-slate-200 py-16">
                  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block mb-2">Inquiry Desk</span>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Contact & Contracting</h1>
                    <p className="text-slate-600 max-w-xl text-sm leading-relaxed mt-3 sm:mt-4">
                      Submit precise structural wrapping or printing specs to our engineers to process customized material reels.
                    </p>
                  </div>
                </div> */}
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
