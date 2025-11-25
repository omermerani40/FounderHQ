import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const weeks = [
  {
    week: "Week 1",
    title: "Legal Foundation",
    items: ["Company Registration", "Shareholder Agreements", "IP Protection", "Banking Setup"],
    color: "bg-blue-500",
  },
  {
    week: "Week 2",
    title: "Brand Identity",
    items: ["Logo Design", "Visual Identity System", "Brand Guidelines", "Tone of Voice"],
    color: "bg-indigo-500",
  },
  {
    week: "Week 3",
    title: "Digital Presence",
    items: ["Website Development", "Social Media Setup", "Email Configuration", "SEO Foundation"],
    color: "bg-purple-500",
  },
  {
    week: "Week 4",
    title: "Launch Operations",
    items: ["Marketing Launch", "Bookkeeping Setup", "Go-to-Market Strategy", "First Customer"],
    color: "bg-accent",
  },
];

export default function Solution() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden" id="process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            One Partner. Complete Launch.
          </h2>
          <p className="text-lg text-blue-200">
            We've streamlined the entire startup process into a predictable 30-day sprint.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-900/50 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {weeks.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${week.color} flex items-center justify-center font-bold text-white shadow-lg`}>
                      {index + 1}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-blue-300">{week.week}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{week.title}</h3>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {week.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-blue-100">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-4 text-blue-700 w-8 h-8 -translate-y-1/2 z-20" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
