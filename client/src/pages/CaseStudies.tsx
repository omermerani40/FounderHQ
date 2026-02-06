import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useLocation } from "wouter";
import { caseStudies } from "@/data/pageData";

export default function CaseStudies() {
  const [, navigate] = useLocation();

  const handleScheduleConsultation = () => {
    navigate("/contact");
  };

  const openFull = (id: number) => {
    navigate(`/case-studies/${id}`);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover how we've transformed businesses through strategic solutions, innovative thinking, and dedicated execution. Real results from real clients.
          </p>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-12">
          {caseStudies.map((caseStudy, idx) => (
            <div
              key={caseStudy.id}
              className={`grid md:grid-cols-2 gap-8 items-center pb-12 border-b ${
                idx === caseStudies.length - 1 ? "border-transparent" : ""
              }`}
            >
              {/* Content */}
              <div className={idx % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                  <span className="text-sm text-muted-foreground">{caseStudy.duration}</span>
                </div>
                <h3 className="text-4xl font-bold mb-4">{caseStudy.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  <span className="font-semibold text-foreground">Client:</span> {caseStudy.client}
                </p>

                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => openFull(caseStudy.id)}
                      className="mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold"
                    >
                      Read Full Case Study
                    </button>
                    <button
                      onClick={handleScheduleConsultation}
                      className="mt-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition font-semibold"
                    >
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>

              {/* Image & Results */}
              <div className={idx % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1460925895917-adf4e4984f12?w=800&h=500&fit=crop";
                  }}
                />
                <div className="bg-card border rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-6 text-primary">Key Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(caseStudy.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-2xl font-bold text-primary mb-1">{value}</p>
                        <p className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your challenges and discover how we can create similar success stories for your company.
            </p>
            <button
              onClick={handleScheduleConsultation}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
