import React from "react";
import { useTranslation } from "react-i18next";
import TechnologyIcon from "./ui/TechnologyIcon";
import SectionHeader from "./ui/SectionHeader";

// Import technology images
import javascriptImage from "../assets/javascript.svg";
import reactImage from "../assets/react.svg";
import typeScriptImage from "../assets/typescript.svg";
import materialuiImage from "../assets/materialui.svg";
import reduxImage from "../assets/redux.svg";
import magentoImage from "../assets/magento.svg";
import gitImage from "../assets/git.svg";
import nodeJsImage from "../assets/nodejs.svg";
import htmlImage from "../assets/html.svg";
import cssImage from "../assets/css.svg";
import nextImage from "../assets/nextjs.svg";
import fastapiImage from "../assets/fastapi.svg";
import nestjsImage from "../assets/nestjs.svg";

// Map imported images to technology objects
const technologiesWithImages = [
  // Frontend Core
  { name: "React", imagePath: reactImage },
  { name: "Next.js", imagePath: nextImage },
  { name: "TypeScript", imagePath: typeScriptImage },
  { name: "JavaScript", imagePath: javascriptImage },
  { name: "Redux / RTK Query", imagePath: reduxImage },
  { name: "Material UI", imagePath: materialuiImage },

  // Backend / Full-Stack
  { name: "FastAPI", imagePath: fastapiImage },
  { name: "NestJS", imagePath: nestjsImage },
  { name: "Node.js", imagePath: nodeJsImage },

  // E-commerce
  { name: "Magento 2", imagePath: magentoImage },

  // Base & Tools
  { name: "HTML", imagePath: htmlImage },
  { name: "CSS", imagePath: cssImage },
  { name: "Git", imagePath: gitImage },
];

// Helper to calculate age from birthdate (08 Feb 2002)
const getAge = (birthDate) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

/**
 * About component displaying personal information and technology skills
 * @returns {JSX.Element} About section with bio and technology showcase
 */
const About = React.memo(() => {
  const { t } = useTranslation();
  const age = React.useMemo(() => getAge(new Date(2002, 1, 8)), []); // Month is 0-indexed

  const companyLinks = [
    {
      href: "https://www.linkedin.com/in/daniel-estupi%C3%B1%C3%A1n/overlay/1635471079928/single-media-viewer/?profileId=ACoAADQPELYBG7-Xdqra7yAcasY77pk1I6lR1tQ",
      text: t("Desarrollo Web Full Stack (HTML, CSS, JavaScript y Bases de datos)."),
    },
    {
      href: "https://www.aventi.co/",
      text: "Aventi Solutions",
    },
    {
      href: "https://tech.talentum.edu.co/#products",
      text: "Corporación Talentum",
    },
    {
      href: "https://universum.talentum.edu.co/",
      text: "Universum",
    },
    {
      href: "https://omni.pro/",
      text: "Omni.Pro",
    },
  ];

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-justify"
      aria-label={t("About me")}
    >
      <SectionHeader title={t("About")} />
      
      <div>
        <div className="space-y-4 mb-6">
          <p>{t("about.bio.paragraph1")}</p>
          <p>{t("about.bio.paragraph2")}</p>
          <p>{t("about.bio.paragraph3")}</p>
          <p>{t("about.bio.paragraph4")}</p>
          <p>{t("about.bio.paragraph5")}</p>
        </div>
        
        <section className="" aria-label={t("Technology skills")}>
          <div className="py-2 lg:py-2 mx-auto max-w-screen-xl px-0">
            <div className="grid grid-cols-5 gap-8 text-gray-500 sm:gap-6 md:grid-cols-5 lg:grid-cols-6 dark:text-gray-400">
              {technologiesWithImages.map((tech) => (
                <TechnologyIcon
                  key={tech.name}
                  name={tech.name}
                  imagePath={tech.imagePath}
                  height={tech.height}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CV Download Section */}
        <div className="mt-8 flex justify-center">
          <a
            href="/cv_frontend_daniel_estupinan_r.pdf"
            download="Daniel_Estupinan_CV.pdf"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            aria-label={t('about.downloadCV')}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            {t('about.downloadCV')}
          </a>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
