import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import BrandStrategy from "@/pages/services/BrandStrategy";
import LegalCompliance from "@/pages/services/LegalCompliance";
import DigitalPresence from "@/pages/services/DigitalPresence";
import DigitalMarketing from "@/pages/services/DigitalMarketing";
import SocialMedia from "@/pages/services/SocialMedia";
import ITSupport from "@/pages/services/ITSupport";
import ArtificialIntelligence from "@/pages/services/ArtificialIntelligence";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/brand-strategy" component={BrandStrategy} />
        <Route path="/services/legal-compliance" component={LegalCompliance} />
        <Route path="/services/digital-presence" component={DigitalPresence} />
        <Route path="/services/digital-marketing" component={DigitalMarketing} />
        <Route path="/services/social-media" component={SocialMedia} />
        <Route path="/services/it-support" component={ITSupport} />
        <Route path="/services/artificial-intelligence" component={ArtificialIntelligence} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
