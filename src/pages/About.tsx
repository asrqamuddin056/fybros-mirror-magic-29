import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building, Factory, Star, Award, TrendingUp, Users, Globe, CheckCircle, Target, Lightbulb, Shield, Verified, FileCheck, Leaf } from "lucide-react";
import { useState } from "react";
const About = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
  const totalMilestones = 8; // 1997, 2002, 2005, 2006, 2017, 2020, 2021, 2022

  const scrollToMilestone = (index: number) => {
    const wrapper = document.querySelector('.timeline-wrapper');
    if (wrapper) {
      const scrollPercentage = index / (totalMilestones - 1);
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      const targetScroll = maxScroll * scrollPercentage;
      wrapper.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setCurrentMilestone(index);
    }
  };
  const goToPrevious = () => {
    if (currentMilestone > 0) {
      scrollToMilestone(currentMilestone - 1);
    }
  };
  const goToNext = () => {
    if (currentMilestone < totalMilestones - 1) {
      scrollToMilestone(currentMilestone + 1);
    }
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white bg-contain md:bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(/lovable-uploads/55dc1b1f-4e71-48d0-bfce-e5aa21057b59.png)`,
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide text-primary">
            Who We Are
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Welcome to <span className="text-primary">Kanstar Bluechef</span>, where we specialize in manufacturing exceptional cooling solutions exclusively crafted for modern homes and offices. Our range of ultra-modern offerings includes premium fans that blend smart technology with everyday comfort.</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <img src="/lovable-uploads/ed706462-66cf-4ee4-add8-ae22e0f4ab4a.png" alt="Manufacturing Facility" className="w-full max-w-4xl mx-auto mb-8 rounded-lg h-64 object-cover" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              At Kanstar Bluechef, our philosophy revolves around redefining excellence in cooling technology. 
              We believe that every space, be it a home, an office, or an industrial setting, has the potential 
              to inspire, empower, and captivate. With this belief at our core, we strive to create products that go 
              beyond the ordinary, setting new standards of quality, innovation, and design. When you choose 
              Kanstar Bluechef, you choose a philosophy that resonates with your desire for excellence, innovation, and sustainability.
            </p>
          </div>

          {/* Mission & Vision Interactive */}
          <div className="bg-black text-white rounded-lg p-8 mt-12">
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[300px]">
              {/* Left Side - Tabs */}
              <div className="space-y-8">
                <button onClick={() => setActiveTab('mission')} className={`block text-left text-4xl md:text-5xl font-bold transition-colors ${activeTab === 'mission' ? 'text-primary' : 'text-gray-500'}`}>
                  OUR MISSION
                </button>
                <button onClick={() => setActiveTab('vision')} className={`block text-left text-4xl md:text-5xl font-bold transition-colors ${activeTab === 'vision' ? 'text-primary' : 'text-gray-500'}`}>
                  OUR VISION
                </button>
              </div>
              
              {/* Right Side - Content */}
              <div className="border-l border-gray-600 pl-8">
                {activeTab === 'mission' ? <p className="text-gray-300 leading-relaxed text-lg">
                    At our core, our mission is to transform the way people experience cooling systems. By delivering 
                    intelligent and connected solutions, we aim to revolutionize the way you experience and control 
                    your cooling devices. Through seamless integration with advanced technology, our products empower 
                    you to effortlessly manage and customize your cooling settings, enhancing convenience, efficiency, and comfort.
                  </p> : <p className="text-gray-300 leading-relaxed text-lg">
                    Our vision is to lead a revolution in the cooling industry through our innovative solutions that 
                    empower our customers. We strive to challenge the status quo and push boundaries to introduce 
                    groundbreaking technologies that transform the way we interact with cooling systems. By providing 
                    cutting-edge products and services, we aim to inspire a new era of efficiency, sustainability, and convenience.
                  </p>}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section className="py-20 px-4 bg-black text-white overflow-x-auto overflow-y-hidden">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16 tracking-wide">OUR MILESTONES</h2>
          
          <div className="relative">
            {/* Navigation Buttons */}
            {currentMilestone > 0 && <button onClick={goToPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                ←
              </button>}
            {currentMilestone < totalMilestones - 1 && <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                →
              </button>}
            
            {/* Timeline Container */}
            <div className="timeline-container">
              <div className="timeline-wrapper overflow-x-auto scrollbar-hide">
                
                {/* Milestones */}
                <div className="flex justify-between items-center min-w-[300vw] md:min-w-[200vw] lg:min-w-[150vw]">
                  
                  {/* 1997 Milestone */}
                  <div className="milestone-item flex flex-col items-center w-80">
                    <div className="milestone-content mb-8 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">Manufacturing of Plastic Components</h3>
                      <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
                      <p className="text-gray-300 text-sm leading-relaxed px-4">
                        Started manufacturing of plastic components for TPW Fans, laying the foundation of our journey in the cooling industry.
                      </p>
                    </div>
                    <div className="relative z-10 w-16 h-16 bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mt-4 text-4xl font-bold text-gray-400">1997</div>
                  </div>

                  {/* 2002 Milestone */}
                  <div className="milestone-item flex flex-col items-center w-80">
                    <div className="mt-4 text-4xl font-bold text-gray-400 mb-8">2002</div>
                    <div className="relative z-10 w-16 h-16 bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                    <div className="milestone-content mt-8 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">First Manufacturing Unit Established</h3>
                      <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
                      <p className="text-gray-300 text-sm leading-relaxed px-4">
                        Established our first manufacturing unit for plastic gear boxes in Hyderabad, marking a significant expansion in our capabilities.
                      </p>
                    </div>
                  </div>

                  {/* 2005 Milestone */}
                  <div className="milestone-item flex flex-col items-center w-80">
                    <div className="milestone-content mb-8 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">Market Expansion</h3>
                      <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
                      <p className="text-gray-300 text-sm leading-relaxed px-4">
                        Expanded into retail and wholesale markets across PAN India, establishing our nationwide presence and distribution network.
                      </p>
                    </div>
                    <div className="relative z-10 w-16 h-16 bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mt-4 text-4xl font-bold text-gray-400">2005</div>
                  </div>

                  {/* 2006 Milestone */}
                  <div className="milestone-item flex flex-col items-center w-80">
                    <div className="mt-4 text-4xl font-bold text-gray-400 mb-8">2006</div>
                    <div className="relative z-10 w-16 h-16 bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div className="milestone-content mt-8 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">Fan Production & OEM Partnership</h3>
                      <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
                      <p className="text-gray-300 text-sm leading-relaxed px-4">
                        Commenced fan production and began supplying spare parts to OEM companies, strengthening our position in the industry.
                      </p>
                    </div>
                  </div>

                  {/* 2017 Milestone */}
                  <div className="milestone-item flex flex-col items-center w-80">
                    <div className="milestone-content mb-8 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">International Expansion</h3>
                      <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
                      <p className="text-gray-300 text-sm leading-relaxed px-4">
                        Entered foreign markets and increased production capacity to 700 fans per day, marking our global expansion journey.
                      </p>
                    </div>
                    <div className="relative z-10 w-16 h-16 bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mt-4 text-4xl font-bold text-gray-400">2017</div>
                  </div>

                  {/* 2020 Milestone */}
                  <div className="milestone-item flex flex-col items-center w-80">
                    <div className="mt-4 text-4xl font-bold text-gray-400 mb-8">2020</div>
                    <div className="relative z-10 w-16 h-16 bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div className="milestone-content mt-8 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">Production Enhancement & Remote Control</h3>
                      <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
                      <p className="text-gray-300 text-sm leading-relaxed px-4">
                        Increased production capacity to 1,200 fans per day and introduced advanced remote control systems for enhanced user experience.
                      </p>
                    </div>
                  </div>

                  {/* 2021 Milestone */}
                  <div className="milestone-item flex flex-col items-center w-80">
                    <div className="milestone-content mb-8 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">Facility Expansion</h3>
                      <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
                      <p className="text-gray-300 text-sm leading-relaxed px-4">
                        Initiated expansion of 18,000 sq ft plant pipeline for increased production capacity to meet growing market demand.
                      </p>
                    </div>
                    <div className="relative z-10 w-16 h-16 bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mt-4 text-4xl font-bold text-gray-400">2021</div>
                  </div>

                  {/* 2022 Milestone */}
                  <div className="milestone-item flex flex-col items-center w-80">
                    <div className="mt-4 text-4xl font-bold text-gray-400 mb-8">2022</div>
                    <div className="relative z-10 w-16 h-16 bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div className="milestone-content mt-8 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">OEM Unit for Brand Companies</h3>
                      <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>
                      <p className="text-gray-300 text-sm leading-relaxed px-4">
                        Established 20,000 sq ft OEM manufacturing unit specifically for TPW fans for brand companies, cementing our position as a leading manufacturer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Headquarters</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-primary mb-2"> Galetech Industries</h4>
              <h5 className="text-xl font-bold text-foreground mb-4">
            </h5>
              <p className="text-muted-foreground"> H.No 16-876, DOOLAPALLY IDA JEEDIMETLA HYDERABAD 55, Telengana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Certifications</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">CE Certification</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">ISI Certification</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">ROHS Certification</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Quality Assurance</h4>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>;
};
export default About;