import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
  linkTo?: string;
}

export const ProductSection = ({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  imageAlt = "", 
  reverse = false,
  linkTo
}: ProductSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide">
              {title}
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground mb-6">
              {subtitle}
            </h3>
            {description && (
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                {description}
              </p>
            )}
            {linkTo ? (
              <Link to={linkTo}>
                <Button 
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Know More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button 
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
              >
                Know More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Image */}
          <div className="flex-1">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={imageAlt}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Product Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};