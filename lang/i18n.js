import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Header and navigation
        "Frontend Developer": "Software Developer",
        "Software Developer": "Software Developer",
        "Full Stack Developer — React & NestJS": "Full Stack Developer — React & NestJS",
        "Magento Developer — eCommerce & Integrations": "Magento Developer — eCommerce & Integrations",
        "Senior Software Developer — Adobe Commerce Cloud": "Senior Software Developer — Adobe Commerce Cloud",
        "Senior Front-End Magento Developer": "Senior Front-End Magento Developer",
        About: "About",
        Skills: "Skills",
        Experience: "Experience",
        Education: "Education",
        Projects: "Projects",
        Contact: "Contact",
        "Personal Projects": "Personal Projects",
        "Work Projects": "Work Projects",
        "Courses and Certifications": "Courses and Certifications",
        "about.bio.paragraph1":
          "Software developer focused on building complete, production-ready web applications. I work across the full stack — architecting React and Next.js frontends, designing REST APIs, and shipping backend services with FastAPI and NestJS.",
        "about.bio.paragraph2":
          "Over the past 4+ years I've worked on real production environments: enterprise eCommerce platforms, SaaS dashboards, and data-driven applications. I've contributed to both the frontend layer and backend integrations, collaborating with cross-functional teams and taking ownership of full features end to end.",
        "about.bio.paragraph3":
          "I have solid experience in Magento 2 / Adobe Commerce Cloud, where I've built custom themes, modules, and third-party integrations for international brands — with measurable results like improving Core Web Vitals from 62 to 91 and cutting checkout load time from 10 seconds to 1.5 seconds.",
        "about.bio.paragraph4":
          "Currently developing Ally360, a multi-tenant ERP + POS SaaS platform where I've made every architectural decision — from database modeling and API design to frontend component systems and deployment. Accredited by Fondo Emprender.",
        "about.bio.paragraph5":
          "I value clean architecture, maintainable code, and solutions that create real business value.",
                "Software Developer with 4+ years of experience building scalable web applications — from React & Next.js frontends to REST APIs with FastAPI and NestJS.":
                  "Software Developer with 4+ years of experience building scalable web applications — from React & Next.js frontends to REST APIs with FastAPI and NestJS.",

        
        "Technologies used": "Technologies used",
        "Technologies used:": "Technologies used:",
        "Selected projects": "Selected projects",
        "Work experience": "Work experience",
        "In-page jump links": "In-page jump links",
        "Social media": "Social media",
        "About me": "About me",
        "Technology skills": "Technology skills",
        "Select language": "Select language",

        "certificaciones": {
          "aria": "Courses and certifications",
          "description": "A curated list of courses and certificates I've completed. You can open or download each file.",
          "fields": {
            "year": "Year:",
            "credential": "Credential:",
            "verification": "Verification:",
            "skills": "Skills/topics"
          },
          "actions": {
            "preview": "Preview",
            "view": "View",
            "viewFull": "Open Full PDF",
            "download": "Download",
            "verify": "Verify",
            "viewAria": "Open certificate '{{title}}' in a new tab",
            "downloadAria": "Download certificate '{{title}}'",
            "verifyAria": "Open verification link for '{{title}}' in a new tab"
          }
        },

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
          "in the position of a Semi-senior Magento Developer. I am a person who is constantly learning. These are some of the technologies I have been working with recently:",

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
        "Implementación de nuevas funcionalidades, vistas e interaciónes en la plataforma de e-commerce de Movistar Peru, trabajando en conjunto con el equipo para la mejora continua de la plataforma, como implementación de KO en el flujo de compra, integración sad-path, implementación de nuevas vistas, entre otros. Reduje el tiempo de carga del checkout de ~10s a ~1.5s mediante optimizaciones frontend y backend en pantallas críticas.":
          "Implementation of new functionalities, views and interactions in the Movistar Peru e-commerce platform, working together with the team for continuous improvement of the platform, such as KO implementation in the purchase flow, sad-path integration, implementation of new views, among others. Reduced checkout load time from ~10s to ~1.5s through frontend and backend optimizations across critical screens.",

        "Construí desde cero una plataforma de análisis de datos para el proyecto Universum — con responsabilidad completa de frontend y backend. La plataforma permite a docentes y administradores gestionar y analizar datos educativos, generar reportes y filtrar estadísticas de actividad por institución, grado, grupo y estudiante. Arquitecté el frontend con React + Redux, construyendo dashboards y vistas de reportes con alta densidad de datos. Diseñé y desarrollé la API REST del backend usando NestJS + TypeORM con arquitectura modular (controllers, services, DTOs), aplicando principios de clean code en todo el desarrollo.":
          "Built a data analysis platform for the Universum project from scratch — full ownership of both frontend and backend. The platform allows teachers and administrators to manage and analyze educational data, generate reports, and filter activity statistics by institution, grade, group, and student. Architected the frontend with React + Redux, building data-rich dashboards and report views. Designed and developed the backend REST API using NestJS + TypeORM with modular architecture (controllers, services, DTOs), applying clean code principles throughout.",

        "Desarrollé y mantuve soluciones eCommerce para múltiples clientes en verticales de retail y servicios — incluyendo Evacol, Rimax, Saluti, Toscana, Empack y Casa Andina. Construí desde cero un módulo personalizado de Store Locator. Colaboré con el equipo backend para exponer endpoints REST vía Magento WebApi para integración con ERP, habilitando sincronización de datos en tiempo real entre la tienda y un sistema ERP de terceros. Di soporte a la integración de pasarela de pagos PayU en múltiples proyectos, manejando flujos de tokenización y validación de transacciones. Este rol fue fundamental: aquí desarrollé un dominio profundo de todo el stack de Magento — temas personalizados, Knockout.js, desarrollo de módulos e integraciones con terceros.":
          "Developed and maintained eCommerce solutions for multiple clients across retail and services verticals — including Evacol, Rimax, Saluti, Toscana, Empack, and Casa Andina. Built a custom Store Locator module from scratch. Collaborated with the backend team to expose REST API endpoints via Magento WebApi for ERP integration, enabling real-time data sync between the store and a third-party ERP system. Supported PayU payment gateway integration across multiple projects, handling tokenization and transaction validation flows. This role was foundational — where I developed deep proficiency across the full Magento stack: custom themes, Knockout.js, module development, and third-party integrations.",

        "Lideré y participé en diferentes proyectos como Frontend Developer para la migración y desarrollo de tiendas e-commerce utilizando la plataforma de Magento 2 Community y Commerce, además, capacitación y mejoras internas de la empresa. Proyectos: Rimax, Saluti, Empack, entre otros.":
          "I led and participated in different projects as Frontend Developer for the migration and development of e-commerce stores using the Magento 2 Community and Commerce platform, in addition, training and internal improvements of the company. Projects: Rimax, Saluti, Empack, among others.",

        // New Omni.Pro experience description
        "Desarrollo de soluciones eCommerce en Magento 2 Cloud y Enterprise para Kohler, Sportline y Polar. Personalización de temas (PHTML, XML, Knockout.js), implementación de módulos personalizados y optimización de SEO y rendimiento. Mejoré el puntaje de Core Web Vitals de 62 a 91, reduciendo la tasa de rebote en un 18%.":
          "Developed eCommerce solutions in Magento 2 Cloud & Enterprise for Kohler, Sportline, and Polar. Customized themes (PHTML, XML, Knockout.js), implemented custom modules, and optimized SEO and performance. Improved Core Web Vitals score from 62 to 91, reducing bounce rate by 18%."
      },
    },
    es: {
      translation: {
        // Header and navigation
        "Frontend Developer": "Software Developer",
        "Software Developer": "Desarrollador de Software",
        "Full Stack Developer — React & NestJS": "Desarrollador Full Stack — React & NestJS",
        "Magento Developer — eCommerce & Integrations": "Desarrollador Magento — eCommerce e Integraciones",
        "Senior Software Developer — Adobe Commerce Cloud": "Senior Desarrollador de Software — Adobe Commerce Cloud",
        "Senior Front-End Magento Developer": "Senior Desarrollador Front-End Magento",
        About: "Acerca de mi",
        Skills: "Habilidades",
        Experience: "Experiencia",
        Education: "Educación",
        Projects: "Proyectos",
        Contact: "Contacto",
        "Personal Projects": "Proyectos Personales",
        "Work Projects": "Proyectos Laborales",
        "Courses and Certifications": "Cursos y Certificaciones",
        "about.bio.paragraph1":
          "Desarrollador de software enfocado en construir aplicaciones web completas y listas para producción. Trabajo a lo largo del full stack — arquitectando frontends en React y Next.js, diseñando APIs REST y entregando servicios backend con FastAPI y NestJS.",
        "about.bio.paragraph2":
          "Durante los últimos 4+ años he trabajado en entornos reales de producción: plataformas eCommerce enterprise, dashboards SaaS y aplicaciones basadas en datos. He contribuido tanto en la capa frontend como en integraciones backend, colaborando con equipos multidisciplinarios y tomando ownership de features de punta a punta.",
        "about.bio.paragraph3":
          "Tengo experiencia sólida en Magento 2 / Adobe Commerce Cloud, donde he construido temas, módulos e integraciones con terceros para marcas internacionales — con resultados medibles como mejorar Core Web Vitals de 62 a 91 y reducir el tiempo de carga del checkout de 10 segundos a 1.5 segundos.",
        "about.bio.paragraph4":
          "Actualmente desarrollo Ally360, una plataforma SaaS multi-tenant de ERP + POS donde he tomado cada decisión de arquitectura — desde el modelado de base de datos y el diseño de API hasta el sistema de componentes del frontend y el despliegue. Acreditado por Fondo Emprender.",
        "about.bio.paragraph5":
          "Valoro la arquitectura limpia, el código mantenible y las soluciones que crean valor real para el negocio.",
                "Software Developer with 4+ years of experience building scalable web applications — from React & Next.js frontends to REST APIs with FastAPI and NestJS.":
                  "Desarrollador de software con más de 4 años de experiencia construyendo aplicaciones web escalables — desde frontends en React y Next.js hasta APIs REST con FastAPI y NestJS.",

        "Technologies used": "Tecnologías utilizadas",
        "Technologies used:": "Tecnologías utilizadas:",
        "Selected projects": "Proyectos seleccionados",
        "Work experience": "Experiencia laboral",
        "In-page jump links": "Enlaces de navegación interna",
        "Social media": "Redes sociales",
        "About me": "Acerca de mí",
        "Technology skills": "Habilidades tecnológicas",
        "Select language": "Seleccionar idioma",

        "certificaciones": {
          "aria": "Cursos y certificaciones",
          "description": "Una selección de cursos y certificados que he completado. Puedes abrir o descargar cada archivo.",
          "fields": {
            "year": "Año:",
            "credential": "Credencial:",
            "verification": "Verificación:",
            "skills": "Skills/temas"
          },
          "actions": {
            "preview": "Vista Previa",
            "view": "Ver",
            "viewFull": "Abrir PDF Completo",
            "download": "Descargar",
            "verify": "Verificar",
            "viewAria": "Abrir el certificado '{{title}}' en una nueva pestaña",
            "downloadAria": "Descargar el certificado '{{title}}'",
            "verifyAria": "Abrir el enlace de verificación de '{{title}}' en una nueva pestaña"
          }
        },
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
          "en el cargo de Semi-senior Magento Developer. Soy una persona que está en constante aprendizaje. Estas son algunas tecnologías con las que he estado trabajando recientemente:",

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
        "Implementación de nuevas funcionalidades, vistas e interaciónes en la plataforma de e-commerce de Movistar Peru, trabajando en conjunto con el equipo para la mejora continua de la plataforma, como implementación de KO en el flujo de compra, integración sad-path, implementación de nuevas vistas, entre otros. Reduje el tiempo de carga del checkout de ~10s a ~1.5s mediante optimizaciones frontend y backend en pantallas críticas.":
          "Implementación de nuevas funcionalidades, vistas e interacciones en la plataforma de e-commerce de Movistar Perú, trabajando en conjunto con el equipo para la mejora continua de la plataforma, como implementación de KO en el flujo de compra, integración sad-path, implementación de nuevas vistas, entre otros. Reduje el tiempo de carga del checkout de ~10s a ~1.5s mediante optimizaciones frontend y backend en pantallas críticas.",

        "Construí desde cero una plataforma de análisis de datos para el proyecto Universum — con responsabilidad completa de frontend y backend. La plataforma permite a docentes y administradores gestionar y analizar datos educativos, generar reportes y filtrar estadísticas de actividad por institución, grado, grupo y estudiante. Arquitecté el frontend con React + Redux, construyendo dashboards y vistas de reportes con alta densidad de datos. Diseñé y desarrollé la API REST del backend usando NestJS + TypeORM con arquitectura modular (controllers, services, DTOs), aplicando principios de clean code en todo el desarrollo.":
          "Construí desde cero una plataforma de análisis de datos para el proyecto Universum — con responsabilidad completa de frontend y backend. La plataforma permite a docentes y administradores gestionar y analizar datos educativos, generar reportes y filtrar estadísticas de actividad por institución, grado, grupo y estudiante. Arquitecté el frontend con React + Redux, construyendo dashboards y vistas de reportes con alta densidad de datos. Diseñé y desarrollé la API REST del backend usando NestJS + TypeORM con arquitectura modular (controllers, services, DTOs), aplicando principios de clean code en todo el desarrollo.",

        "Desarrollé y mantuve soluciones eCommerce para múltiples clientes en verticales de retail y servicios — incluyendo Evacol, Rimax, Saluti, Toscana, Empack y Casa Andina. Construí desde cero un módulo personalizado de Store Locator. Colaboré con el equipo backend para exponer endpoints REST vía Magento WebApi para integración con ERP, habilitando sincronización de datos en tiempo real entre la tienda y un sistema ERP de terceros. Di soporte a la integración de pasarela de pagos PayU en múltiples proyectos, manejando flujos de tokenización y validación de transacciones. Este rol fue fundamental: aquí desarrollé un dominio profundo de todo el stack de Magento — temas personalizados, Knockout.js, desarrollo de módulos e integraciones con terceros.":
          "Desarrollé y mantuve soluciones eCommerce para múltiples clientes en verticales de retail y servicios — incluyendo Evacol, Rimax, Saluti, Toscana, Empack y Casa Andina. Construí desde cero un módulo personalizado de Store Locator. Colaboré con el equipo backend para exponer endpoints REST vía Magento WebApi para integración con ERP, habilitando sincronización de datos en tiempo real entre la tienda y un sistema ERP de terceros. Di soporte a la integración de pasarela de pagos PayU en múltiples proyectos, manejando flujos de tokenización y validación de transacciones. Este rol fue fundamental: aquí desarrollé un dominio profundo de todo el stack de Magento — temas personalizados, Knockout.js, desarrollo de módulos e integraciones con terceros.",

        "Lideré y participé en diferentes proyectos como Frontend Developer para la migración y desarrollo de tiendas e-commerce utilizando la plataforma de Magento 2 Community y Commerce, además, capacitación y mejoras internas de la empresa. Proyectos: Rimax, Saluti, Empack, entre otros.":
          "Lideré y participé en diferentes proyectos como Frontend Developer para la migración y desarrollo de tiendas e-commerce utilizando la plataforma de Magento 2 Community y Commerce, además, capacitación y mejoras internas de la empresa. Proyectos: Rimax, Saluti, Empack, entre otros.",

        // New Omni.Pro experience description
        "Desarrollo de soluciones eCommerce en Magento 2 Cloud y Enterprise para Kohler, Sportline y Polar. Personalización de temas (PHTML, XML, Knockout.js), implementación de módulos personalizados y optimización de SEO y rendimiento. Mejoré el puntaje de Core Web Vitals de 62 a 91, reduciendo la tasa de rebote en un 18%.":
          "Desarrollo de soluciones eCommerce en Magento 2 Cloud y Enterprise para Kohler, Sportline y Polar. Personalización de temas (PHTML, XML, Knockout.js), implementación de módulos personalizados y optimización de SEO y rendimiento. Mejoré el puntaje de Core Web Vitals de 62 a 91, reduciendo la tasa de rebote en un 18%."
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
