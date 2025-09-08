import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <footer className="bg-card py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Discover the Future of Smart Cooling with Kanstar Bluechef
          </h2>
          <h3 className="text-lg text-muted-foreground mb-8">
            Where Innovation Meets Everyday Comfort
          </h3>
        </div>

        <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-6">
          <p>
            In today's fast-paced world, your home and workplace deserve more than just ordinary appliances — they deserve the future. Kanstar Bluechef blends smart innovation with everyday practicality to deliver cooling solutions that are not only high-performing but also aesthetically refined and energy efficient.
          </p>

          <div className="mt-12">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Redefining Comfort with Elegant Fan Design
            </h4>
            <p>
              Fans may seem simple, but at Kanstar Bluechef, we know they hold great power — literally and aesthetically. Our fan designs reflect a new era of smart cooling and sleek sophistication. Each piece is engineered for flawless functionality and long-term reliability.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Cool Your Space with Smart Fans – Kanstar Bluechef Cooling Solutions
            </h4>
            <p>
              Let your space breathe with the right airflow. Kanstar Bluechef fans are crafted to transform your everyday cooling into a refreshing experience. Whether you're working in the office, relaxing in the living room, or focusing in your home workspace — our fans deliver consistent airflow while saving energy.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Unmatched Quality in Every Rotation – Motors You Can Trust
            </h4>
            <p>
              Behind every great fan lies a network of dependable components. That's why Kanstar Bluechef offers a complete range of high-quality motors and parts for residential, commercial, and industrial cooling needs.
            </p>
          </div>
        </div>

        {/* Contact Information and Social Links */}
        <div ref={footerRef} className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
          {/* Contact Information - appears first */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-primary" />
                <span className="text-muted-foreground">H.No 16-876,Doolapally IDA
Jeedimetla Hyderabad-55,Telengana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground">info@kanstarbluechef.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links - appears second */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/products" className="block text-muted-foreground hover:text-primary transition-colors">Products</a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="/media" className="block text-muted-foreground hover:text-primary transition-colors">Media</a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Follow Us - appears third */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="flex justify-center mt-8">
              
            </div>
            <div className="flex justify-start mt-6">
              <img src="/lovable-uploads/0aacadd3-81b7-4a1e-9b26-3ed6f8faeb8d.png" alt="Kanstar Blue Chef Brand Logo" className="h-40 w-auto md:h-44 object-contain" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">© 2025 Kanstar Bluechef. All rights reserved. Experience the difference — where smart design powers smarter cooling.</p>
        </div>
      </div>
    </footer>;
};