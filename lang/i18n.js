import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "3 years of experience in web development, with a focus on frontend":
          "3 years of experience in web development, with a focus on frontend",
        "Frontend Developer": "Frontend Developer",
        About: "About",
        Skills: "Skills",
        Experience: "Experience",
        Education: "Education",
        Projects: "Projects",
        Contact: "Contact",
        "¡Hola! 👋 Soy Daniel. Tengo 21 años y soy de Colombia, mi interés por el Desarrollo de Software nació en 2017 cuando me llamó la atención como desarrollaban los juegos, comencé haciendo cosas muy básicas en Unity junto a un amigo, en 2020 decidí hacer parte de Protalento, en la que atraves de Acamica aprendí":
          "Hello! 👋 I'm Daniel. I'm 21 years old and I'm from Colombia, my interest in Software Development was born in 2017 when it caught my attention how they developed games, I started doing very basic things in Unity with a friend, in 2020 I decided to be part of Protalento, in which through Acamica I learned",
        "Desarrollo Web Full Stack (HTML, CSS, JavaScript y Bases de datos).":
          "Full Stack Web Development (HTML, CSS, JavaScript and Databases).",
        "Actualmente soy estudiante en Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Comencé mi primer trabajo en":
          "I am currently a student in Systems Engineering at the Technological University of Pereira. I started my first job at",
        "liderando diferentes proyectos en Magento (Rimax, Saluti, Empack), para posteriormente trabajar en":
          " leading different projects in Magento (Rimax, Saluti, Empack), to later work in",
        "desarrollando un dashboard de un proyecto llamado":
          "developing a dashboard for a project called",
        "Actualmente trabajo en": "Currently I work at",
        "en el cargo de Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje, Estas son algunas tecnologías con las que he estado trabajando recientemente:":
          "in the position of Senior Magento Frontend Developer. I am a person who is constantly learning. These are some of the technologies I have been working with recently:",
      },
    },
    es: {
      translation: {
        "Frontend Developer": "Desarrollador Frontend",
        "3 years of experience in web development, with a focus on frontend":
          "3 años de experiencia en desarrollo web, con enfoque en frontend",
        About: "Acerca de mi",
        Skills: "Habilidades",
        Experience: "Experiencia",
        Education: "Educación",
        Projects: "Proyectos",
        Contact: "Contacto",
        "Personal Projects": "Proyectos Personales",
        "Work Projects": "Proyectos Laborales",
        "Desarrollo Web Full Stack (HTML, CSS, JavaScript y Bases de datos).":
          "Desarrollo Web Full Stack (HTML, CSS, JavaScript y Bases de datos).",
        "¡Hola! 👋 Soy Daniel. Tengo 21 años y soy de Colombia, mi interés por el Desarrollo de Software nació en 2017 cuando me llamó la atención como desarrollaban los juegos, comencé haciendo cosas muy básicas en Unity junto a un amigo, en 2020 decidí hacer parte de Protalento, en la que atraves de Acamica aprendí":
          "¡Hola! 👋 Soy Daniel. Tengo 21 años y soy de Colombia, mi interés por el Desarrollo de Software nació en 2017 cuando me llamó la atención como desarrollaban los juegos, comencé haciendo cosas muy básicas en Unity junto a un amigo, en 2020 decidí hacer parte de Protalento, en la que atraves de Acamica aprendí",
        "Actualmente soy estudiante en Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Comencé mi primer trabajo en":
          "Actualmente soy estudiante en Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Comencé mi primer trabajo en",
        "desarrollando un dashboard de un proyecto llamado":
          "desarrollando un dashboard de un proyecto llamado",
        "liderando diferentes proyectos en Magento (Rimax, Saluti, Empack), para posteriormente trabajar en":
          "liderando diferentes proyectos en Magento (Rimax, Saluti, Empack), para posteriormente trabajar en",
          "en el cargo de Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje, Estas son algunas tecnologías con las que he estado trabajando recientemente:": "en el cargo de Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje, Estas son algunas tecnologías con las que he estado trabajando recientemente:",
      },
    },
  },
  lng: "en", // Lenguaje inicial
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
