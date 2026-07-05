import { motion } from "motion/react";
import { Award, ShieldCheck, Zap, Leaf, Factory, Globe2, Package2, BookOpen, Badge, CheckCircle } from "lucide-react";
import AchievementsImage from "../../Images/achievements-image.png";
import MSMECertificate from "../../Images/Udyam_CERTIFICATE-1.png";

export default function About() {
  const capabilities = [
    {
      icon: <Factory className="text-blue-600" />,
      title: "Global Sourcing & Trade Support",
      description:
        "Since 1978, we have supported buyers across India and abroad with sourcing, export coordination, and trade solutions for machinery, paper, board, packaging, and stationery products."
    },
    {
      icon: <Globe2 className="text-emerald-600" />,
      title: "Global Export Reach",
      description:
        "We serve clients in East Africa, West Africa, South Africa, Bangladesh, the USA, and other international markets with dependable export support and quality-focused supply."
    },
    {
      icon: <Package2 className="text-amber-600" />,
      title: "Machinery & Packaging Supply",
      description:
        "We export fully automatic and semi-automatic exercise book making machines, corrugated carton plants, and a wide range of packaging equipment designed to meet international production standards."
    },
    {
      icon: <BookOpen className="text-purple-600" />,
      title: "Paper, Board & Stationery Portfolio",
      description:
        "Our portfolio includes Art Paper, Art Card, Manila Paper and Board, Cast Coated Board, composition books, counter books, filler paper, index cards, yellow pencils, eco-friendly pencils, crayons, brown paper bags, and thermal rolls."
    }
  ];

  const highlights = [
    {
      icon: <Award className="text-amber-500" />,
      title: "Recognized Excellence",
      description: "We are a Government-Recognized Star Export House, awarded by the Ministry of Commerce & Industry, DGFT, Government of India."
    },
    {
      icon: <ShieldCheck className="text-blue-500" />,
      title: "Reliable Trade Partnerships",
      description: "We work with established mills, suppliers, and logistics partners to source advanced paper, board, and packaging materials for international buyers."
    },
    {
      icon: <Leaf className="text-emerald-500" />,
      title: "Responsible Sourcing",
      description: "In addition to export operations, we source and trade paper and board materials from trusted global partners with a focus on sustainability and consistency."
    },
    {
      icon: <Zap className="text-purple-500" />,
      title: "Export Coordination & Support",
      description: "Our experienced team offers end-to-end export support backed by technical know-how, market understanding, and customer-focused service."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 sm:mb-5">
            A trusted global exporter in paper, board, and packaging
          </h2>
          <p className="max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
            We combine deep industry expertise, export credibility, and reliable sourcing experience to deliver high-quality trading and export solutions across paper, board, packaging equipment, and stationery products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 lg:p-12 shadow-sm mb-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-center">
            <div className="w-full max-w-[600px]">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Government-Recognized Star Export House</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are proud recipients of the Star Export House Certificate awarded by the Ministry of Commerce & Industry, Directorate General of Foreign Trade (DGFT), Government of India. This recognition reflects our sustained export performance and reliability in international trade.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we serve a diverse global clientele across <b>East Africa, West Africa, South Africa, Bangladesh, and the USA</b> among other regions.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <img
                  src={AchievementsImage}
                  alt="Company achievements"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 md:p-10 lg:p-12 shadow-sm mb-12 min-h-[420px] lg:min-h-[460px]"
        >
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-stretch">
            <div className="w-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Government-Recognized MSME Enterprise</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                We are a proud Government-Recognized Micro, Small & Medium Enterprise (MSME), reflecting our credibility and contribution to India’s growing business ecosystem.
              </p>

              <div className="space-y-3 mb-6 pt-3">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Official Recognition</h4>
                    <p className="text-sm text-slate-600">Registered under the MSME framework and supported by government-led initiatives for small and medium enterprises.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Business Credibility</h4>
                    <p className="text-sm text-slate-600">Our MSME status reinforces our reliability as a trusted partner in domestic and international trade.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-500 italic">
                This recognition strengthens our position as a government-backed enterprise in the global supply chain.
              </p>
            </div>

            <div className="flex justify-center h-full">
              <div className="rounded-2xl border border-emerald-200 bg-white shadow-md flex items-center justify-center">
                <img
                  src={MSMECertificate}
                  alt="MSME Certificate"
                  className="w-auto h-auto max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] max-h-[420px] object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-5">Product Categories</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />Paper and board grades including Art Paper, Art Card, Manila Paper and Board, and Cast Coated Board.</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />Stationery solutions such as composition books, subject books, counter books, filler papers, and index cards.</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />Writing and drawing essentials including yellow pencils, eco-friendly pencils, crayons, and markers.</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />Packaging essentials including brown paper bags and thermal rolls for terminals, gas stations, and ATM machines.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-5">Why We Stand Out</h3>
            <div className="grid gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
