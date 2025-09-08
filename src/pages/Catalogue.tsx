import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Header } from "@/components/Header";

const Catalogue = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8">
            Our Product Catalogue
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover our complete range of premium fans and electrical appliances. 
            Download our comprehensive e-catalogue to explore all products and specifications.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            onClick={() => {
              window.open('https://drive.google.com/file/d/1Q_RoRqessAR_k5n3ZrfREyMAB4yC8Ftd/view?usp=drive_link', '_blank');
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Our E-Catalogue
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Catalogue;