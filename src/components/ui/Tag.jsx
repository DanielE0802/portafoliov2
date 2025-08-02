import PropTypes from "prop-types";

/**
 * Tag component for displaying technology/skill tags
 * @param {Object} props - Component props  
 * @param {string} props.text - Tag text content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Styled tag element
 */
const Tag = ({ text, className = "" }) => (
  <li className="mr-1.5 mt-2">
    <div className={`flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ${className}`}>
      {text}
    </div>
  </li>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Tag;
