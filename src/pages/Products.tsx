import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Products = () => {
  const productCategories = [
    {
      title: "Ceiling Fans",
      description: "Premium quality ceiling fans for residential and commercial spaces",
      products: ["Designer Ceiling Fans", "Energy Efficient Models", "Remote Control Fans", "BLDC Fans"],
      image: "/lovable-uploads/185f62da-58d4-4a1f-ad7d-e997cf7d8183.png"
    },
    {
      title: "Exhaust Fans",
      description: "High-performance exhaust fans for kitchens and bathrooms",
      products: ["Kitchen Exhaust Fans", "Bathroom Ventilators", "Industrial Exhaust", "Ventilation Systems"],
      image: "/lovable-uploads/1ea075ad-8312-4c80-98ee-3783a5222c4b.png"
    },
    {
      title: "Table Fans",
      description: "Compact and powerful table fans for personal cooling",
      products: ["Desktop Fans", "Pedestal Fans", "Wall Mount Fans", "Rechargeable Fans"],
      image: "/lovable-uploads/280e5d36-10be-41bd-97b1-b7e242c34042.png"
    },
    {
      title: "Immersion Heaters",
      description: "Safe and efficient water heating solutions",
      products: ["Electric Immersion Heaters", "Portable Water Heaters", "Industrial Heaters", "Safety Heaters"],
      image: "/lovable-uploads/2942108e-5e36-455d-852e-6b5730de7607.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of premium electrical appliances designed to enhance your comfort and convenience.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.products.map((product, productIndex) => (
                      <Badge key={productIndex} variant="secondary">
                        {product}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our experts are here to help you find the perfect product for your needs.
          </p>
          <Button size="lg" className="mr-4">
            Contact Us
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/E-Catelouge (2).pdf';
              link.download = 'KANSTAR-E-Catalogue.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Our E-Catalogue
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;