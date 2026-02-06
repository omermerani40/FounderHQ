import { useRef, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { careersData } from "@/data/pageData";

export default function Careers() {
  const benefits = careersData.benefits;
  const positions = careersData.openPositions;
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applicant, setApplicant] = useState({ name: "", email: "", cover: "" });

  const handleResumeClick = () => {
    resumeInputRef.current?.click();
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Resume uploaded:", file.name);
      alert(`Thank you! Your resume (${file.name}) has been submitted. We'll review it and get back to you within 48 hours.`);
      // Reset input
      if (resumeInputRef.current) {
        resumeInputRef.current.value = ""; 
      }
    }
  };

  const openApply = (position: { id: number; title: string }) => {
    setSelectedRole(position.title);
    setIsApplyOpen(true);
  };

  const closeApply = () => {
    setIsApplyOpen(false);
    setSelectedRole(null);
    setApplicant({ name: "", email: "", cover: "" });
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedRole}\nName: ${applicant.name}\nEmail: ${applicant.email}`);
    closeApply();
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Join Our Growing Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            We're building the future of business solutions in Australia. If you're passionate about innovation, client success, and making an impact, we want to hear from you.
          </p>
        </section>

        {/* Why Join Us */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-b">
          <h2 className="text-4xl font-bold mb-8">Why Join FounderHQ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Impact & Growth</h3>
              <p className="text-muted-foreground">
                Work on meaningful projects that directly impact hundreds of businesses across Australia. Your work matters and drives real change.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Learning Culture</h3>
              <p className="text-muted-foreground">
                Continuous learning is embedded in our culture. Access to training, mentorship, and exposure to cutting-edge technologies and strategies.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible work arrangements, generous time off, and a supportive team environment that values your wellbeing.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-b scroll-mt-20">
          <h2 className="text-4xl font-bold mb-12">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position) => (
              <div key={position.id} className="bg-card border rounded-lg p-8 hover:shadow-md transition-all group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl">
                        {position.department === "Engineering"
                          ? "💻"
                          : position.department === "Design"
                          ? "🎨"
                          : position.department === "Marketing"
                          ? "📢"
                          : "🤝"}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{position.title}</h3>
                        <p className="text-sm text-primary font-semibold">
                          {position.department} • {position.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        Full-time
                      </span>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                        {position.location === "Remote" ? "Remote" : "On-site"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => openApply(position)}
                    className="md:mt-0 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold whitespace-nowrap group-hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
          <h2 className="text-4xl font-bold mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-card border rounded-lg p-6 hover:shadow-md transition">
                <span className="text-primary text-2xl mt-1 flex-shrink-0">✓</span>
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t">
          <h2 className="text-4xl font-bold mb-8">Our Culture</h2>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-12">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              FounderHQ is built on collaboration, innovation, and a genuine commitment to our team members' growth. We believe that great companies are built by great people, and we invest heavily in creating an environment where you can do your best work, be yourself, and grow both professionally and personally.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our diverse team comes from different backgrounds and brings unique perspectives. We celebrate our differences, foster inclusion, and create space for everyone's voice to be heard. Together, we're transforming the business landscape in Australia.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section id="apply" className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Upload your resume and let's talk about opportunities that might be a great fit.
            </p>
            <div>
              <button
                onClick={() => openApply({ id: 0, title: "General Application" })}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
              >
                📤 Send Your Resume
              </button>
            </div>
          </div>
        </section>
      </main>

      {isApplyOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeApply} />
          <form
            onSubmit={handleApplySubmit}
            className="relative bg-card border rounded-lg p-8 w-full max-w-2xl mx-4 z-10"
            aria-label="Application form"
          >
            <h2 className="text-2xl font-bold mb-4">Apply: {selectedRole}</h2>
            <div className="space-y-4">
              <input
                required
                value={applicant.name}
                onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                placeholder="Full name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                required
                type="email"
                value={applicant.email}
                onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                placeholder="Email"
                className="w-full border rounded px-3 py-2"
              />
              <textarea
                value={applicant.cover}
                onChange={(e) => setApplicant({ ...applicant, cover: e.target.value })}
                placeholder="Short cover letter (optional)"
                className="w-full border rounded px-3 py-2 h-28"
              />

              <div className="flex items-center gap-4">
                <input
                  ref={resumeInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  className="hidden"
                />
                <button type="button" onClick={() => resumeInputRef.current?.click()} className="bg-primary text-primary-foreground px-4 py-2 rounded">
                  Attach Resume
                </button>
                <button type="submit" className="bg-accent text-accent-foreground px-6 py-2 rounded">
                  Submit Application
                </button>
                <button type="button" onClick={closeApply} className="ml-auto text-sm text-muted-foreground">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
}
