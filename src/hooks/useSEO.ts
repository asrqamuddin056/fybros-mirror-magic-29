import { useEffect } from 'react';
import { generateStructuredData, injectStructuredData, seoConfig } from '@/utils/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  structuredData?: any;
}

export const useSEO = ({
  title,
  description,
  image,
  url,
  structuredData
}: SEOProps = {}) => {
  useEffect(() => {
    // Update title
    const pageTitle = title 
      ? `${title} | Kanstar Bluechef`
      : seoConfig.defaultTitle;
    document.title = pageTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update description
    const pageDescription = description || seoConfig.defaultDescription;
    updateMetaTag('description', pageDescription);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('twitter:description', pageDescription);

    // Update title tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('twitter:title', pageTitle);

    // Update image
    const pageImage = image || seoConfig.defaultImage;
    const fullImageUrl = pageImage.startsWith('http') 
      ? pageImage 
      : `${seoConfig.siteUrl}${pageImage}`;
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('twitter:image', fullImageUrl);

    // Update URL
    if (url) {
      updateMetaTag('og:url', `${seoConfig.siteUrl}${url}`, true);
    }

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl);

    // Inject structured data
    if (structuredData) {
      injectStructuredData(structuredData);
    }

    // Clean up function
    return () => {
      // Remove dynamically added structured data scripts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (!script.getAttribute('data-static')) {
          script.remove();
        }
      });
    };
  }, [title, description, image, url, structuredData]);
};