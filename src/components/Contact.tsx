/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

type ContactProps = {
  prefilledSubject?: string;
};

export default function Contact({ prefilledSubject = "" }: ContactProps) {
  const [subject="hgsdvcjsdvjb", setSubject] = useState(prefilledSubject);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    if (prefilledSubject) {
      setSubject(prefilledSubject);
    }
  }, [prefilledSubject]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject,
          message: formData.message
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Unable to submit your inquiry right now.");
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", message: "" });
        setSubject("");
      }, 4000);
    } catch (error) {
      setSubmitError("Unable to submit your inquiry right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 sm:mb-8">Connect With Us</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-12 max-w-md font-medium">
              Have a question about our industrial solutions or want to discuss a large-scale contract partnership? Our engineering team is ready to assist.
            </p>

            <div className="space-y-8 mt-12">
              <a
                href="https://www.google.com/maps/place/MPFIBERS+LLC/@19.1057205,72.8461116,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9c7ff71ffc5:0xcaa1b1438128864b!8m2!3d19.1057205!4d72.8461116!16s%2Fg%2F11crzszdnt?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-6 rounded-2xl transition-colors hover:bg-slate-50/80"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Regional Headquarters</h4>
                  <p className="text-slate-600 text-sm">F/705, Zee Corporate Park, CTS Zee Shaan, M.G. Road, Vile Parle East, Mumbai 400057, India.</p>
                </div>
              </a>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Direct Line</h4>
                  <p className="text-slate-600 text-sm">+91 22 66964302 | +91 22 67983728</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Official Inquiry</h4>
                  <p className="text-slate-600 text-sm">info@mpfiber.com | mpfiber53@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-8 text-center z-10"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 border border-emerald-200">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Inquiry Submitted</h3>
                <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
                  Thank you for contacting MP Fiber & Paper Mills Limited. Our technical team will review your specifications and contact you shortly.
                </p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Requirement Subject</label>
                <input 
                  type="text" 
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Industrial Specification Inquiry"
                  className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message Detail</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your technical requirements..."
                  className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none text-sm font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 text-white py-5 rounded-xl font-bold shadow-xl shadow-blue-600/20 hover:translate-y-[-2px] transition-all uppercase tracking-widest text-xs"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                <Send size={18} />
              </button>
              {submitError ? (
                <p className="text-sm text-red-600 text-center">{submitError}</p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
