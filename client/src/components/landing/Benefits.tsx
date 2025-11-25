import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Integrated Excellence",
    desc: "Your accountant talks to your lawyer who knows your brand. No silos, just seamless execution.",
    points: ["Unified strategy", "Cross-functional teams", "Holistic view"],
  },
  {
    title: "Aligned Incentives",
    desc: "We succeed when you succeed. We build long-term partnerships, not transactional gigs.",
    points: ["Growth focused", "Ongoing support", "Shared goals"],
  },
  {
    title: "Predictable Pricing",
    desc: "No cost shocks. One quote, one invoice, one partner. Save 30% compared to hiring separately.",
    points: ["Flat-rate packages", "No hidden fees", "Transparent scope"],
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Why Choose Us Over Fragmentation?
          </h2>
          <p className="text-lg text-muted-foreground">
            The old way of building a business is broken. We fixed it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {benefit.desc}
              </p>
              <ul className="space-y-2">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-primary/80">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
