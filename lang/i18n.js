import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Front-end developer with over four years of experience in Magento 2, React, NestJS, and FastAPI. Passionate about building robust, fast, and scalable digital experiences.":
          "Front-end developer with over four years of experience in Magento 2, React, NestJS, and FastAPI. Passionate about building robust, fast, and scalable digital experiences.",
        "Frontend Developer": "Frontend Developer",
        About: "About",
        Skills: "Skills",
        Experience: "Experience",
        Education: "Education",
        Projects: "Projects",
        Contact: "Contact",
        "Personal Projects": "Personal Projects",
        "Work Projects": "Work Projects",
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
        
        // About section
        "about": {
          "downloadCV": "Download CV"
        },

        // Modal translations
        "modal": {
          "close": "Close"
        },

        // Projects modal translations
        "projects": {
          "modal": {
            "description": "Description",
            "challenges": "Challenges",
            "learnings": "What I Learned",
            "technologies": "Technologies Used",
            "visitProject": "Visit Project",
            "viewCode": "View Code"
          }
        },

        // Contact form translations
        "contact": {
          "title": "Contact Me",
          "description": "Have a project in mind or want to collaborate? I'd love to hear from you! Send me a message and let's discuss how we can work together.",
          "form": {
            "name": "Full Name",
            "namePlaceholder": "Your full name",
            "email": "Email Address",
            "emailPlaceholder": "your.email@example.com",
            "subject": "Subject",
            "subjectPlaceholder": "What's this about?",
            "message": "Message",
            "messagePlaceholder": "Tell me about your project or idea...",
            "send": "Send Message",
            "sending": "Sending...",
            "successMessage": "Thank you for your message! I'll get back to you as soon as possible.",
            "errorMessage": "Oops! Something went wrong. Please try again or contact me directly."
          }
        }
      },
    },
    es: {
      translation: {
        "Frontend Developer": "Desarrollador Frontend",
        "Front-end developer with over four years of experience in Magento 2, React, NestJS, and FastAPI. Passionate about building robust, fast, and scalable digital experiences.":
          "Desarrollador especializado en Frontend con más de 4 años de experiencia en Magento 2, React, NestJS y FastAPI. Apasionado por construir experiencias digitales robustas, rápidas y escalables.",
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
        "Actualmente trabajo en": "Actualmente trabajo en",
        "en el cargo de Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje, Estas son algunas tecnologías con las que he estado trabajando recientemente:": 
          "en el cargo de Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje, Estas son algunas tecnologías con las que he estado trabajando recientemente:",

        // About section
        "about": {
          "downloadCV": "Descargar CV"
        },

        // Modal translations
        "modal": {
          "close": "Cerrar"
        },

        // Projects modal translations
        "projects": {
          "modal": {
            "description": "Descripción",
            "challenges": "Desafíos",
            "learnings": "Lo que Aprendí",
            "technologies": "Tecnologías Utilizadas",
            "visitProject": "Visitar Proyecto",
            "viewCode": "Ver Código"
          }
        },

        // Contact form translations
        "contact": {
          "title": "Contáctame",
          "description": "¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría escucharte! Envíame un mensaje y discutamos cómo podemos trabajar juntos.",
          "form": {
            "name": "Nombre Completo",
            "namePlaceholder": "Tu nombre completo",
            "email": "Correo Electrónico",
            "emailPlaceholder": "tu.correo@ejemplo.com",
            "subject": "Asunto",
            "subjectPlaceholder": "¿De qué se trata?",
            "message": "Mensaje",
            "messagePlaceholder": "Cuéntame sobre tu proyecto o idea...",
            "send": "Enviar Mensaje",
            "sending": "Enviando...",
            "successMessage": "¡Gracias por tu mensaje! Te responderé lo antes posible.",
            "errorMessage": "¡Ups! Algo salió mal. Por favor intenta de nuevo o contáctame directamente."
          }
        }
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
