import { useState, useRef, useEffect } from 'react';

/**
 * Custom hook for lazy loading images with Intersection Observer
 * @param {string} src - Image source URL
 * @param {string} placeholder - Placeholder image while loading
 * @returns {object} - Object with imageSrc, isLoaded, and ref
 */
export const useLazyImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    let observer;
    const currentImageRef = imageRef.current;
    
    if (currentImageRef) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              setIsLoaded(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      );
      
      observer.observe(currentImageRef);
    }

    return () => {
      if (observer && currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [src]);

  return { imageSrc, isLoaded, imageRef };
};
