import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
          translation: {
            '3 years of experience in web development, with a focus on frontend': '3 years of experience in web development, with a focus on frontend',
            'Frontend Developer': 'Frontend Developer',
            'About': 'About',
            'Skills': 'Skills',
            'Experience': 'Experience',
            'Education': 'Education',
            'Projects': 'Projects',
            'Contact': 'Contact',
          }
        },
        es: {
          translation: {
            'Frontend Developer': 'Desarrollador Frontend',
            '3 years of experience in web development, with a focus on frontend': '3 años de experiencia en desarrollo web, con enfoque en frontend',   
            'About': 'Acerca de mi',
            'Skills': 'Habilidades',
            'Experience': 'Experiencia',
            'Education': 'Educación',
            'Projects': 'Proyectos',
            'Contact': 'Contacto',
            "Personal Projects": "Proyectos Personales",
            "Work Projects": "Proyectos Laborales",
          }
        }
      },
    lng: 'es', // Lenguaje inicial
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
