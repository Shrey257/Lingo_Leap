import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { logoAnimation } from "@/lib/animations";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  openAuthDialog: (view: "login" | "register") => void;
}

export function Navbar({ openAuthDialog }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const Logo = () => (
    <Link href="/" className="text-2xl font-heading font-bold text-primary flex items-center">
      <motion.svg 
        className="w-8 h-8 mr-2" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        variants={logoAnimation}
        initial="initial"
        animate="animate"
      >
        <path d="M10.5 21l-.5-1c-.6-1.5-1.6-2.8-2.8-3.8-2.2-1.8-3.4-4.5-3.2-7.3.3-4.5 4.1-8.1 8.6-8.1 4.6 0 8.3 3.6 8.6 8.1.2 2.8-1 5.5-3.2 7.3-1.2 1-2.2 2.3-2.8 3.8l-.5 1h-4.2z"/>
        <circle cx="12" cy="10" r="3"/>
      </motion.svg>
      LingoLeap
    </Link>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-base font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="ghost" 
              onClick={() => openAuthDialog("login")}
            >
              Login
            </Button>
            <Button 
              onClick={() => openAuthDialog("register")}
              className="rounded-full"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col mt-8 space-y-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  variant="ghost" 
                  onClick={() => openAuthDialog("login")}
                  className="w-full justify-start"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => openAuthDialog("register")}
                  className="rounded-full"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
