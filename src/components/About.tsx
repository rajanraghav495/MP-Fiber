/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, ShieldCheck, Zap, Leaf } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Award className="text-amber-500" />,
      title: "Quality Excellence",
      description: "Our products undergo rigorous testing to ensure they meet international quality standards."
    },
    {
      icon: <ShieldCheck className="text-blue-500" />,
      title: "Innovation Driven",
      description: "Constantly upgrading our machinery and processes to stay ahead in the industry."
    },
    {
      icon: <Leaf className="text-emerald-500" />,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and recycling in all our manufacturing processes."
    },
    {
      icon: <Zap className="text-purple-500" />,
      title: "Customer Support",
      description: "Dedicated to providing exceptional service and timely delivery to our global partners."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Pioneering Industrial Composites
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-blue-600 mx-auto rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              M.P. Fiber & Paper Mills Limited has established itself as the gold standard in industrial manufacturing. Our commitment to precision engineering and sustainable growth defines every product we create.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We specialize in high-performance composite materials and industrial-grade paper products. Our state-of-the-art facilities and commitment to quality have earned us a global reputation for excellence.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-blue-600 text-3xl font-extrabold mb-1">98%</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Client Success Rate</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-blue-600 text-3xl font-extrabold mb-1">15+</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Years Service</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-blue-50 rounded-3xl translate-x-6 translate-y-6 absolute inset-0 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Industrial Machinery"
              className="w-full aspect-square object-cover rounded-3xl shadow-xl border border-white"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-slate-200 transition-all hover:border-blue-600/20 hover:shadow-xl group"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center mb-6 shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
