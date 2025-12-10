import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-heading font-bold text-primary tracking-tighter mb-4 block">
              Founder<span className="text-accent">HQ</span>
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              The all-in-one launch partner for Australian founders. We replace fragmentation with focus, so you can build the future.
            </p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Brand Strategy</a></li>
              <li><a href="#" className="hover:text-primary">Web Development</a></li>
              <li><a href="#" className="hover:text-primary">Legal Setup</a></li>
              <li><a href="#" className="hover:text-primary">Financial Ops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2024 FounderHQ Agency. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
