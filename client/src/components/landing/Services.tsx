import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Palette, 
  Globe, 
  Megaphone, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "foundation",
    label: "Foundation",
    icon: Building2,
    title: "Foundation Services",
    description: "The essential legal and operational foundation every business needs.",
    items: [
      "Business Registration (ABN/ACN)",
      "Legal Documentation (T&Cs, Privacy Policy)",
      "Bookkeeping Setup (Xero integration)",
      "Compliance & Tax Guidance",
      "Business Structure Advisory",
      "ASIC & ATO Registration"
    ]
  },
  {
    id: "brand",
    label: "Brand & Design",
    icon: Palette,
    title: "Brand Identity & Design",
    description: "Craft a world-class brand that builds trust and stands out in the market.",
    items: [
      "Brand Strategy Workshop",
      "Logo & Visual Identity System",
      "Brand Guidelines & Typography",
      "Pitch Deck Design",
      "Marketing Collateral Templates",
      "Social Media Assets"
    ]
  },
  {
    id: "digital",
    label: "Digital Presence",
    icon: Globe,
    title: "Web & Digital Presence",
    description: "High-converting digital touchpoints that turn visitors into customers.",
    items: [
      "Custom Website Design & Dev",
      "Mobile Responsive Layouts",
      "SEO Technical Foundation",
      "Domain & Hosting Setup",
      "Professional Email Configuration",
      "Analytics & Tracking Setup"
    ]
  },
  {
    id: "marketing",
    label: "Marketing & Growth",
    icon: Megaphone,
    title: "Marketing & Growth",
    description: "Launch strategies to get your first 100 customers and beyond.",
    items: [
      "Go-to-Market Strategy",
      "Social Media Profile Setup",
      "Content Content Strategy",
      "Paid Ads Account Setup",
      "Email Marketing Templates",
      "Launch Campaign Planning"
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("foundation");

  return (
    <section className="py-24 bg-secondary/20" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive services designed specifically for Australian startups and new founders.
          </p>
        </div>

        {/* Custom Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border",
                activeTab === category.id
                  ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                  : "bg-white text-muted-foreground border-gray-200 hover:border-blue-200 hover:text-primary"
              )}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {categories.map((category) => (
              activeTab === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Description & CTA */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <category.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {category.description}
                      </p>
                      <Button className="w-fit rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8">
                        See Pricing <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    {/* Right Column: Checklist Grid */}
                    <div className="lg:col-span-7 bg-gray-50/50 rounded-2xl p-6 md:p-8 border border-gray-100/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item, index) => (
                          <div 
                            key={index} 
                            className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm"
                          >
                            <div className="mt-0.5 bg-green-100 text-green-600 rounded-full p-1 shrink-0">
                              <CheckCircle2 className="w-3 h-3" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
