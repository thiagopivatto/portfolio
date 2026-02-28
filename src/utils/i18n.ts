import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        title: 'Senior Software Quality Engineer | SDET | Test Automation',
        subtitle: 'Test automation specialist with 8 years of experience across healthcare, finance, eCommerce, and weather.',
        ctaContact: 'Contact Me',
        ctaDownload: 'Download CV'
      },
      about: {
        title: 'About Me',
        subtitle: 'Senior QA Engineer and test automation specialist',
        location: 'Based in São Paulo, Brazil',
        experience: '8 Years Experience',
        education: {
          title: 'Education',
          degree: 'B.Sc in Computer Engineering',
          technician: 'Computer Technician'
        },
        languages: {
          title: 'Languages',
          portuguese: 'Portuguese',
          english: 'English',
          spanish: 'Spanish'
        }
      }
      // ... outras traduções em inglês
    }
  },
  pt: {
    translation: {
      header: {
        about: 'Sobre',
        experience: 'Experiência',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato'
      },
      hero: {
        title: 'Engenheiro de Qualidade de Software Sênior | SDET | Automação de Testes',
        subtitle: 'Especialista em automação de testes com 8 anos de experiência em saúde, finanças, eCommerce e clima.',
        ctaContact: 'Contate-me',
        ctaDownload: 'Baixar CV'
      },
      about: {
        title: 'Sobre Mim',
        subtitle: 'Engenheiro de QA Sênior e especialista em automação de testes',
        location: 'Localizado em São Paulo, Brasil',
        experience: '8 Anos de Experiência',
        education: {
          title: 'Educação',
          degree: 'Bacharelado em Engenharia da Computação',
          technician: 'Técnico em Informática'
        },
        languages: {
          title: 'Idiomas',
          portuguese: 'Português',
          english: 'Inglês',
          spanish: 'Espanhol'
        }
      }
      // ... outras traduções em português
    }
  },
  es: {
    translation: {
      header: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto'
      },
      hero: {
        title: 'Ingeniero de Calidad de Software Senior | SDET | Automatización de Pruebas',
        subtitle: 'Especialista en automatización con 8 años de experiencia en salud, finanzas, eCommerce y clima.',
        ctaContact: 'Contáctame',
        ctaDownload: 'Descargar CV'
      },
      about: {
        title: 'Sobre Mí',
        subtitle: 'Ingeniero de QA Senior y especialista en automatización de pruebas',
        location: 'Ubicado en São Paulo, Brasil',
        experience: '8 Años de Experiencia',
        education: {
          title: 'Educación',
          degree: 'Ingeniería en Computación',
          technician: 'Técnico en Informática'
        },
        languages: {
          title: 'Idiomas',
          portuguese: 'Portugués',
          english: 'Inglés',
          spanish: 'Español'
        }
      }
      // ... outras traduções em espanhol
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // idioma padrão
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;