import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { NAVIGATION_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from "../constants";
import { createLinkProps } from "../utils/helpers";

/**
 * NavigationItem component for individual navigation links
 * @param {Object} props - Component props
 * @param {Object} props.link - Navigation link object
 * @param {Function} props.t - Translation function
 * @param {boolean} props.isActive - Whether this link is active
 * @returns {JSX.Element} Navigation list item
 */
const NavigationItem = React.memo(({ link, t, isActive = false }) => {
  return (
    <li>
      <a 
        className={`group flex items-center py-3 ${isActive ? 'active' : ''}`} 
        href={link.href}
        aria-label={`Navigate to ${t(link.translationKey)} section`}
        aria-current={isActive ? 'page' : undefined}
      >
        <span 
          className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
          aria-hidden="true"
        ></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {t(link.translationKey)}
        </span>
      </a>
    </li>
  );
});

NavigationItem.displayName = 'NavigationItem';
NavigationItem.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    translationKey: PropTypes.string.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

/**
 * SocialIcon component for social media links
 * @param {Object} props - Component props
 * @param {string} props.icon - Icon type
 * @returns {JSX.Element} SVG icon element
 */
function SocialIcon({ icon }) {
  switch (icon) {
    case 'github':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      );
    case 'download':
      return (
        <img 
          className="h-8 w-8 filter invert opacity-60" 
          src="/file.png" 
          alt="Download CV" 
        />
      );
    default:
      return null;
  }
}

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

/**
 * SocialLink component for individual social media links
 * @param {Object} props - Component props
 * @param {Object} props.link - Social link object
 * @returns {JSX.Element} Social media link
 */
function SocialLink({ link }) {
  const linkProps = link.download 
    ? { ...createLinkProps(link.href, true, link.ariaLabel), download: link.download }
    : createLinkProps(link.href, true, link.ariaLabel);

  return (
    <li className="mr-5 text-xs">
      <a
        className="block hover:text-slate-200"
        {...linkProps}
      >
        <span className="sr-only">{link.ariaLabel}</span>
        <SocialIcon icon={link.icon} />
      </a>
    </li>
  );
}

SocialLink.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    download: PropTypes.string,
  }).isRequired,
};

/**
 * Sidebar component containing navigation and social links
 * @returns {JSX.Element} Sidebar header with navigation and social media
 */
function Sidebar() {
  const { t } = useTranslation();

  return (
    <header className="text-left lg:sticky lg:top-0 lg:flex lg:h-[95vh] lg:w-1/2 lg:flex-col lg:justify-between lg:py-8">
      <div>
        {/* My picture */}
        <div className="mb-8 flex flex-col items-start">
          <img 
            src="/profile.jpeg" 
            alt={PERSONAL_INFO.name} 
            className="mb-0 h-44 w-44 rounded-full border-2 border-slate-200/10 object-cover shadow-lg"
          />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">{PERSONAL_INFO.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl text-left">
          {t(PERSONAL_INFO.title)}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          {t(PERSONAL_INFO.description)}
        </p>
        
        <nav className="nav hidden lg:block" aria-label={t("In-page jump links")}>
          <ul className="mt-8 w-max">
            {NAVIGATION_LINKS.map((link, index) => (
              <NavigationItem 
                key={link.href} 
                link={link} 
                t={t} 
                isActive={index === 0} // First item is active by default
              />
            ))}
          </ul>
        </nav>
      </div>
      
      <ul className="ml-1 mt-8 flex items-center" aria-label={t("Social media")}>
        {SOCIAL_LINKS.map((link) => (
          <SocialLink key={link.href} link={link} />
        ))}
      </ul>
    </header>
  );
}

export default Sidebar;
