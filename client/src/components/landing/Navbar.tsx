import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  const isServicePage = location.startsWith('/services');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split('#');
    
    if (location === '/' || path === '/') {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    if (location === '/') {
      const ctaSection = document.getElementById('contact');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-heading font-bold tracking-tighter ${
          isServicePage && !isScrolled ? "text-white" : "text-primary"
        }`}>
          Founder<span className="text-accent">HQ</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                isServicePage && !isScrolled 
                  ? "text-blue-100 hover:text-white" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6"
            data-testid="button-get-started"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden ${isServicePage && !isScrolled ? "text-white" : "text-primary"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-foreground py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
