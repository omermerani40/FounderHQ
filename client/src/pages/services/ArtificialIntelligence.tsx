import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Check, Bot, Zap, Brain } from "lucide-react";

export default function ArtificialIntelligence() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 bg-accent/20 text-accent font-semibold rounded-full text-sm">
                AI Integration
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Supercharge Your Business <br />
                <span className="text-accent">with AI.</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                From chatbots to workflow automation, we help you leverage AI to work smarter, serve customers better, and scale faster.
              </p>
              <Button 
                size="lg" 
                className="bg-accent text-primary hover:bg-accent/90 rounded-full px-8 h-12 font-bold"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Packages
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              AI Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: "AI Assistants", desc: "Customer service chatbots, internal knowledge bases, and virtual assistants." },
              { icon: Zap, title: "Workflow Automation", desc: "Automate repetitive tasks, data processing, and business workflows." },
              { icon: Brain, title: "Custom AI Solutions", desc: "Tailored LLM integrations, predictive analytics, and AI-powered features." }
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

      <section id="packages" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              AI Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "AI Starter",
                price: "$2,999",
                features: ["AI Chatbot Setup", "FAQ Training", "Website Integration", "Basic Analytics", "Email Notifications"],
                cta: "Get Started"
              },
              {
                name: "AI Pro",
                price: "$7,999",
                popular: true,
                features: ["Everything in Starter", "Custom Knowledge Base", "Multi-Channel Deploy", "Workflow Automations (5)", "CRM Integration", "Advanced Analytics", "Monthly Optimization"],
                cta: "Most Popular"
              },
              {
                name: "AI Enterprise",
                price: "Custom",
                features: ["Everything in Pro", "Custom LLM Fine-Tuning", "API Development", "Predictive Analytics", "Unlimited Automations", "Dedicated AI Engineer", "White-Label Solutions"],
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
                <Button className={`w-full rounded-full py-6 font-bold ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80 text-primary'}`}>
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
