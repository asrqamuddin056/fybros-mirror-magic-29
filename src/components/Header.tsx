import { Search, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/d7081175-b511-492e-b638-ffed2107f3d4.png" alt="Kanstar Bluechef" className="h-10" style={{filter: "brightness(0) saturate(100%) invert(18%) sepia(100%) saturate(7467%) hue-rotate(0deg) brightness(95%) contrast(105%)"}} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            
            <Link to="/catalogue" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-foreground hover:text-primary px-4 py-2">
                Home
              </Link>
              <Link to="/catalogue" className="text-foreground hover:text-primary px-4 py-2">
                Products
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary px-4 py-2">
                About Us
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary px-4 py-2">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};