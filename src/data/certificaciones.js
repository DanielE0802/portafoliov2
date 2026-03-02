/**
 * Public certificate files live in /public/certificaciones.
 *
 * Each certificate has detailed metadata for display.
 */

const toPublicCertificateUrl = (fileName) => {
  return `/certificaciones/${encodeURIComponent(fileName)}`;
};

/**
 * @typedef {Object} Certification
 * @property {string} id
 * @property {string} title
 * @property {string} issuer
 * @property {string} year
 * @property {string} description
 * @property {string[]} tags
 * @property {string} fileName
 * @property {string} fileUrl
 * @property {string|null} credentialId
 * @property {string|null} verifyUrl
 * @property {string|null} previewImage
 */

/** @type {Certification[]} */
const certificaciones = [
  {
    id: "UC-beeceb5f-13ab-4bca-82e1-88f0e6e9a327",
    title: "FastAPI - The Complete Course 2026 (Beginner + Advanced)",
    issuer: "Udemy",
    year: "Febrero 2026",
    description: "Curso completo de FastAPI 2026 para desarrollo de APIs modernas. 21.5 horas de contenido teórico y práctico cubriendo desde fundamentos hasta técnicas avanzadas.",
    tags: ["FastAPI", "Python", "Backend", "REST API"],
    fileName: "UC-beeceb5f-13ab-4bca-82e1-88f0e6e9a327.pdf",
    fileUrl: toPublicCertificateUrl("UC-beeceb5f-13ab-4bca-82e1-88f0e6e9a327.pdf"),
    credentialId: "UC-beeceb5f-13ab-4bca-82e1-88f0e6e9a327",
    verifyUrl: "https://www.udemy.com/certificate/UC-beeceb5f-13ab-4bca-82e1-88f0e6e9a327/",
    previewImage: "/certificaciones/previews/UC-beeceb5f-13ab-4bca-82e1-88f0e6e9a327.jpg",
  },
  {
    id: "diploma-intro-nube",
    title: "Curso de Introducción a la Nube",
    issuer: "Platzi",
    year: "Febrero 2026",
    description: "Fundamentos de cloud computing: modelos de servicio (IaaS, PaaS, SaaS), proveedores, arquitecturas cloud-native y estrategias de migración. 20 horas de teoría y práctica.",
    tags: ["Cloud Computing", "AWS", "Azure", "Fundamentos"],
    fileName: "diploma-intro-nube.pdf",
    fileUrl: toPublicCertificateUrl("diploma-intro-nube.pdf"),
    credentialId: "ac5e5b36-b297-4fa2-a3f0-4f7b7acc90a7",
    verifyUrl: "https://platzi.com/@danielestupinanr/",
    previewImage: "/certificaciones/previews/diploma-intro-nube.jpg",
  },
  {
    id: "diploma-angular-avanzado",
    title: "Curso de Angular Avanzado",
    issuer: "Platzi",
    year: "Febrero 2026",
    description: "Técnicas avanzadas de Angular: lazy loading, interceptores, guards, RxJS, gestión de estado con NgRx y arquitectura de aplicaciones enterprise. 16 horas de teoría y práctica.",
    tags: ["Angular", "Frontend", "TypeScript", "RxJS"],
    fileName: "diploma-angular-avanzado.pdf",
    fileUrl: toPublicCertificateUrl("diploma-angular-avanzado.pdf"),
    credentialId: "ac5edaab-381f-4792-a7d6-89a52f4606e7",
    verifyUrl: "https://platzi.com/@danielestupinanr/",
    previewImage: "/certificaciones/previews/diploma-angular-avanzado.jpg",
  },
  {
    id: "diploma-react-avanzado",
    title: "Curso de ReactJS Avanzado",
    issuer: "Platzi",
    year: "Octubre 2025",
    description: "Patrones avanzados, optimización de rendimiento, hooks personalizados, gestión de estado global y arquitectura escalable en React. 16 horas de teoría y práctica.",
    tags: ["React", "Frontend", "Hooks", "Performance"],
    fileName: "diploma-react-avanzado (2).pdf",
    fileUrl: toPublicCertificateUrl("diploma-react-avanzado (2).pdf"),
    credentialId: "c63f8090-7095-4975-82db-90548e6091cf",
    verifyUrl: "https://platzi.com/@danielestupinanr/",
    previewImage: "/certificaciones/previews/diploma-react-avanzado (2).jpg",
  },
  {
    id: "diploma-nestjs",
    title: "Curso de Backend con NestJS",
    issuer: "Platzi",
    year: "Septiembre 2025",
    description: "Desarrollo de APIs REST escalables con NestJS: inyección de dependencias, módulos, controladores, servicios, TypeORM y autenticación. 18 horas de teoría y práctica.",
    tags: ["NestJS", "Backend", "TypeScript", "REST API"],
    fileName: "diploma-nestjs (1).pdf",
    fileUrl: toPublicCertificateUrl("diploma-nestjs (1).pdf"),
    credentialId: "8b0b0318-aa22-4ed4-a696-0ef878df76cd",
    verifyUrl: "https://platzi.com/@danielestupinanr/",
    previewImage: "/certificaciones/previews/diploma-nestjs (1).jpg",
  },
  {
    id: "diploma-docker",
    title: "Curso de Docker",
    issuer: "Platzi",
    year: "Mayo 2023",
    description: "Containerización de aplicaciones, creación de imágenes, Docker Compose, orquestación y mejores prácticas de despliegue con Docker. 21 horas de teoría y práctica.",
    tags: ["Docker", "DevOps", "Containers", "CI/CD"],
    fileName: "diploma-docker (1).pdf",
    fileUrl: toPublicCertificateUrl("diploma-docker (1).pdf"),
    credentialId: "c4bde742-ebe6-4f1d-8979-080f843d402d",
    verifyUrl: "https://platzi.com/@danielestupinanr/",
    previewImage: "/certificaciones/previews/diploma-docker (1).jpg",
  },
  {
    id: "diploma-javascript-practico-2021",
    title: "Curso Práctico de JavaScript",
    issuer: "Platzi",
    year: "Marzo 2022",
    description: "Fundamentos de JavaScript aplicados a proyectos prácticos: manipulación del DOM, eventos, APIs del navegador y resolución de problemas del mundo real. 16 horas de teoría y práctica.",
    tags: ["JavaScript", "Frontend", "DOM", "Web APIs"],
    fileName: "diploma-javascript-practico-2021.pdf",
    fileUrl: toPublicCertificateUrl("diploma-javascript-practico-2021.pdf"),
    credentialId: "17c7f459-e145-4d5a-aa45-fade41313320",
    verifyUrl: "https://platzi.com/@danielestupinanr/",
    previewImage: "/certificaciones/previews/diploma-javascript-practico-2021.jpg",
  },
];

export default certificaciones;
