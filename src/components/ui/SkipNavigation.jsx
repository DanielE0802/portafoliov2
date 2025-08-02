import React from 'react';
import PropTypes from 'prop-types';
import { useSkipNavigation } from '../../hooks/useFocusManagement';

/**
 * SkipNavigation component for screen reader accessibility
 * @param {object} props - Component props
 * @param {string} props.text - Skip navigation text
 * @returns {JSX.Element} Skip navigation link
 */
const SkipNavigation = React.memo(({ text = "Skip to main content" }) => {
  const { skipRef, focusMainContent } = useSkipNavigation();

  const handleSkip = (event) => {
    event.preventDefault();
    focusMainContent();
  };

  return (
    <a
      ref={skipRef}
      href="#main-content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-800 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
      aria-label={text}
    >
      {text}
    </a>
  );
});

SkipNavigation.displayName = 'SkipNavigation';

SkipNavigation.propTypes = {
  text: PropTypes.string,
};

export default SkipNavigation;
