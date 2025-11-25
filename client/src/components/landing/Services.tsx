import { motion } from "framer-motion";
import { 
  Palette, 
  Layout, 
  Code, 
  Smartphone, 
  Share2, 
  Megaphone, 
  Scale, 
  Calculator, 
  Building2 
} from "lucide-react";

const services = [
  { icon: Palette, title: "Brand Strategy", desc: "Logo, visual identity, and brand voice." },
  { icon: Layout, title: "Graphic Design", desc: "Marketing materials, decks, and assets." },
  { icon: Code, title: "Web Development", desc: "High-converting, responsive websites." },
  { icon: Smartphone, title: "App Development", desc: "MVP prototyping and mobile apps." },
  { icon: Share2, title: "Social Media", desc: "Content strategy and profile management." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC, and growth campaigns." },
  { icon: Scale, title: "Legal Docs", desc: "Contracts, terms, and compliance." },
  { icon: Calculator, title: "Bookkeeping", desc: "Financial setup and tax planning." },
  { icon: Building2, title: "Registration", desc: "Company formation and structuring." },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.desc}</p>
              <a href="#" className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-1">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
