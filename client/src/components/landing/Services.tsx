import { motion } from "framer-motion";
import { 
  Palette, 
  Monitor, 
  Share2, 
  Megaphone, 
  Scale, 
  Laptop,
  Bot
} from "lucide-react";
import { Link } from "wouter";

const services = [
  { icon: Scale, title: "Legal & Compliance", desc: "Contracts, terms, structuring, and regulatory compliance.", href: "#" },
  { icon: Palette, title: "Brand Design & Strategy", desc: "Logo, visual identity, brand voice, and market positioning.", href: "/services/brand-strategy" },
  { icon: Monitor, title: "Digital Presence", desc: "High-converting websites, web apps, and digital footprint.", href: "#" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC, email marketing, and growth campaigns.", href: "#" },
  { icon: Share2, title: "Social Media Management", desc: "Content strategy, creation, scheduling, and community engagement.", href: "#" },
  { icon: Laptop, title: "IT & Tech Support", desc: "Infrastructure setup, security, and ongoing technical assistance.", href: "#" },
  { icon: Bot, title: "Artificial Intelligence", desc: "AI integration, automation workflows, and custom LLM solutions.", href: "#" },
];

export default function Services() {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Everything You Need. Under One Roof.
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop coordinating between 5 different freelancers. We handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.desc}</p>
              
              {service.href !== "#" ? (
                <Link href={service.href}>
                  <a className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-1">
                    Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </Link>
              ) : (
                <span className="text-sm font-semibold text-muted-foreground/50 cursor-not-allowed flex items-center gap-1">
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
