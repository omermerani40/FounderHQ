import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Share2, Users } from "lucide-react";
import ServicePackages from "@/components/ServicePackages";

export default function SocialMedia() {
  const packages = [
    {
      name: "Starter Social",
      features: ["2 Platforms", "12 Posts/Month", "Basic Graphics", "Hashtag Strategy", "Monthly Analytics"],
    },
    {
      name: "Growth Social",
      popular: true,
      features: ["Everything in Starter", "4 Platforms", "20 Posts/Month", "Video Content (4/mo)", "Stories & Reels", "Community Management", "Influencer Outreach"],
    },
    {
      name: "Enterprise Social",
      features: ["Everything in Growth", "Unlimited Platforms", "Daily Posting", "UGC Campaigns", "Paid Social Management", "Crisis Management", "Dedicated Manager"],
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
                Social Media
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Build Your <br />
                <span className="text-accent">Community.</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                Strategic social media management that grows your following and turns followers into loyal customers.
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
              Our Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: "Content Strategy", desc: "Planned content calendars aligned with your business goals and audience interests." },
              { icon: Share2, title: "Content Creation", desc: "Eye-catching graphics, engaging copy, and video content that stops the scroll." },
              { icon: Users, title: "Community Management", desc: "Active engagement, comment responses, and community building." }
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

      <ServicePackages title="Social Packages" packages={packages} />

      <Footer />
    </div>
  );
}
