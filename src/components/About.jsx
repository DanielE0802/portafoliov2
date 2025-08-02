import React from "react";
import { useTranslation } from "react-i18next";
import TechnologyIcon from "./ui/TechnologyIcon";
import SectionHeader from "./ui/SectionHeader";
import { createLinkProps } from "../utils/helpers";

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

// Map imported images to technology objects
const technologiesWithImages = [
  { name: "JavaScript", imagePath: javascriptImage, height: "h-12" },
  { name: "React JS", imagePath: reactImage, height: "h-10" },
  { name: "Redux", imagePath: reduxImage, height: "h-12" },
  { name: "TypeScript", imagePath: typeScriptImage, height: "h-12" },
  { name: "Material UI", imagePath: materialuiImage, height: "h-12" },
  { name: "Magento 2", imagePath: magentoImage, height: "h-12" },
  { name: "Git", imagePath: gitImage, height: "h-12" },
  { name: "Node JS", imagePath: nodeJsImage, height: "h-12" },
  { name: "HTML", imagePath: htmlImage, height: "h-12" },
  { name: "CSS", imagePath: cssImage, height: "h-12" },
];

/**
 * About component displaying personal information and technology skills
 * @returns {JSX.Element} About section with bio and technology showcase
 */
const About = React.memo(() => {
  const { t } = useTranslation();

  // Company links configuration
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
      href: "https://stefanini.com/es",
      text: "Stefanini LATAM",
    },
  ];

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-justify"
      aria-label="About me"
    >
      <SectionHeader title={t("About")} />
      
      <div>
        <p className="mb-4">
          {t("¡Hola! 👋 Soy Daniel. Tengo 21 años y soy de Colombia, mi interés por el Desarrollo de Software nació en 2017 cuando me llamó la atención como desarrollaban los juegos, comencé haciendo cosas muy básicas en Unity junto a un amigo, en 2020 decidí hacer parte de Protalento, en la que atraves de Acamica aprendí")}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            {...createLinkProps(companyLinks[0].href, true, "Certificado Acamica")}
          >
            {" "}
            {companyLinks[0].text}
          </a>
          <br />
          {t("Actualmente soy estudiante en Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Comencé mi primer trabajo en")}{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            {...createLinkProps(companyLinks[1].href, true, companyLinks[1].text)}
          >
            {companyLinks[1].text}{" "}
          </a>
          {t("liderando diferentes proyectos en Magento (Rimax, Saluti, Empack), para posteriormente trabajar en")}{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            {...createLinkProps(companyLinks[2].href, true, companyLinks[2].text)}
          >
            {companyLinks[2].text}{" "}
          </a>
          {t("desarrollando un dashboard de un proyecto llamado")}{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            {...createLinkProps(companyLinks[3].href, true, companyLinks[3].text)}
          >
            {companyLinks[3].text}{" "}
          </a>
          . {t("Actualmente trabajo en")}{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            {...createLinkProps(companyLinks[4].href, true, companyLinks[4].text)}
          >
            {companyLinks[4].text}
          </a>
          , {t("en el cargo de Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje, Estas son algunas tecnologías con las que he estado trabajando recientemente:")}
        </p>
        
        <section className="" aria-label="Technology skills">
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
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
