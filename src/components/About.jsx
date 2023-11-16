import { useTranslation } from "react-i18next";
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

function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-justify"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {t("About")}
        </h2>
      </div>
      <div>
        <p className="mb-4">
          ¡Hola! 👋 Soy Daniel. Tengo 21 años y soy de Colombia, mi interés por
          el Desarrollo de Software nació en 2017 cuando me llamó la atención
          como desarrollaban los juegos, comencé haciendo cosas muy básicas en
          Unity junto a un amigo, en 2020 decidí hacer parte de Protalento, en
          la que aprendí atraves de Acamica
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.linkedin.com/in/daniel-estupi%C3%B1%C3%A1n/overlay/1635471079928/single-media-viewer/?profileId=ACoAADQPELYBG7-Xdqra7yAcasY77pk1I6lR1tQ"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Desarrollo Web Full Stack (HTML, CSS, JavaScript y Bases de datos).
          </a>
          <br></br>
          Actualmente soy estudiante en Ingeniería de Sistemas en la Universidad
          Tecnológica de Pereira. Comencé mi primer trabajo en{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.aventi.co/"
            target="_blank"
            rel="noreferrer"
          >
            Aventi Solutions{" "}
          </a>
          liderando diferentes proyectos en Magento (Rimax, Saluti, Empack),
          para posteriormente trabajar en{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://tech.talentum.edu.co/#products"
            target="_blank"
            rel="noreferrer"
          >
            Corporación Talentum{" "}
          </a>
          desarrollando un dashboard de un proyecto llamado{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://universum.talentum.edu.co/"
            target="_blank"
            rel="noreferrer"
          >
            Universum{" "}
          </a>
          . Actualmente trabajo en{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://stefanini.com/es"
            target="_blank"
            rel="noreferrer"
          >
            Stefanini LATAM
          </a>
          , en el cargo de Senior Magento Frontend Developer. Soy una persona
          que está en constante aprendizaje, Estas son algunas tecnologías con
          las que he estado trabajando recientemente:
        </p>
        <section className="">
          <div className="py-2 lg:py-2 mx-auto max-w-screen-xl px-0">
            <div className="grid grid-cols-5 gap-8 text-gray-500 sm:gap-6 md:grid-cols-5 lg:grid-cols-6 dark:text-gray-400">
              <a
                href="#"
                className="group relative flex justify-center items-center"
              >
                <img src={javascriptImage} alt="JavaScript" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3  group-hover:scale-100">
                  JavaScript
                </span>
              </a>
              <a
                href="#"
                className="group relative flex justify-center items-center"
              >
                <img src={reactImage} alt="React" className="h-10" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3  group-hover:scale-100">
                  React JS
                </span>
              </a>
              <a
                href="#"
                className="group relative flex justify-center items-center"
              >
                <img src={reduxImage} alt="Redux" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3  group-hover:scale-100">
                  Redux
                </span>
              </a>
              <a
                href="#"
                className="group relative flex justify-center items-center"
              >
                <img src={typeScriptImage} alt="TypeScript" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3  group-hover:scale-100">
                  TypeScript
                </span>
              </a>
              <a
                href="#"
                className="flex justify-center items-center group relative"
              >
                <img src={materialuiImage} alt="Material UI" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3   group-hover:scale-100">
                  Material ui
                </span>
              </a>
              <a
                href="#"
                className="flex justify-center items-center group relative"
              >
                <img src={magentoImage} alt="Magento" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3   group-hover:scale-100">
                  Magento 2
                </span>
              </a>
              <a
                href="#"
                className="flex justify-center items-center group relative"
              >
                <img src={gitImage} alt="Git" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3   group-hover:scale-100">
                  Git
                </span>
              </a>
              <a
                href="#"
                className="flex justify-center items-center group relative"
              >
                <img src={nodeJsImage} alt="Node JS" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3   group-hover:scale-100">
                  Node JS
                </span>
              </a>
              <a
                href="#"
                className="flex justify-center items-center group relative"
              >
                <img src={htmlImage} alt="HTML" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3   group-hover:scale-100">
                  HTML
                </span>
              </a>
              <a
                href="#"
                className="flex justify-center items-center group relative"
              >
                <img src={cssImage} alt="CSS" className="h-12" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white w-20 text-center mt-3   group-hover:scale-100">
                  CSS
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
