// SEO utilities for better search engine optimization

export const seoConfig = {
  defaultTitle: "Kanstar Bluechef - Premium Electrical Appliances",
  titleTemplate: "%s | Kanstar Bluechef",
  defaultDescription: "Discover Kanstar Bluechef's premium range of BLDC fans, ceiling fans, table fans, wall fans, and electrical appliances. Energy-efficient cooling solutions for modern homes and offices.",
  siteUrl: "https://your-domain.vercel.app",
  defaultImage: "/lovable-uploads/d7081175-b511-492e-b638-ffed2107f3d4.png",
  twitterHandle: "@kanstarbluechef",
};

export const generateStructuredData = (type: 'WebSite' | 'Organization' | 'Product', data?: any) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  };

  switch (type) {
    case 'WebSite':
      return {
        ...baseData,
        name: seoConfig.defaultTitle,
        description: seoConfig.defaultDescription,
        url: seoConfig.siteUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
    
    case 'Organization':
      return {
        ...baseData,
        name: "Kanstar Bluechef",
        description: "Premium electrical appliances manufacturer",
        url: seoConfig.siteUrl,
        logo: `${seoConfig.siteUrl}${seoConfig.defaultImage}`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-98765-43210",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: "English"
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "H.No 16-876, DOOLAPALLY IDA JEEDIMETLA",
          addressLocality: "Hyderabad",
          postalCode: "500055",
          addressCountry: "IN"
        }
      };
    
    case 'Product':
      return {
        ...baseData,
        name: data?.name || "Kanstar Bluechef Fans",
        description: data?.description || "Energy-efficient cooling solutions",
        brand: {
          "@type": "Brand",
          name: "Kanstar Bluechef"
        },
        manufacturer: {
          "@type": "Organization",
          name: "Kanstar Bluechef"
        },
        category: "Electrical Appliances"
      };
    
    default:
      return baseData;
  }
};

export const injectStructuredData = (data: any) => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
};