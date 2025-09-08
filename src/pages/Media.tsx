import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
            Media Center
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Press Releases</h3>
              <p className="text-muted-foreground">Stay updated with our latest announcements and company news.</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Product Gallery</h3>
              <p className="text-muted-foreground">Explore our comprehensive range of electrical products and solutions.</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Awards & Recognition</h3>
              <p className="text-muted-foreground">Celebrating our achievements and industry recognition.</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Downloads</h3>
              <p className="text-muted-foreground">Access product catalogs, brochures, and technical documentation.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Media;