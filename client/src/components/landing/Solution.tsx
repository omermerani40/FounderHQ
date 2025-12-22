import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const weeks = [
  {
    week: "Week 1",
    title: "Legal Foundation",
    items: ["Company Registration", "Shareholder Agreements", "IP Protection", "Banking Setup"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    week: "Week 2",
    title: "Brand Identity",
    items: ["Logo Design", "Visual Identity System", "Brand Guidelines", "Tone of Voice"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    week: "Week 3",
    title: "Digital Presence",
    items: ["Website Development", "Social Media Setup", "Email Configuration", "SEO Foundation"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    week: "Week 4",
    title: "Launch Operations",
    items: ["Marketing Launch", "Bookkeeping Setup", "Go-to-Market Strategy", "First Customer"],
    gradient: "from-accent to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const,
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.5, ease: "easeInOut" as const, delay: 0.3 },
  },
};

export default function Solution() {
  return (
    <section className="py-28 bg-primary text-primary-foreground overflow-hidden relative" id="process">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(255,85,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 bg-white/10 text-accent font-semibold rounded-full text-sm backdrop-blur-sm"
          >
            The Solution
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            One Partner.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Complete Launch.
            </span>
          </h2>
          <p className="text-xl text-blue-200 leading-relaxed">
            We've streamlined the entire startup process into a predictable 30-day sprint.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-accent -translate-y-1/2 z-0 origin-left rounded-full"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {weeks.map((week, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${week.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${week.gradient} flex items-center justify-center font-bold text-white text-xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">{week.week}</span>
                      <h3 className="text-xl font-bold text-white">{week.title}</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 flex-grow relative z-10">
                    {week.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-sm text-blue-100"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        </motion.div>
                        <span className="group-hover:text-white transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-200 text-lg">
            From chaos to launch in just{" "}
            <motion.span 
              className="text-accent font-bold text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              30 days
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
