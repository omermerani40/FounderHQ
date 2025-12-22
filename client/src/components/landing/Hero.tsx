import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@assets/generated_images/chaos_transforming_into_order_illustration_for_hero_section.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 bg-accent/10 text-accent font-semibold rounded-full text-sm"
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block w-2 h-2 bg-accent rounded-full mr-2"
              />
              Launch Your Business in 30 Days
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-heading font-bold text-primary leading-[1.1] mb-6"
            >
              Stop Juggling Vendors. <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Start Building.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Australia's first all-in-one agency for founders. We handle brand, legal, tech, and finance so you can focus on growth.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 h-14 text-lg shadow-lg shadow-accent/25 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-get-launch-plan"
                >
                  Get Your 30-Day Launch Plan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 h-14 text-lg border-2 hover:bg-muted/50 group"
                  onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-see-how-it-works"
                >
                  <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-background bg-gray-200 flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" className="w-full h-full" />
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="font-bold text-primary">100+</span> Founders Launched
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-1000"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] -z-10"
              animate={{ 
                rotate: [3, -3, 3],
                scale: [1.05, 1.08, 1.05],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "blur(40px)" }}
            />
            <motion.img 
              src={heroImage} 
              alt="Chaos to Order Illustration" 
              className="w-full h-auto rounded-[2rem] shadow-2xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
            
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-10"
            >
              <motion.div 
                animate={floatingAnimation}
                className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"
              >
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>
              <div>
                <div className="text-sm font-bold text-primary">ACN Registered</div>
                <div className="text-xs text-muted-foreground">Just now</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              className="absolute -top-6 -right-6 md:top-8 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-10"
            >
              <motion.div 
                animate={{ ...floatingAnimation, y: [10, -10, 10] }}
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <div>
                <div className="text-sm font-bold text-primary">Brand Launched</div>
                <div className="text-xs text-muted-foreground">2 days ago</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
