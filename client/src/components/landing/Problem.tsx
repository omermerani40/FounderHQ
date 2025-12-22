import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Clock, DollarSign, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: Layers,
    value: "5-8",
    label: "Vendors to juggle",
    desc: "Design, dev, legal, finance...",
    color: "text-blue-600",
    bg: "bg-blue-50",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: TrendingDown,
    value: "60%",
    label: "Face cash flow issues",
    desc: "Due to uncoordinated spending",
    color: "text-red-600",
    bg: "bg-red-50",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: DollarSign,
    value: "4x",
    label: "Cost Overruns",
    desc: "$2k quotes turning into $8k",
    color: "text-orange-600",
    bg: "bg-orange-50",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: Clock,
    value: "3-6mo",
    label: "Wasted Timeline",
    desc: "Zero coordination delays launch",
    color: "text-purple-600",
    bg: "bg-purple-50",
    gradient: "from-purple-500 to-violet-600",
  },
];

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (inView) {
      const numericPart = value.replace(/[^0-9]/g, '');
      const suffix = value.replace(/[0-9]/g, '');
      
      if (numericPart) {
        const target = parseInt(numericPart);
        const duration = 1500;
        const steps = 30;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current) + suffix);
          }
        }, duration / steps);
        
        return () => clearInterval(timer);
      } else {
        setDisplayValue(value);
      }
    }
  }, [inView, value]);
  
  return <span>{displayValue}</span>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
            className="inline-block px-4 py-1.5 mb-6 bg-red-100 text-red-600 font-semibold rounded-full text-sm"
          >
            The Problem
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            The $20 Billion{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Fragmentation Problem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founders start with a vision, but get stuck managing a chaotic web of freelancers and agencies.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-8 flex flex-col items-center text-center h-full relative">
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <motion.div 
                    className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center mb-6 ${stat.color} relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <stat.icon className="w-8 h-8" />
                  </motion.div>
                  
                  <div className="text-5xl font-bold text-primary mb-3 relative z-10">
                    <AnimatedCounter value={stat.value} inView={isInView} />
                  </div>
                  <div className="font-bold text-lg mb-2 text-primary/80 relative z-10">{stat.label}</div>
                  <p className="text-muted-foreground text-sm relative z-10">{stat.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-orange-400" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center pl-4">
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <svg className="w-10 h-10 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="italic text-xl text-muted-foreground leading-relaxed">
                  I spent more time chasing my web developer and accountant to talk to each other than I did building my product. It was a nightmare.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                  alt="Founder" 
                  className="w-16 h-16 rounded-full bg-gray-100 border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <div className="font-bold text-primary text-lg">Sarah Jenkins</div>
                  <div className="text-sm text-muted-foreground">Founder, EcoStyle</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
