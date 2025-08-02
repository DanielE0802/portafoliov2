// Navigation links configuration
export const NAVIGATION_LINKS = [
  { href: "#about", translationKey: "About" },
  { href: "#experience", translationKey: "Experience" },
  { href: "#personal-projects", translationKey: "Personal Projects" },
  { href: "#projects", translationKey: "Work Projects" },
  { href: "#contact", translationKey: "Contact" },
];

// Social media links configuration
export const SOCIAL_LINKS = [
  {
    href: "https://github.com/DanielE0802",
    ariaLabel: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.linkedin.com/in/danielestupinan/",
    ariaLabel: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "/CV.pdf",
    ariaLabel: "Download CV",
    icon: "download",
    download: "Daniel_Estupiñán_CV.pdf",
  },
];

// Language configuration
export const LANGUAGES = [
  { key: "en", name: "English" },
  { key: "es", name: "Español" },
];

// Personal information
export const PERSONAL_INFO = {
  name: "Daniel Estupiñán",
  title: "Frontend Developer",
  description: "3 years of experience in web development, with a focus on frontend",
};

// Technology skills configuration
export const TECHNOLOGIES = [
  { name: "JavaScript", imagePath: "../assets/javascript.svg", height: "h-12" },
  { name: "React JS", imagePath: "../assets/react.svg", height: "h-10" },
  { name: "Redux", imagePath: "../assets/redux.svg", height: "h-12" },
  { name: "TypeScript", imagePath: "../assets/typescript.svg", height: "h-12" },
  { name: "Material UI", imagePath: "../assets/materialui.svg", height: "h-12" },
  { name: "Magento 2", imagePath: "../assets/magento.svg", height: "h-12" },
  { name: "Git", imagePath: "../assets/git.svg", height: "h-12" },
  { name: "Node JS", imagePath: "../assets/nodejs.svg", height: "h-12" },
  { name: "HTML", imagePath: "../assets/html.svg", height: "h-12" },
  { name: "CSS", imagePath: "../assets/css.svg", height: "h-12" },
];

// Animation and transition constants
export const ANIMATIONS = {
  fadeIn: "fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
  fadeOut: "fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
  scaleUp: "scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
};

// Cursor types
export const CURSOR_TYPES = {
  DEFAULT: "default",
  SLIDER_DRAG: "slider-drag", 
  HAMBURGER: "hamburger",
};
