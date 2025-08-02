import PropTypes from "prop-types";

/**
 * SectionHeader component for consistent section titles
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @returns {JSX.Element} Section header with consistent styling
 */
const SectionHeader = ({ title }) => (
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-[85vw] bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only text-left">
      {title}
    </h2>
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
