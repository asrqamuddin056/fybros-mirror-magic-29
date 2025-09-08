import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { TrendingSection } from "@/components/TrendingSection";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { generateStructuredData } from "@/utils/seo";

const Index = () => {
  // SEO optimization for homepage
  useSEO({
    title: "Home",
    description: "Discover Kanstar Bluechef's premium range of BLDC fans, ceiling fans, and electrical appliances. Energy-efficient cooling solutions for modern homes and offices.",
    url: "/",
    structuredData: generateStructuredData('WebSite')
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">
            TOP PICKS OF THE SEASON
          </h2>
        </div>
      </section>
      
      <ProductSection
        title="BLDC FANS"
        subtitle="Advanced Brushless DC Technology"
        description="Experience next-generation cooling with energy-efficient BLDC motors"
        imageUrl="/lovable-uploads/95414232-18ac-436a-8d38-136f381cd5fb.png"
        imageAlt="Sleek black BLDC pedestal fan with modern design"
        linkTo="/catalogue"
      />
      
      <ProductSection 
        title="PEDESTAL FANS"
        subtitle="Bringing Comfort To Your Life"
        description="Add a Touch of Style to your spaces."
        imageUrl="/lovable-uploads/97d4d0e9-0918-48db-a12e-046fab606ff4.png"
        imageAlt="Kanstar pedestal fan"
        reverse={true}
        linkTo="/catalogue"
      />
      
      <ProductSection 
        title="WALL FANS"
        subtitle="The ultimate solution for air circulation"
        description="Enhance your comfort with premium wall mounted fans"
        imageUrl="/lovable-uploads/e2574f32-5769-479a-ae34-424fb7ff3da9.png"
        imageAlt="Kanstar wall mounted fan"
        linkTo="/catalogue"
      />
      
      <ProductSection 
        title="TABLE FANS"
        subtitle="Personal cooling with reliable table fans"
        description="Unlocking a cooler tomorrow"
        imageUrl="/lovable-uploads/cb8ef2d7-96cc-4271-bc3b-fe4e3b28ac52.png"
        imageAlt="Kanstar table fan"
        reverse={true}
        linkTo="/catalogue"
      />
      
      <ProductSection 
        title="CEILING FANS"
        subtitle="Elevate Your Comfort Experience"
        description="Transform your space with elegant ceiling mounted solutions."
        imageUrl="/lovable-uploads/a73ee4d6-89cf-443a-8291-aa5b18310680.png"
        imageAlt="Modern ceiling fan"
        linkTo="/catalogue"
      />
      
      <ProductSection 
        title="FARATA SERIES"
        subtitle="Premium Ceiling Fan Collection"
        description="Discover our signature Farata series with advanced features and elegant design."
        imageUrl="/lovable-uploads/705c5172-dfc1-4242-be79-d43385e957ca.png"
        imageAlt="Farata series ceiling fan"
        reverse={true}
        linkTo="/catalogue"
      />
      
      <ProductSection 
        title="IMMERSION HEATER"
        subtitle="Reliable Water Heating Solutions"
        description="Efficient and durable immersion heaters for residential and commercial applications."
        imageUrl="/lovable-uploads/a49cdaee-94ad-4770-99ae-7753560018bf.png"
        imageAlt="Immersion heater"
        linkTo="/catalogue"
      />
      
      <TrendingSection />
      
      <Footer />
    </div>
  );
};

export default Index;
