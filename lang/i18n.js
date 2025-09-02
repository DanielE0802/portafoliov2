import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Header and navigation
        "Frontend Developer": "Frontend Developer",
        About: "About",
        Skills: "Skills",
        Experience: "Experience",
        Education: "Education",
        Projects: "Projects",
        Contact: "Contact",
        "Personal Projects": "Personal Projects",
        "Work Projects": "Work Projects",
        "Technologies used": "Technologies used",
        "Technologies used:": "Technologies used:",
        "Selected projects": "Selected projects",
        "Work experience": "Work experience",
        "In-page jump links": "In-page jump links",
        "Social media": "Social media",
        "About me": "About me",
        "Technology skills": "Technology skills",
        "Select language": "Select language",

        "API REST completa para gestión de finanzas personales con FastAPI, PostgreSQL y despliegue en Heroku + Aiven. Incluye autenticación JWT, CRUD completo de transacciones y reportes financieros.":
          "Complete REST API for personal finance management with FastAPI, PostgreSQL, and deployment on Heroku + Aiven. Includes JWT authentication, full CRUD for transactions, and financial reports.",

        "Sistema ERP que permite la contabilidad, sistema POS. Herramienta para que el empresario tenga acceso a un software que le permita planificar, analizar y gestionar toda su empresa. Además de contar con una interfaz de usuario amigable y rápida.":
        "ERP system that allows accounting and POS system. A tool for entrepreneurs to have access to software that allows them to plan, analyze, and manage their entire company. In addition to having a user-friendly and fast interface.",

        "API de gestión de tareas con FastAPI y MySQL. Incluye operaciones CRUD avanzadas, sistema de autenticación robusto, documentación automática con Swagger y testing con pytest.": "Task management API with FastAPI and MySQL. Includes advanced CRUD operations, robust authentication system, automatic documentation with Swagger, and testing with pytest.",
        // Personal info
        "Desarrollador especializado en Frontend con más de 4 años de experiencia en Magento 2, React, NestJS y FastAPI. Apasionado por construir experiencias digitales robustas, rápidas y escalables.":
          "Frontend developer with over 4 years of experience in Magento 2, React, NestJS, and FastAPI. Passionate about building robust, fast, and scalable digital experiences.",

        // About section - main text blocks
        "¡Hola! 👋 Soy Daniel. Tengo {{age}} años y soy de Colombia, mi interés por el Desarrollo de Software nació en 2017 cuando me llamó la atención como desarrollaban los juegos, comencé haciendo cosas muy básicas en Unity junto a un amigo, en 2020 decidí hacer parte de Protalento, en la que atraves de Acamica aprendí":
          "Hello! 👋 I'm Daniel. I'm {{age}} years old and I'm from Colombia. My interest in Software Development was born in 2017 when I was drawn to how games were developed. I started doing very basic things in Unity with a friend. In 2020 I decided to be part of Protalento, where through Acamica I learned",

        "Desarrollo Web Full Stack (HTML, CSS, JavaScript y Bases de datos).":
          "Full Stack Web Development (HTML, CSS, JavaScript and Databases).",

        "Actualmente soy estudiante en Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Comencé mi primer trabajo en":
          "I am currently a student in Systems Engineering at the Technological University of Pereira. I started my first job at",

        "liderando diferentes proyectos en Magento (Rimax, Saluti, Empack), para posteriormente trabajar en":
          "leading different projects in Magento (Rimax, Saluti, Empack), to later work at",

        "desarrollando un dashboard de un proyecto llamado":
          "developing a dashboard for a project called",

        "Actualmente trabajo en": "Currently I work at",

        "en el cargo de Semi-Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje, Estas son algunas tecnologías con las que he estado trabajando recientemente:":
          "in the position of Semi-Senior Magento Frontend Developer. I am a person who is constantly learning. These are some of the technologies I have been working with recently:",

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
        },

        // Experience descriptions
        "Implementación de nuevas funcionalidades, vistas e interaciónes en la plataforma de e-commerce de Movistar Peru, trabajando en conjunto con el equipo para la mejora continua de la plataforma, como implementación de KO en el flujo de compra, integración sad-path, implementación de nuevas vistas, entre otros.":
          "Implementation of new functionalities, views and interactions in the Movistar Peru e-commerce platform, working together with the team for continuous improvement of the platform, such as KO implementation in the purchase flow, sad-path integration, implementation of new views, among others.",

        "Desarrollo del dashboard para el proyecto Universum, el cual permite a los docentes y administrativos de las instituciones educativas gestionar y analisar la información suminitrada por el juego, permitiendo la generación de reportes y estadísticas de las actividades. Permitiendo filtrar por institución, grado, grupo, estudiante, entre otros. Actualmente continuo trabajando en otros proyectos de la empresa.":
          "Development of the dashboard for the Universum project, which allows teachers and administrators of educational institutions to manage and analyze the information provided by the game, enabling the generation of reports and statistics of activities. Allowing filtering by institution, grade, group, student, among others. Currently I continue working on other company projects.",

        "Lideré y participé en diferentes proyectos como Frontend Developer para la migración y desarrollo de tiendas e-commerce utilizando la plataforma de Magento 2 Community y Commerce, además, capacitación y mejoras internas de la empresa. Proyectos: Rimax, Saluti, Empack, entre otros.":
          "I led and participated in different projects as Frontend Developer for the migration and development of e-commerce stores using the Magento 2 Community and Commerce platform, in addition, training and internal improvements of the company. Projects: Rimax, Saluti, Empack, among others.",

        // New Omni.Pro experience description
        "Desarrollo de soluciones eCommerce en Magento 2 Cloud y Enterprise para Kohler, Sportline y Polar. Personalización de temas (PHTML, XML, Knockout.js), implementación de módulos personalizados y optimización de SEO y rendimiento.":
          "Developed eCommerce solutions in Magento 2 Cloud & Enterprise for Kohler, Sportline, and Polar. Customized themes (PHTML, XML, Knockout.js), implemented custom modules, and optimized SEO and performance."
      },
    },
    es: {
      translation: {
        // Header and navigation
        "Frontend Developer": "Desarrollador Frontend",
        About: "Acerca de mi",
        Skills: "Habilidades",
        Experience: "Experiencia",
        Education: "Educación",
        Projects: "Proyectos",
        Contact: "Contacto",
        "Personal Projects": "Proyectos Personales",
        "Work Projects": "Proyectos Laborales",
        "Technologies used": "Tecnologías utilizadas",
        "Technologies used:": "Tecnologías utilizadas:",
        "Selected projects": "Proyectos seleccionados",
        "Work experience": "Experiencia laboral",
        "In-page jump links": "Enlaces de navegación interna",
        "Social media": "Redes sociales",
        "About me": "Acerca de mí",
        "Technology skills": "Habilidades tecnológicas",
        "Select language": "Seleccionar idioma",
        "Sistema ERP que permite la contabilidad, sistema POS. Herramienta para que el empresario tenga acceso a un software que le permita planificar, analizar y gestionar toda su empresa. Además de contar con una interfaz de usuario amigable y rápida.":
          "Sistema ERP que permite la contabilidad, sistema POS. Herramienta para que el empresario tenga acceso a un software que le permita planificar, analizar y gestionar toda su empresa. Además de contar con una interfaz de usuario amigable y rápida.",

        // Personal info
        "Desarrollador especializado en Frontend con más de 4 años de experiencia en Magento 2, React, NestJS y FastAPI. Apasionado por construir experiencias digitales robustas, rápidas y escalables.":
          "Desarrollador especializado en Frontend con más de 4 años de experiencia en Magento 2, React, NestJS y FastAPI. Apasionado por construir experiencias digitales robustas",

        "API REST completa para gestión de finanzas personales con FastAPI, PostgreSQL y despliegue en Heroku + Aiven. Incluye autenticación JWT, CRUD completo de transacciones y reportes financieros.":
          "API REST completa para gestión de finanzas personales con FastAPI, PostgreSQL y despliegue en Heroku + Aiven. Incluye autenticación JWT, CRUD completo de transacciones y reportes financieros.",

        // About section - main text blocks
        "¡Hola! 👋 Soy Daniel. Tengo {{age}} años y soy de Colombia, mi interés por el Desarrollo de Software nació en 2017 cuando me llamó la atención como desarrollaban los juegos, comencé haciendo cosas muy básicas en Unity junto a un amigo, en 2020 decidí hacer parte de Protalento, en la que atraves de Acamica aprendí":
          "¡Hola! 👋 Soy Daniel. Tengo {{age}} años y soy de Colombia, mi interés por el Desarrollo de Software nació en 2017 cuando me llamó la atención cómo desarrollaban los juegos. Comencé haciendo cosas muy básicas en Unity junto a un amigo. En 2020 decidí hacer parte de Protalento, en la que a través de Acamica aprendí",

        "Desarrollo Web Full Stack (HTML, CSS, JavaScript y Bases de datos).":
          "Desarrollo Web Full Stack (HTML, CSS, JavaScript y Bases de datos).",

        "Actualmente soy estudiante en Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Comencé mi primer trabajo en":
          "Actualmente soy estudiante en Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Comencé mi primer trabajo en",

        "liderando diferentes proyectos en Magento (Rimax, Saluti, Empack), para posteriormente trabajar en":
          "liderando diferentes proyectos en Magento (Rimax, Saluti, Empack), para posteriormente trabajar en",

        "desarrollando un dashboard de un proyecto llamado":
          "desarrollando un dashboard de un proyecto llamado",

        "Actualmente trabajo en": "Actualmente trabajo en",

        "en el cargo de Semi-Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje, Estas son algunas tecnologías con las que he estado trabajando recientemente:":
          "en el cargo de Semi-Senior Magento Frontend Developer. Soy una persona que está en constante aprendizaje. Estas son algunas tecnologías con las que he estado trabajando recientemente:",

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
        },

        // Experience descriptions
        "Implementación de nuevas funcionalidades, vistas e interaciónes en la plataforma de e-commerce de Movistar Peru, trabajando en conjunto con el equipo para la mejora continua de la plataforma, como implementación de KO en el flujo de compra, integración sad-path, implementación de nuevas vistas, entre otros.":
          "Implementación de nuevas funcionalidades, vistas e interacciones en la plataforma de e-commerce de Movistar Perú, trabajando en conjunto con el equipo para la mejora continua de la plataforma, como implementación de KO en el flujo de compra, integración sad-path, implementación de nuevas vistas, entre otros.",

        "Desarrollo del dashboard para el proyecto Universum, el cual permite a los docentes y administrativos de las instituciones educativas gestionar y analisar la información suminitrada por el juego, permitiendo la generación de reportes y estadísticas de las actividades. Permitiendo filtrar por institución, grado, grupo, estudiante, entre otros. Actualmente continuo trabajando en otros proyectos de la empresa.":
          "Desarrollo del dashboard para el proyecto Universum, el cual permite a los docentes y administrativos de las instituciones educativas gestionar y analizar la información suministrada por el juego, permitiendo la generación de reportes y estadísticas de las actividades. Permitiendo filtrar por institución, grado, grupo, estudiante, entre otros. Actualmente continúo trabajando en otros proyectos de la empresa.",

        "Lideré y participé en diferentes proyectos como Frontend Developer para la migración y desarrollo de tiendas e-commerce utilizando la plataforma de Magento 2 Community y Commerce, además, capacitación y mejoras internas de la empresa. Proyectos: Rimax, Saluti, Empack, entre otros.":
          "Lideré y participé en diferentes proyectos como Frontend Developer para la migración y desarrollo de tiendas e-commerce utilizando la plataforma de Magento 2 Community y Commerce, además, capacitación y mejoras internas de la empresa. Proyectos: Rimax, Saluti, Empack, entre otros.",

        // New Omni.Pro experience description
        "Desarrollo de soluciones eCommerce en Magento 2 Cloud y Enterprise para Kohler, Sportline y Polar. Personalización de temas (PHTML, XML, Knockout.js), implementación de módulos personalizados y optimización de SEO y rendimiento.":
          "Desarrollo de soluciones eCommerce en Magento 2 Cloud y Enterprise para Kohler, Sportline y Polar. Personalización de temas (PHTML, XML, Knockout.js), implementación de módulos personalizados y optimización de SEO y rendimiento."
      },
    },
  },
  lng: "es", // Cambio el idioma inicial a español
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
