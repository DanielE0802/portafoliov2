import PropTypes from "prop-types";
import { createImageProps } from "../../utils/helpers";

/**
 * TechnologyIcon component for displaying technology skills with tooltips
 * @param {Object} props - Component props
 * @param {string} props.name - Technology name
 * @param {string} props.imagePath - Path to technology icon
 * @param {string} props.height - Tailwind height class
 * @returns {JSX.Element} Technology icon with tooltip
 */
const TechnologyIcon = ({ name, imagePath, height = "h-12" }) => {
  const imageProps = createImageProps(imagePath, name, {
    className: height,
  });

  return (
    <a
      href="#"
      className="group relative flex justify-center items-center"
      onClick={(e) => e.preventDefault()}
    >
      <img {...imageProps} />
      <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3 group-hover:scale-100">
        {name}
      </span>
    </a>
  );
};

TechnologyIcon.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default TechnologyIcon;
