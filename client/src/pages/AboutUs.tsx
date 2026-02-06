import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { teamMembers } from "@/data/pageData";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About FounderHQ
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Empowering Australian founders and entrepreneurs with comprehensive business solutions, digital transformation, and strategic guidance to build thriving companies.
          </p>
        </section>

        {/* Company History */}
        <section id="story" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-b scroll-mt-20">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                FounderHQ was established in 2015 with a clear mission: to bridge the gap between brilliant entrepreneurial ideas and successful business execution. We recognized that Australian founders faced a fragmented landscape of service providers, each offering only piece-meal solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past nine years, we've evolved from a lean consulting firm into a comprehensive business partner for over 500+ companies. Our integrated approach combines legal expertise, branding excellence, digital marketing prowess, and cutting-edge technology solutions—all under one roof. Today, we're proud to be the trusted partner guiding founders through every stage of their entrepreneurial journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground mb-6">Companies Served</p>
                <div className="text-4xl font-bold text-primary mb-2">$500M+</div>
                <p className="text-muted-foreground mb-6">Client Revenue Generated</p>
                <div className="text-4xl font-bold text-primary mb-2">9 Years</div>
                <p className="text-muted-foreground">Industry Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-b scroll-mt-20">
          <h2 className="text-4xl font-bold mb-12">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower Australian founders and businesses by providing integrated, world-class solutions that eliminate fragmentation, reduce complexity, and accelerate growth. We exist to transform entrepreneurial vision into sustainable, profitable reality through strategic guidance, expert execution, and innovative technology.
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4 text-accent">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most trusted, comprehensive business partner for founders across Australia—recognized globally for delivering exceptional results, fostering innovation, and building lasting relationships. We aspire to be the catalyst that transforms bold ideas into thriving enterprises that create jobs, drive economic growth, and shape industries.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section id="why" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-b scroll-mt-20">
          <h2 className="text-4xl font-bold mb-12">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Transparent, honest, and ethical in all dealings" },
              { title: "Excellence", desc: "Highest quality in every service and interaction" },
              { title: "Innovation", desc: "Constantly evolving with industry best practices" },
              { title: "Partnership", desc: "Your success is our success—we grow together" },
            ].map((value, i) => (
              <div key={i} className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition">
                <h4 className="text-xl font-bold mb-3 text-primary">{value.title}</h4>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
          <h2 className="text-4xl font-bold mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio || "Dedicated to driving excellence and innovation."}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
