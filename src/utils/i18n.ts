import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definição dos tipos para as traduções
type TranslationKeys = {
  header: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaContact: string;
    ctaDownload: string;
  };
  about: {
    title: string;
    subtitle: string;
    location: string;
    experience: string;
    education: {
      title: string;
      degree: string;
      technician: string;
    };
    languages: {
      title: string;
      portuguese: string;
      english: string;
      spanish: string;
    };
  };
  // ... outras seções
};

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
        title: 'QA Engineer & Computer Engineer',
        subtitle: 'Test automation specialist with expertise in implementing robust testing solutions.',
        ctaContact: 'Contact Me',
        ctaDownload: 'Download CV'
      },
      about: {
        title: 'About Me',
        subtitle: 'Experienced Java developer and test automation engineer',
        location: 'Based in São Paulo, Brazil',
        experience: '7+ Years Experience',
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
        title: 'Engenheiro de QA & Engenheiro da Computação',
        subtitle: 'Especialista em automação de testes com experiência em implementar soluções robustas.',
        ctaContact: 'Contate-me',
        ctaDownload: 'Baixar CV'
      },
      about: {
        title: 'Sobre Mim',
        subtitle: 'Desenvolvedor Java experiente e engenheiro de automação de testes',
        location: 'Localizado em São Paulo, Brasil',
        experience: '7+ Anos de Experiência',
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
        title: 'Ingeniero de QA & Ingeniero en Computación',
        subtitle: 'Especialista en automatización de pruebas con experiencia en implementar soluciones robustas.',
        ctaContact: 'Contáctame',
        ctaDownload: 'Descargar CV'
      },
      about: {
        title: 'Sobre Mí',
        subtitle: 'Desarrollador Java experimentado e ingeniero de automatización de pruebas',
        location: 'Ubicado en São Paulo, Brasil',
        experience: '7+ Años de Experiencia',
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