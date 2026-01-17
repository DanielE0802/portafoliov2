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
