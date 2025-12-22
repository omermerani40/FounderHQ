import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$4,999",
    desc: "Perfect for solopreneurs ready to professionalize.",
    features: [
      "Company Registration",
      "Logo & Basic Brand Kit",
      "5-Page Website",
      "Legal Starter Pack",
      "Basic Bookkeeping Setup"
    ],
    cta: "Start Launch",
    popular: false,
    gradient: "from-slate-500 to-slate-600",
  },
  {
    name: "Growth",
    price: "$9,999",
    desc: "The complete package for funded startups.",
    features: [
      "Everything in Starter",
      "Full Brand Identity System",
      "Custom Web Application MVP",
      "Marketing Launch Campaign",
      "Shareholder Agreements",
      "3 Months Bookkeeping"
    ],
    cta: "Go Growth",
    popular: true,
    gradient: "from-accent to-orange-500",
  },
  {
    name: "Premium",
    price: "Custom",
    desc: "Tailored solutions for complex ventures.",
    features: [
      "Everything in Growth",
      "Mobile App Development",
      "Advanced Tech Stack",
      "Fractional CFO/CTO",
      "International Structuring",
      "Dedicated Success Manager"
    ],
    cta: "Contact Us",
    popular: false,
    gradient: "from-purple-500 to-indigo-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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

export default function Pricing() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden" id="pricing">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
            className="inline-block px-4 py-1.5 mb-6 bg-primary/10 text-primary font-semibold rounded-full text-sm"
          >
            Pricing
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Transparent,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              All-Inclusive
            </span>{" "}
            Packages
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Predictable pricing for every stage of your journey. No hidden fees, ever.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: plan.popular ? -12 : -8, transition: { duration: 0.3 } }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <div 
                className={`relative p-8 rounded-3xl border h-full flex flex-col overflow-hidden ${
                  plan.popular 
                    ? 'border-accent/50 shadow-2xl shadow-accent/20 bg-white' 
                    : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-accent/5 to-orange-500/5"
                      animate={{ 
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </motion.div>
                  </>
                )}
                
                <div className="mb-8 relative z-10">
                  <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                  <motion.div 
                    className="text-5xl font-bold text-primary mb-3"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {plan.price}
                  </motion.div>
                  <p className="text-muted-foreground">{plan.desc}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-accent' : 'text-primary/50'}`} />
                      </motion.div>
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative z-10"
                >
                  <Button 
                    className={`w-full rounded-full py-6 font-bold text-lg transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-white shadow-lg shadow-accent/25' 
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-muted-foreground"
        >
          All packages include a 30-day money-back guarantee.{" "}
          <a href="/#faq" className="text-accent font-semibold hover:underline">View FAQ →</a>
        </motion.p>
      </div>
    </section>
  );
}
