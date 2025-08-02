import PropTypes from "prop-types";

// Experience item shape
export const ExperienceItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  dateInit: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
});

// Project item shape
export const ProjectItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
});

// Technology item shape
export const TechnologyShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
});

// Social link shape
export const SocialLinkShape = PropTypes.shape({
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  download: PropTypes.string,
});

// Navigation link shape
export const NavigationLinkShape = PropTypes.shape({
  href: PropTypes.string.isRequired,
  translationKey: PropTypes.string.isRequired,
});

// Language shape
export const LanguageShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});
