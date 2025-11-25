import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Clock, DollarSign, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: Layers,
    value: "5-8",
    label: "Vendors to juggle",
    desc: "Design, dev, legal, finance...",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: TrendingDown,
    value: "60%",
    label: "Face cash flow issues",
    desc: "Due to uncoordinated spending",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: DollarSign,
    value: "4x",
    label: "Cost Overruns",
    desc: "$2k quotes turning into $8k",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Clock,
    value: "3-6mo",
    label: "Wasted Timeline",
    desc: "Zero coordination delays launch",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            The $20 Billion Fragmentation Problem
          </h2>
          <p className="text-lg text-muted-foreground">
            Founders start with a vision, but get stuck managing a chaotic web of freelancers and agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-6 ${stat.color}`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-bold text-lg mb-2">{stat.label}</div>
                  <p className="text-muted-foreground text-sm">{stat.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 italic text-xl text-muted-foreground text-center md:text-left">
              "I spent more time chasing my web developer and accountant to talk to each other than I did building my product. It was a nightmare."
            </div>
            <div className="flex items-center gap-4">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                alt="Founder" 
                className="w-14 h-14 rounded-full bg-gray-100"
              />
              <div>
                <div className="font-bold text-primary">Sarah Jenkins</div>
                <div className="text-sm text-muted-foreground">Founder, EcoStyle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
