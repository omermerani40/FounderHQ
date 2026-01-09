import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Search, Megaphone, Mail } from "lucide-react";
import ServicePackages from "@/components/ServicePackages";

export default function DigitalMarketing() {
  const packages = [
    {
      name: "Launch Boost",
      features: ["SEO Foundation Audit", "Google My Business", "2 Blog Posts/Month", "Basic Analytics", "Monthly Reporting"],
    },
    {
      name: "Growth Engine",
      popular: true,
      features: ["Everything in Launch", "Paid Ads Management", "4 Blog Posts/Month", "Email Automation", "Conversion Tracking", "A/B Testing", "Bi-Weekly Strategy Calls"],
    },
    {
      name: "Scale Partner",
      features: ["Everything in Growth", "Multi-Channel Campaigns", "Content Production Team", "Advanced Attribution", "CRO Optimization", "Dedicated Strategist", "Weekly Reporting"],
    }
  ];

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
                Growth Marketing
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Reach. Convert. <br />
                <span className="text-accent">Grow.</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                Data-driven marketing strategies that connect you with the right customers at the right time.
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
              Marketing Channels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "SEO & Content", desc: "Organic traffic through keyword strategy, content marketing, and technical SEO." },
              { icon: Megaphone, title: "Paid Advertising", desc: "Google Ads, Meta Ads, and LinkedIn campaigns with ROI tracking." },
              { icon: Mail, title: "Email Marketing", desc: "Automated sequences, newsletters, and lead nurturing funnels." }
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

      <ServicePackages title="Marketing Packages" packages={packages} />

      <Footer />
    </div>
  );
}
