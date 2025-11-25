import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from hiring separate vendors?",
    a: "When you hire separate vendors, YOU are the project manager. You have to handle communication gaps, conflicting timelines, and blame games. With us, you have one partner, one integrated timeline, and one cohesive output. It's faster, cheaper, and higher quality."
  },
  {
    q: "What if I only need some services?",
    a: "While our value shines in the full package, we offer modular sprints for specific needs. You can start with just Branding & Web, or just Legal & Finance. Contact us for a custom quote."
  },
  {
    q: "Can you really deliver everything in 30 days?",
    a: "Yes. We use a sprint-based methodology. By standardizing the foundational elements (like legal structures and core tech stacks) while customizing the creative layers (brand, design), we eliminate wasted time. Note: Complex custom app development may extend beyond the 30-day launch window."
  },
  {
    q: "What happens after launch?",
    a: "We don't just leave you hanging. We offer 'Growth Retainers' to handle your ongoing marketing, bookkeeping, and tech support needs at a fraction of the cost of hiring full-time staff."
  },
  {
    q: "How do you handle cash flow concerns?",
    a: "We offer split payment options for our packages to help startups manage cash flow. Typically 50% upfront and 50% upon launch."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-secondary/30" id="faq">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 border border-gray-100 rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
