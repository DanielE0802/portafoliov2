import { useRef } from 'react';

/**
 * Custom hook for focus management and keyboard navigation
 * @returns {object} - Object with focus utilities
 */
export const useFocusManagement = () => {
  const focusRef = useRef();
  
  /**
   * Focus an element with optional delay
   * @param {HTMLElement} element - Element to focus
   * @param {number} delay - Delay in milliseconds
   */
  const focusElement = (element, delay = 0) => {
    if (!element) return;
    
    if (delay > 0) {
      setTimeout(() => {
        element.focus();
      }, delay);
    } else {
      element.focus();
    }
  };

  /**
   * Handle keyboard navigation for arrow keys
   * @param {KeyboardEvent} event - Keyboard event
   * @param {HTMLElement[]} elements - Array of focusable elements
   * @param {number} currentIndex - Current focused element index
   * @returns {number} - New focused element index
   */
  const handleArrowNavigation = (event, elements, currentIndex) => {
    if (!elements || elements.length === 0) return currentIndex;
    
    let newIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        newIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowUp':
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = elements.length - 1;
        break;
      default:
        return currentIndex;
    }
    
    if (elements[newIndex]) {
      elements[newIndex].focus();
    }
    
    return newIndex;
  };

  /**
   * Get all focusable elements within a container
   * @param {HTMLElement} container - Container element
   * @returns {HTMLElement[]} - Array of focusable elements
   */
  const getFocusableElements = (container) => {
    if (!container) return [];
    
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');
    
    return Array.from(container.querySelectorAll(focusableSelectors));
  };

  /**
   * Trap focus within a container (useful for modals)
   * @param {HTMLElement} container - Container to trap focus within
   */
  const trapFocus = (container) => {
    if (!container) return () => {};
    
    const focusableElements = getFocusableElements(container);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (event) => {
      if (event.key !== 'Tab') return;
      
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    container.addEventListener('keydown', handleTabKey);
    
    // Focus first element
    firstElement?.focus();
    
    // Return cleanup function
    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  };

  return {
    focusRef,
    focusElement,
    handleArrowNavigation,
    getFocusableElements,
    trapFocus,
  };
};

/**
 * Custom hook for skip navigation link
 * @returns {object} - Object with skip link utilities
 */
export const useSkipNavigation = () => {
  const skipRef = useRef();
  
  const focusMainContent = () => {
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return {
    skipRef,
    focusMainContent,
  };
};
