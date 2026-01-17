import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import TechnologyIcon from "./TechnologyIcon";

/**
 * TechnologyCategory component for displaying technologies grouped by category
 * @param {Object} props - Component props
 * @param {string} props.categoryKey - Translation key for category title
 * @param {Array} props.technologies - Array of technology objects
 * @returns {JSX.Element} Technology category section
 */
const TechnologyCategory = ({ categoryKey, technologies }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-slate-200 mb-3">
        {t(categoryKey)}
      </h4>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {technologies.map((tech) => (
          <TechnologyIcon
            key={tech.name}
            name={tech.name}
            imagePath={tech.imagePath}
            height={tech.height}
          />
        ))}
      </div>
    </div>
  );
};

TechnologyCategory.propTypes = {
  categoryKey: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      height: PropTypes.string,
    })
  ).isRequired,
};

export default TechnologyCategory;
