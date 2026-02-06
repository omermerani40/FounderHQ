import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useRoute } from "wouter";
import { caseStudies } from "@/data/pageData";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function FullCaseStudy() {
  const [match, params] = useRoute("/case-studies/:id");
  const id = params?.id ? parseInt(params.id, 10) : null;
  const study = caseStudies.find((c) => c.id === id) || null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <main className="pt-28 max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Case Study Not Found</h2>
          <p className="text-muted-foreground">We couldn't find the case study you're looking for.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-28 max-w-6xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{study.title}</h1>
          <p className="text-sm text-muted-foreground">Client: {study.client} • {study.duration} • {study.industry}</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Share:</span>

            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent(`${study.title} — ${study.excerpt || ""}`);
                window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
              }}
              className="hover:opacity-90"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5 text-[#1DA1F2]" />
            </button>

            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
              }}
              className="hover:opacity-90"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-[#1877F2]" />
            </button>

            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
              }}
              className="hover:opacity-90"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            </button>

            <button
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
              className="text-sm text-muted-foreground hover:text-primary ml-2"
            >
              Copy link
            </button>
          </div>
        </header>

        <img src={study.image} alt={study.title} className="w-full h-80 object-cover rounded-lg mb-8" />

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Solution</h3>
              <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
            </div>
          </div>
          <aside className="bg-card border rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4">Key Results</h4>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(study.results).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-sm text-muted-foreground capitalize">{k.replace(/([A-Z])/g, " $1")}</span>
                  <span className="font-semibold text-primary">{v}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Impact & Learnings</h3>
          <p className="text-muted-foreground leading-relaxed">
            This project demonstrates how a focused product and UX strategy, combined with technical improvements and analytics, can materially improve business outcomes.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
