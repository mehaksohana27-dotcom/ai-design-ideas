import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-4">
              <span className="text-foreground">ELITE</span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">FITNESS</span>
            </div>
            <p className="text-muted-foreground">
              Transform your body and mind with professional coaching and proven results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#programs" className="block text-muted-foreground hover:text-primary transition-colors">
                Programs
              </a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Elite Fitness Coach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
