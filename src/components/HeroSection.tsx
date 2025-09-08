import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const HeroSection = () => {
  const navigate = useNavigate();
  return <section className="relative h-screen bg-black bg-[url('/lovable-uploads/d3422e8b-122d-4e12-bc90-20a7967b98ff.png')] bg-contain md:bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative flex flex-col items-center space-y-6 z-10">
        <img src="/lovable-uploads/c4d91875-beb3-49d7-b665-640a38f09a5e.png" alt="Blue Chef Logo" className="max-w-[95%] max-h-[50vh] object-contain animate-fade-in" style={{
        filter: "brightness(0) saturate(100%) invert(23%) sepia(94%) saturate(6538%) hue-rotate(359deg) brightness(95%) contrast(116%)"
      }} />
        
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300 animate-fade-in animation-delay-400" onClick={() => navigate('/about')}>
          Know More
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>;
};