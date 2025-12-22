import { motion } from "framer-motion";
import { 
  Palette, 
  Monitor, 
  Share2, 
  Megaphone, 
  Scale, 
  Laptop,
  Bot,
  ArrowUpRight
} from "lucide-react";
import { Link } from "wouter";

const services = [
  { 
    icon: Scale, 
    title: "Legal & Compliance", 
    desc: "Contracts, terms, structuring, and regulatory compliance for Australian businesses.",
    href: "/services/legal-compliance",
    gradient: "from-blue-500 to-indigo-600"
  },
  { 
    icon: Palette, 
    title: "Brand Design & Strategy", 
    desc: "Logo, visual identity, brand voice, and market positioning that commands attention.",
    href: "/services/brand-strategy",
    gradient: "from-pink-500 to-rose-600"
  },
  { 
    icon: Monitor, 
    title: "Digital Presence", 
    desc: "High-converting websites, web apps, and a digital footprint that drives growth.",
    href: "/services/digital-presence",
    gradient: "from-cyan-500 to-blue-600"
  },
  { 
    icon: Megaphone, 
    title: "Digital Marketing", 
    desc: "SEO, PPC, email marketing, and growth campaigns that deliver real ROI.",
    href: "/services/digital-marketing",
    gradient: "from-orange-500 to-red-600"
  },
  { 
    icon: Share2, 
    title: "Social Media Management", 
    desc: "Content strategy, creation, scheduling, and community engagement that builds audiences.",
    href: "/services/social-media",
    gradient: "from-violet-500 to-purple-600"
  },
  { 
    icon: Laptop, 
    title: "IT & Tech Support", 
    desc: "Infrastructure setup, security, and ongoing technical assistance you can rely on.",
    href: "/services/it-support",
    gradient: "from-emerald-500 to-teal-600"
  },
  { 
    icon: Bot, 
    title: "Artificial Intelligence", 
    desc: "AI integration, automation workflows, and custom LLM solutions for the future.",
    href: "/services/artificial-intelligence",
    gradient: "from-amber-500 to-orange-600"
  },
];

export default function Services() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="services">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 bg-primary/10 text-primary font-semibold rounded-full text-sm">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
            Everything You Need.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Under One Roof.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stop coordinating between 5 different freelancers. We handle every aspect of your business launch with one dedicated team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link href={service.href}>
                <div className="group h-full p-8 rounded-3xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary group-hover:text-white mb-3 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground group-hover:text-blue-100 mb-6 leading-relaxed transition-colors duration-300">
                      {service.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-accent group-hover:text-white font-semibold transition-colors duration-300">
                      <span>Explore service</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <a 
              href="/#contact" 
              className="text-accent font-semibold hover:underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's talk about your project →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
