import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$4,999",
    desc: "Perfect for solopreneurs ready to professionalize.",
    features: [
      "Company Registration",
      "Logo & Basic Brand Kit",
      "5-Page Website",
      "Legal Starter Pack",
      "Basic Bookkeeping Setup"
    ],
    cta: "Start Launch",
    popular: false,
  },
  {
    name: "Growth",
    price: "$9,999",
    desc: "The complete package for funded startups.",
    features: [
      "Everything in Starter",
      "Full Brand Identity System",
      "Custom Web Application MVP",
      "Marketing Launch Campaign",
      "Shareholder Agreements",
      "3 Months Bookkeeping"
    ],
    cta: "Go Growth",
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom",
    desc: "Tailored solutions for complex ventures.",
    features: [
      "Everything in Growth",
      "Mobile App Development",
      "Advanced Tech Stack",
      "Fractional CFO/CTO",
      "International Structuring",
      "Dedicated Success Manager"
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Transparent, All-Inclusive Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Predictable pricing for every stage of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-accent shadow-2xl scale-105 z-10 bg-white' : 'border-gray-200 bg-secondary/20'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground text-sm">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-accent' : 'text-primary/50'}`} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-full py-6 font-bold ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
