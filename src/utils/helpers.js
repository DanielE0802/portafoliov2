/**
 * Get the appropriate flag code for country representation
 * @param {string} languageCode - Language code (en, es, etc.)
 * @returns {string} - Country code for flag display
 */
export const getFlagCode = (languageCode) => {
  const flagMap = {
    en: "gb", // English uses Great Britain flag
    es: "es", // Spanish uses Spain flag
  };
  
  return flagMap[languageCode] || languageCode;
};

/**
 * Creates optimized image loader for better performance
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for accessibility
 * @returns {Object} - Image props object
 */
export const createImageProps = (src, alt, additionalProps = {}) => ({
  src,
  alt,
  loading: "lazy",
  decoding: "async",
  ...additionalProps,
});

/**
 * Validates external URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - Whether URL is valid
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Creates accessible link props
 * @param {string} href - Link destination
 * @param {boolean} external - Whether link is external
 * @param {string} ariaLabel - Accessibility label
 * @returns {Object} - Link props object
 */
export const createLinkProps = (href, external = false, ariaLabel = "") => {
  const baseProps = {
    href,
    ...(ariaLabel && { "aria-label": ariaLabel }),
  };

  if (external && isValidUrl(href)) {
    return {
      ...baseProps,
      target: "_blank",
      rel: "noreferrer",
    };
  }

  return baseProps;
};

/**
 * Formats date range for experience display
 * @param {string} startDate - Start date string
 * @param {string} endDate - End date string
 * @returns {string} - Formatted date range
 */
export const formatDateRange = (startDate, endDate) => {
  return `${startDate} — ${endDate}`;
};

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Get scroll position for navigation highlighting
 * @param {string} elementId - ID of element to check
 * @returns {boolean} - Whether element is in viewport
 */
export const isElementInViewport = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return rect.top <= windowHeight * 0.3 && rect.bottom >= 0;
};
