import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@assets/generated_images/chaos_transforming_into_order_illustration_for_hero_section.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 bg-accent/10 text-accent font-semibold rounded-full text-sm">
              Launch Your Business in 30 Days
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary leading-[1.1] mb-6">
              Stop Juggling Vendors. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Start Building.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Australia's first all-in-one agency for founders. We handle brand, legal, tech, and finance so you can focus on growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 h-14 text-lg shadow-lg shadow-accent/25">
                Get Your 30-Day Launch Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-2 hover:bg-muted/50">
                <PlayCircle className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-200 flex items-center justify-center overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" className="w-full h-full" />
                  </div>
                ))}
              </div>
              <div>
                <span className="font-bold text-primary">100+</span> Founders Launched
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-[2rem] transform rotate-3 scale-105 -z-10 blur-2xl" />
            <img 
              src={heroImage} 
              alt="Chaos to Order Illustration" 
              className="w-full h-auto rounded-[2rem] shadow-2xl border border-white/20"
            />
            
            {/* Floating Badge 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <div className="text-sm font-bold text-primary">ACN Registered</div>
                <div className="text-xs text-muted-foreground">Just now</div>
              </div>
            </motion.div>

             {/* Floating Badge 2 */}
             <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-6 -right-6 md:top-8 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
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
