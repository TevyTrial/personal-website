import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/DarkModeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}Logo.png`;

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 right-0 z-50 w-full bg-background-alt/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo placeholder - left side */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={logoSrc} alt="Logo" className="w-10 h-10 object-contain rounded-lg" />
            </div>
          </div>

          {/* Desktop Navigation - right side */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const hoverColors = ['hover-teal', 'hover-aqua', 'hover-olive', 'hover-golden', 'hover-orange'];
              const hoverColor = hoverColors[index % hoverColors.length];
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-foreground ${hoverColor} transition-colors duration-300 font-medium hover:scale-105`}
                >
                  {item.name}
                </a>
              );
            })}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background-alt">
              {navItems.map((item, index) => {
                const hoverColors = ['hover-teal', 'hover-aqua', 'hover-olive', 'hover-golden', 'hover-orange'];
                const hoverColor = hoverColors[index % hoverColors.length];
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-foreground ${hoverColor} transition-colors duration-300 font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;