import React from "react";
import PropTypes from "prop-types";
import LazyImage from "./LazyImage";

/**
 * TechnologyIcon component for displaying technology skills with tooltips
 * @param {Object} props - Component props
 * @param {string} props.name - Technology name
 * @param {string} props.imagePath - Path to technology icon
 * @param {string} props.height - Tailwind height class
 * @returns {JSX.Element} Technology icon with tooltip
 */
const TechnologyIcon = React.memo(({ name, imagePath, height = "h-12" }) => {
  return (
    <div
      className="group relative flex justify-center items-center cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`Technology: ${name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
        }
      }}
    >
      <LazyImage 
        src={imagePath}
        alt={`${name} technology icon`}
        className={`${height} transition-transform duration-200 group-hover:scale-110`}
      />
      <span 
        className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3 group-hover:scale-100 group-focus:scale-100"
        role="tooltip"
        aria-hidden="true"
      >
        {name}
      </span>
    </div>
  );
});

TechnologyIcon.displayName = 'TechnologyIcon';

TechnologyIcon.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default TechnologyIcon;
