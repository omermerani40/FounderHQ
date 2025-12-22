import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Palette, Target, Layers } from "lucide-react";
// Placeholder import - will be replaced by tool
import heroImage from "@assets/generated_images/abstract_creative_design_studio_hero_background.png"; 

export default function BrandStrategy() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 bg-accent/20 text-accent font-semibold rounded-full text-sm">
                Strategic Design
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Build a Brand That <br />
                <span className="text-accent">Demands Attention.</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                More than just a logo. We craft complete identity systems that position you as the market leader from Day 1.
              </p>
              <Button 
                size="lg" 
                className="bg-accent text-primary hover:bg-accent/90 rounded-full px-8 h-12 font-bold"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Packages
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
               {/* This will be replaced with the generated image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-blue-900/50 flex items-center justify-center">
                 <img src={heroImage} alt="Brand Strategy Hero" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground">
              We move from abstract strategy to concrete visual assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "1. Strategy & Positioning",
                desc: "We analyze your market, competitors, and audience to define your 'Onlyness' factor."
              },
              {
                icon: Palette,
                title: "2. Visual Identity",
                desc: "We explore creative directions, refining color palettes, typography, and logo marks."
              },
              {
                icon: Layers,
                title: "3. Brand System",
                desc: "We build a comprehensive design system so your brand looks consistent everywhere."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-secondary/30 rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Brand Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the level of depth your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Identity Starter",
                price: "$2,499",
                features: ["Primary Logo Design", "Color Palette", "Typography Selection", "Basic Usage Guidelines", "Social Media Avatars"],
                cta: "Get Started"
              },
              {
                name: "Full Brand Suite",
                price: "$4,999",
                popular: true,
                features: ["Everything in Starter", "Secondary Logos & Icons", "Pattern & Texture Library", "Social Media Templates", "Stationery Design", "Comprehensive Brand Book"],
                cta: "Most Popular"
              },
              {
                name: "Enterprise System",
                price: "Custom",
                features: ["Everything in Suite", "Sub-brand Architecture", "UI/UX Design System", "Motion Graphics/Intro", "Marketing Collateral Kit", "Brand Strategy Workshop"],
                cta: "Contact Us"
              }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border flex flex-col bg-white ${pkg.popular ? 'border-accent shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                    Recommended
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 shrink-0 ${pkg.popular ? 'text-accent' : 'text-primary/50'}`} />
                      <span className="text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full rounded-full py-6 font-bold ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80 text-primary'}`}
                >
                  {pkg.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
