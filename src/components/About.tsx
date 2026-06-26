import { motion } from "motion/react";
import { Award, ShieldCheck, Zap, Leaf, Factory, Globe2, Package2, BookOpen } from "lucide-react";
import AchievementsImage from "../../Images/achievements-image.png";

export default function About() {
  const capabilities = [
    {
      icon: <Factory className="text-blue-600" />,
      title: "Turnkey Export of Paper & Board Mill Projects",
      description:
        "Since 1978, we have supported paper and board mills across India and abroad with specialized consulting and turnkey project execution. Our work includes new installations, upgrades, and technology modernization for improved productivity and quality."
    },
    {
      icon: <Globe2 className="text-emerald-600" />,
      title: "Global Export Reach",
      description:
        "We serve a diverse clientele in East Africa, West Africa, South Africa, Bangladesh, the USA, and other international markets, backed by strong export credentials and reliable delivery."
    },
    {
      icon: <Package2 className="text-amber-600" />,
      title: "Machinery & Packaging Solutions",
      description:
        "We export fully automatic and semi-automatic exercise book making machines, corrugated carton plants, and a wide range of packaging equipment designed to meet international production standards."
    },
    {
      icon: <BookOpen className="text-purple-600" />,
      title: "Paper, Board & Stationery Portfolio",
      description:
        "Our product line includes Art Paper, Art Card, Manila Paper and Board, Cast Coated Board, composition books, counter books, filler paper, index cards, yellow pencils, eco-friendly pencils, crayons, markers, brown paper bags, and thermal rolls."
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
      title: "Technology-Driven Growth",
      description: "We collaborate with leading machinery manufacturers from Japan and Europe to introduce advanced waste paper pulping and screening technology."
    },
    {
      icon: <Leaf className="text-emerald-500" />,
      title: "Sustainable Raw Materials",
      description: "In addition to export operations, we import waste paper and paper from the USA and East Africa to support sustainable manufacturing."
    },
    {
      icon: <Zap className="text-purple-500" />,
      title: "Complete Turnkey Support",
      description: "Our experienced team offers end-to-end solutions backed by technical know-how for a wide range of paper and board grades."
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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5">
            A trusted global exporter in paper, board, and packaging
          </h2>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed">
            We combine deep industry expertise, export credibility, and turnkey project experience to deliver high-quality solutions across paper mills, packaging equipment, and stationery products.
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
