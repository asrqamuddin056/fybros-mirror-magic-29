import { useEffect, useRef, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return isMobile;
};

const useCounterAnimation = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  const startAnimation = () => {
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return { count, startAnimation };
};

const useSectionInView = (callback: () => void) => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          callback();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered, callback]);

  return elementRef;
};

export const TrendingSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  const { count: homeCount, startAnimation: startHomeCount } = useCounterAnimation(2500000);
  const { count: energySavings, startAnimation: startEnergySavings } = useCounterAnimation(25, 1500);
  
  const sectionRef = useSectionInView(() => {
    startHomeCount();
    startEnergySavings();
  });

  useEffect(() => {
    if (!scrollRef.current || (!isHovered && !isMobile)) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, isMobile]);

  const certifications = [
    {
      id: 1,
      title: "ROHS",
      subtitle: "Restriction of Hazardous Substances",
      description: "Compliant with environmental safety standards",
      link: "#"
    },
    {
      id: 2,
      title: "ISI",
      subtitle: "Indian Standards Institute",
      description: "Quality assured by Indian standards",
      link: "#"
    },
    {
      id: 3,
      title: "ISO",
      subtitle: "International Organization for Standardization",
      description: "Global quality management standards",
      link: "#"
    },
    {
      id: 4,
      title: "CE",
      subtitle: "European Conformity",
      description: "European health, safety and environmental standards",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16 tracking-wide">
          What Sets Us Apart
        </h2>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={cert.id} className="group cursor-pointer">
              {index === 0 ? (
                <div 
                  className="bg-black rounded-lg overflow-hidden h-48 mb-4 group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {homeCount.toLocaleString()}+
                  </div>
                  <div className="text-sm text-muted-foreground text-center font-medium">
                    Trusted in Homes
                  </div>
                </div>
              ) : index === 1 ? (
                <div 
                  className="bg-black rounded-lg overflow-hidden h-48 mb-4 group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                    {energySavings}%
                  </div>
                  <div className="text-sm text-muted-foreground text-center font-medium">
                    Energy Savings
                  </div>
                </div>
              ) : index === 2 ? (
                <div className="bg-black rounded-lg overflow-hidden h-48 mb-4 group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center p-6">
                  <div className="text-lg md:text-xl font-bold text-orange-500 mb-2 text-center">
                    TESTED UNDER
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    48°
                  </div>
                  <div className="text-sm text-muted-foreground text-center font-medium">
                    Degree
                  </div>
                </div>
              ) : (
                <div className="bg-black rounded-lg overflow-hidden h-48 mb-4 group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center p-6">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2 text-center">
                    INDIA'S TRUST
                  </div>
                  <div className="text-lg text-muted-foreground text-center font-medium">
                    In Every Turn
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Additional trending items in a scrolling row */}
        <div 
          ref={scrollRef}
          className="mt-12 overflow-x-auto scrollbar-hide"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {certifications.concat(certifications).map((cert, index) => (
              <div key={`scroll-${index}`} className="flex-shrink-0 w-64 group cursor-pointer">
                <div className="bg-black rounded-lg overflow-hidden h-40 group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center p-4">
                  <div className="text-3xl font-bold text-primary mb-1">{cert.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};