import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";

interface Package {
  name: string;
  features: string[];
  popular?: boolean;
}

interface ServicePackagesProps {
  title: string;
  packages: Package[];
}

export default function ServicePackages({ title, packages }: ServicePackagesProps) {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <section id="packages" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            Every business is unique. Let's discuss your needs and create a custom solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
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
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-primary py-3 border-b border-gray-100">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Contact us for pricing</span>
                </div>
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
                onClick={scrollToContact}
                className={`w-full rounded-full py-6 font-bold ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80 text-primary'}`}
              >
                Book Discovery Call
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which option fits your needs?
          </p>
          <Button 
            variant="outline" 
            className="rounded-full px-8"
            onClick={scrollToContact}
          >
            <Phone className="w-4 h-4 mr-2" />
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
