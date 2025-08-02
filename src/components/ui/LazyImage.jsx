import React from 'react';
import PropTypes from 'prop-types';
import { useLazyImage } from '../../hooks/useLazyImage';

/**
 * LazyImage component with intersection observer loading
 * @param {object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - CSS classes
 * @param {string} props.placeholder - Placeholder while loading
 * @returns {JSX.Element} Lazy loaded image component
 */
const LazyImage = React.memo(({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik04IDEwaDJWOEg4djJ6bTQgNGg2di0ySDEydjJ6bTAgNGg2di0ySDEydjJ6bTAtOGg2VjhIMTJ2MnoiIGZpbGw9IiNkMWQ1ZGIiLz4KPC9zdmc+',
  ...rest 
}) => {
  const { imageSrc, isLoaded, imageRef } = useLazyImage(src, placeholder);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      loading="lazy"
      {...rest}
    />
  );
});

LazyImage.displayName = 'LazyImage';

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default LazyImage;
