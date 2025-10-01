import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  it: {
    translation: {
      nav: {
        home: "Home",
        portfolio: "Portfolio",
        blog: "Blog",
        contacts: "Contatti",
      },
      hero: {
        greeting: "Sono",
        name: "Antonio Russo",
        title: "Sviluppatore Front-End",
        subtitle: "Trasformo idee in interfacce moderne, performanti e intuitive con 2 anni di esperienza Web e Mobile",
        cta: "Scopri di più",
      },
      about: {
        title: "Chi sono",
        description:
          "Sviluppatore Front-End con due anni di esperienza nello sviluppo Web e Mobile. Specializzato in React, Angular, Vue.js e tecnologie full-stack. Lavoro con metodologie Agile/Scrum e ho esperienza comprovata in Java/Spring, Laravel e Docker.",
        experience: "anni di esperienza",
        projects: "progetti completati",
        clients: "clienti soddisfatti",
      },
      services: {
        title: "Servizi",
        web_development: {
          title: "Sviluppo Web",
          description: "Siti web e applicazioni web custom sviluppate con le tecnologie più moderne",
        },
        ecommerce: {
          title: "E-commerce",
          description: "Piattaforme di vendita online ottimizzate per conversioni e performance",
        },
        consulting: {
          title: "Consulenza",
          description: "Analisi e ottimizzazione di progetti esistenti, architettura software",
        },
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "Alcuni dei miei lavori più recenti",
        viewProject: "Vedi progetto",
      },
      contact: {
        title: "Contatti",
        subtitle: "Hai un progetto in mente? Parliamone!",
        name: "Nome",
        email: "Email",
        message: "Messaggio",
        send: "Invia",
        phone: "+39 327 596 3025",
        location: "Foggia, Italia",
      },
      blog: {
        title: "Blog",
        subtitle: "Articoli su sviluppo web, tecnologie e trend del settore",
        readMore: "Leggi tutto",
        backToBlog: "← Torna al Blog",
        categories: {
          all: "Tutti",
          frontend: "Frontend",
          backend: "Backend",
          design: "Design",
          trends: "Trend",
        },
        share: "Condividi",
        bookmark: "Salva",
        readTime: "minuti di lettura",
        publishedOn: "Pubblicato il",
        author: "Antonio Russo",
        authorBio:
          "Sviluppatore Front-End con due anni di esperienza nello sviluppo Web e Mobile. Specializzato in React, Angular, Vue.js e tecnologie full-stack. Sempre alla ricerca delle ultime tecnologie e trend del settore.",
      },
      footer: {
        copyright: "© 2025 - Antonio Russo Sviluppatore Web - Made with React & ☕",
        privacy: "Privacy Policy",
        terms: "Termini e Condizioni",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        portfolio: "Portfolio",
        blog: "Blog",
        contacts: "Contacts",
      },
      hero: {
        greeting: "I'm",
        name: "Antonio Russo",
        title: "Front-End Developer",
        subtitle:
          "I transform ideas into modern, performant and intuitive interfaces with 2 years of Web and Mobile experience",
        cta: "Learn more",
      },
      about: {
        title: "About me",
        description:
          "Front-End Developer with two years of experience in Web and Mobile development. Specialized in React, Angular, Vue.js and full-stack technologies. I work with Agile/Scrum methodologies and have proven experience in Java/Spring, Laravel and Docker.",
        experience: "years of experience",
        projects: "completed projects",
        clients: "satisfied clients",
      },
      services: {
        title: "Services",
        web_development: {
          title: "Web Development",
          description: "Custom websites and web applications built with the most modern technologies",
        },
        ecommerce: {
          title: "E-commerce",
          description: "Online sales platforms optimized for conversions and performance",
        },
        consulting: {
          title: "Consulting",
          description: "Analysis and optimization of existing projects, software architecture",
        },
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "Some of my most recent work",
        viewProject: "View project",
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project in mind? Let's talk about it!",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        phone: "+39 327 596 3025",
        location: "Foggia, Italy",
      },
      blog: {
        title: "Blog",
        subtitle: "Articles about web development, technologies and industry trends",
        readMore: "Read more",
        backToBlog: "← Back to Blog",
        categories: {
          all: "All",
          frontend: "Frontend",
          backend: "Backend",
          design: "Design",
          trends: "Trends",
        },
        share: "Share",
        bookmark: "Bookmark",
        readTime: "minutes read",
        publishedOn: "Published on",
        author: "Antonio Russo",
        authorBio:
          "Front-End Developer with two years of experience in Web and Mobile development. Specialized in React, Angular, Vue.js and full-stack technologies. Always looking for the latest technologies and industry trends.",
      },
      footer: {
        copyright: "© 2025 - Antonio Russo Web Developer - Made with React & ☕",
        privacy: "Privacy Policy",
        terms: "Terms and Conditions",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "it",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
