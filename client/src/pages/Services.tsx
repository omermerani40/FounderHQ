import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Link, useLocation } from "wouter";
import { servicesData } from "@/data/pageData";

export default function ServicesPage() {
  const [, navigate] = useLocation();

  const handleScheduleConsultation = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive business solutions tailored to help Australian founders and enterprises scale, innovate, and succeed in today's competitive digital landscape.
          </p>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Link key={service.id} href={service.href}>
                <div className="bg-card border rounded-lg p-8 h-full hover:shadow-xl transition-all hover:scale-105 hover:border-primary cursor-pointer group flex flex-col">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="mt-4">
                    <span className="inline-block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition font-semibold group-hover:bg-accent">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Service Spotlight */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t">
          <h2 className="text-4xl font-bold mb-12">Integrated Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose FounderHQ?</h3>
              <ul className="space-y-4">
                {[
                  "All-in-one solution: No need to juggle multiple vendors",
                  "Integrated strategy: Services work together seamlessly",
                  "Proven results: 500+ successful client partnerships",
                  "Expert team: Industry veterans with 200+ years combined experience",
                  "Flexible engagement: Customize services to your needs",
                  "Local expertise: Deep understanding of Australian market",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold flex-shrink-0">✓</span>
                    <p className="text-lg text-muted-foreground">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12">
              <h4 className="text-2xl font-bold mb-8">Our Service Ecosystem</h4>
              <div className="space-y-6">
                <button
                  onClick={handleScheduleConsultation}
                  onKeyDown={(e) => e.key === "Enter" && handleScheduleConsultation()}
                  className="w-full text-left bg-white/60 dark:bg-black/20 rounded-lg p-6 hover:shadow-md transition flex flex-col gap-2 cursor-pointer"
                  aria-label="Schedule consultation about Strategy Layer"
                >
                  <p className="font-semibold text-primary mb-2">Strategy Layer</p>
                  <p className="text-sm text-muted-foreground">Business direction, market analysis, growth planning</p>
                </button>

                <button
                  onClick={handleScheduleConsultation}
                  onKeyDown={(e) => e.key === "Enter" && handleScheduleConsultation()}
                  className="w-full text-left bg-white/60 dark:bg-black/20 rounded-lg p-6 hover:shadow-md transition flex flex-col gap-2 cursor-pointer"
                  aria-label="Schedule consultation about Execution Layer"
                >
                  <p className="font-semibold text-primary mb-2">Execution Layer</p>
                  <p className="text-sm text-muted-foreground">Design, development, marketing, compliance</p>
                </button>

                <button
                  onClick={handleScheduleConsultation}
                  onKeyDown={(e) => e.key === "Enter" && handleScheduleConsultation()}
                  className="w-full text-left bg-white/60 dark:bg-black/20 rounded-lg p-6 hover:shadow-md transition flex flex-col gap-2 cursor-pointer"
                  aria-label="Schedule consultation about Support Layer"
                >
                  <p className="font-semibold text-primary mb-2">Support Layer</p>
                  <p className="text-sm text-muted-foreground">Ongoing optimization, analytics, scalability</p>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your challenges and create a customized service plan that drives measurable results for your organization.
            </p>
            <button
              onClick={handleScheduleConsultation}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              📅 Schedule Free Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
