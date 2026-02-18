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
        "about.bio.paragraph1":
          "Software developer with experience in modern frontend development and scalable web platforms, focused on building clean, efficient, and business-oriented user interfaces.",
        "about.bio.paragraph2":
          "I have worked in real production environments developing e-commerce solutions, dashboards, and SaaS platforms, contributing to both frontend implementation and backend integration. Throughout my career, I've collaborated with cross-functional teams, following best practices in code quality, performance, and maintainability.",
        "about.bio.paragraph3":
          "I have strong experience with Magento 2, building and customizing e-commerce stores while optimizing user experience and performance. In parallel, I've expanded my skill set toward modern frontend and full-stack development, working with React, Next.js, Vite, Material UI, Redux, and RTK Query, as well as backend technologies such as FastAPI, NestJS, and REST APIs.",
        "about.bio.paragraph4":
          "I am currently developing Ally360, a personal SaaS project where I built both the frontend and backend, applying clean architecture principles, state management, API consumption, and responsive design.",
        "about.bio.paragraph5":
          "I consider myself an analytical, self-driven developer with a strong focus on continuous improvement and delivering well-structured solutions that create real value for users and businesses.",
        
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

        "projects.ally360.card":
          "SaaS ERP + POS for Colombian SMBs: touch-first multi-tab POS, multi-warehouse inventory, real-time analytics, and DIAN-ready invoicing flows. React 19 + TypeScript + MUI frontend and a multi-tenant FastAPI + PostgreSQL backend.",

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
            "openApp": "Open App",
            "apiDocs": "API Docs",
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
        "about.bio.paragraph1":
          "Desarrollador de software con experiencia en frontend moderno y plataformas web escalables, enfocado en construir interfaces claras, eficientes y orientadas a negocio.",
        "about.bio.paragraph2":
          "He trabajado en entornos reales de producción desarrollando aplicaciones e-commerce, dashboards y plataformas SaaS, participando tanto en la construcción de interfaces como en la integración con servicios backend. A lo largo de mi carrera he colaborado con equipos multidisciplinarios, siguiendo buenas prácticas de desarrollo, rendimiento y mantenibilidad del código.",
        "about.bio.paragraph3":
          "Cuento con experiencia sólida en Magento 2, donde he desarrollado y personalizado tiendas para diferentes marcas, optimizando la experiencia de usuario y el rendimiento. En paralelo, he ampliado mi perfil hacia el frontend moderno y desarrollo full-stack, trabajando con React, Next.js, Vite, Material UI, Redux y RTK Query, así como en el backend con FastAPI, NestJS y APIs REST.",
        "about.bio.paragraph4":
          "Actualmente desarrollo Ally360, un proyecto SaaS personal donde he construido tanto el frontend como el backend, aplicando principios de arquitectura limpia, gestión de estado, consumo de APIs y diseño responsive.",
        "about.bio.paragraph5":
          "Me caracterizo por ser una persona analítica, autodidacta y orientada a la mejora continua, con interés en crear soluciones bien estructuradas que aporten valor real al usuario y al negocio.",
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

        "projects.ally360.card":
          "SaaS ERP + POS para PYMES colombianas: POS táctil multiventana, inventario multibodega, analítica en tiempo real e integración DIAN. Frontend en React 19 + TypeScript + MUI y backend multi-tenant en FastAPI + PostgreSQL.",

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
            "openApp": "Abrir App",
            "apiDocs": "Docs API",
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
