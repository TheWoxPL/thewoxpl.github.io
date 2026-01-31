export type Language = 'en' | 'pl';

export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      name: 'Wojciech',
      title: 'Frontend Developer & Fullstack Enthusiast',
      description: 'I create beautiful, responsive web applications with modern technologies. Passionate about clean code, user experience, and innovative solutions.',
      cta: 'Get In Touch',
      downloadCV: 'Download CV',
      scrollDown: 'Scroll to About section',
    },
    // About Section
    about: {
      title: 'About',
      titleHighlight: 'Me',
      subtitle: 'Passionate Developer with a Vision',
      description1: "I'm a dedicated frontend developer with many years of experience creating digital solutions while creating own projects. My journey started with curiosity about how websites work and has evolved into a passion for crafting exceptional user experiences.",
      description2: "I specialize in React, NestJS, and modern web technologies. When I'm not coding, you'll find me exploring new technologies, or focusing on personal projects that challenge my skills, or on my personal hobbies.",
      stats: {
        projects: 'Projects',
        experience: 'Years Exp',
        dedication: 'Dedication',
      },
      features: {
        cleanCode: {
          title: 'Clean Code',
          description: 'Writing maintainable, scalable, and efficient code following best practices and industry standards.',
        },
        modernDesign: {
          title: 'Modern Design',
          description: 'Creating beautiful, intuitive user interfaces with attention to detail and user experience.',
        },
        performance: {
          title: 'Performance',
          description: 'Optimizing applications for speed, accessibility, and cross-browser compatibility.',
        },
      },
    },
    // Skills Section
    skills: {
      title: 'Skills &',
      titleHighlight: 'Technologies',
      subtitle: 'Passionate about modern web technologies and best practices in software development',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        tools: 'Tools & DevOps',
        design: 'Design & UI/UX',
      },
      coreSkill: 'Core Skill',
      competencies: {
        fullstack: {
          title: 'Full Stack Development',
          description: 'End-to-end web application development with modern technologies',
        },
        css: {
          title: 'Modern CSS Architecture',
          description: 'Scalable styling with component-based architecture',
        },
        database: {
          title: 'Database Design',
          description: 'Efficient database schemas and query optimization',
        },
        devops: {
          title: 'DevOps & Deployment',
          description: 'Automated workflows and cloud infrastructure',
        },
      },
    },
    // Projects Section
    projects: {
      title: 'Featured',
      titleHighlight: 'Projects',
      subtitle: 'Here are some of my recent projects that showcase my skills and passion for development',
      featuredProject: 'Featured Project',
      keyFeatures: 'Key Features:',
      liveDemo: 'Live Demo',
      viewCode: 'View Code',
    },
    // Contact Section
    contact: {
      title: 'Get In',
      titleHighlight: 'Touch',
      subtitle: "Ready to start your next project? Let's work together to bring your ideas to life.",
      formTitle: "Let's start a conversation",
      formDescription: "I'm always interested in hearing about new opportunities and exciting projects. Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.",
      availability: 'Available for new projects',
      availabilityDescription: 'Currently accepting new client work and interesting project opportunities.',
      form: {
        name: 'Name / Company name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'Name',
        emailPlaceholder: 'your.email@example.com',
        subjectPlaceholder: "What's this about?",
        messagePlaceholder: 'Write message here',
        send: 'Send Message',
        sending: 'Sending...',
        required: '*',
      },
      success: {
        title: 'Message Sent Successfully!',
        message: "Thank you for reaching out. I'll get back to you as soon as possible.",
        confirmation: 'You should also receive a confirmation email shortly.',
        sendAnother: 'Send Another Message',
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Cracow, Poland',
      },
    },
    // Footer
    footer: {
      about: {
        title: 'Wojciech Bubula',
        subtitle: 'Frontend Developer & Fullstack Enthusiast',
        description: 'Passionate about creating beautiful, functional web applications that solve real-world problems and provide exceptional user experiences.',
      },
      quickLinks: {
        title: 'Quick Links',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      connect: {
        title: 'Connect',
        description: "Let's connect and discuss your next project.",
        email: 'Email',
      },
      copyright: {
        rights: 'All rights reserved.',
        madeWith: 'Made with',
        love: 'and lots of coffee',
        by: 'by',
        backToTop: 'Back to top',
      },
    },
  },
  pl: {
    // Nawigacja
    nav: {
      about: 'O mnie',
      skills: 'Umiejętności',
      projects: 'Projekty',
      contact: 'Kontakt',
    },
    // Sekcja Hero
    hero: {
      greeting: 'Cześć, jestem',
      name: 'Wojciech',
      title: 'Frontend Developer & Entuzjasta Full Stack',
      description: 'Tworzę piękne, responsywne aplikacje webowe wykorzystując nowoczesne technologie. Pasjonuję się czystym kodem, user experience i innowacyjnymi rozwiązaniami.',
      cta: 'Skontaktuj się',
      downloadCV: 'Pobierz CV',
      scrollDown: 'Przewiń do sekcji O mnie',
    },
    // Sekcja O mnie
    about: {
      title: 'O',
      titleHighlight: 'Mnie',
      subtitle: 'Pasjonat Programowania z Wizją',
      description1: 'Jestem oddanym frontend developerem z wieloletnim doświadczeniem w tworzeniu rozwiązań cyfrowych podczas realizacji własnych projektów. Moja podróż rozpoczęła się od ciekawości jak działają strony internetowe, a przekształciła się w pasję tworzenia wyjątkowych doświadczeń użytkownika.',
      description2: 'Specjalizuję się w React, NestJS i nowoczesnych technologiach webowych. Gdy nie koduję, eksploruję nowe technologie, skupiam się na osobistych projektach które rozwijają moje umiejętności, lub oddaję się moim hobby.',
      stats: {
        projects: 'Projektów',
        experience: 'Lat Doświadczenia',
        dedication: 'Zaangażowanie',
      },
      features: {
        cleanCode: {
          title: 'Czysty Kod',
          description: 'Piszę łatwy w utrzymaniu, skalowalny i wydajny kod zgodnie z najlepszymi praktykami i standardami branżowymi.',
        },
        modernDesign: {
          title: 'Nowoczesny Design',
          description: 'Tworzę piękne, intuicyjne interfejsy użytkownika z dbałością o szczegóły i doświadczenie użytkownika.',
        },
        performance: {
          title: 'Wydajność',
          description: 'Optymalizuję aplikacje pod kątem szybkości, dostępności i kompatybilności pomiędzy przeglądarkami.',
        },
      },
    },
    // Sekcja Umiejętności
    skills: {
      title: 'Umiejętności i',
      titleHighlight: 'Technologie',
      subtitle: 'Pasjonuję się nowoczesnymi technologiami webowymi i najlepszymi praktykami w tworzeniu oprogramowania',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        tools: 'Narzędzia & DevOps',
        design: 'Design & UI/UX',
      },
      coreSkill: 'Kluczowa',
      competencies: {
        fullstack: {
          title: 'Full Stack Development',
          description: 'Kompleksowe tworzenie aplikacji webowych z wykorzystaniem nowoczesnych technologii',
        },
        css: {
          title: 'Nowoczesna Architektura CSS',
          description: 'Skalowalne stylowanie oparte na architekturze komponentowej',
        },
        database: {
          title: 'Projektowanie Baz Danych',
          description: 'Efektywne schematy baz danych oraz optymalizacja zapytań',
        },
        devops: {
          title: 'DevOps & Deployment',
          description: 'Zautomatyzowane workflow oraz infrastruktura chmurowa',
        },
      },
    },
    // Sekcja Projektów
    projects: {
      title: 'Wybrane',
      titleHighlight: 'Projekty',
      subtitle: 'Oto niektóre z moich ostatnich projektów, które pokazują moje umiejętności i pasję do programowania',
      featuredProject: 'Wyróżniony Projekt',
      keyFeatures: 'Kluczowe Funkcje:',
      liveDemo: 'Demo na Żywo',
      viewCode: 'Zobacz Kod',
    },
    // Sekcja Kontakt
    contact: {
      title: 'Skontaktuj',
      titleHighlight: 'Się',
      subtitle: 'Gotowy na rozpoczęcie swojego kolejnego projektu? Pracujmy razem, aby wcielić Twoje pomysły w życie.',
      formTitle: 'Rozpocznijmy rozmowę',
      formDescription: 'Zawsze jestem zainteresowany nowymi możliwościami i ekscytującymi projektami. Niezależnie od tego, czy jesteś firmą która chce zatrudnić, czy współpracownikiem który chce współpracować - chętnie Cię poznam.',
      availability: 'Dostępny do nowych projektów',
      availabilityDescription: 'Obecnie przyjmuję nowe zlecenia oraz interesujące możliwości projektowe.',
      form: {
        name: 'Imię / Nazwa firmy',
        email: 'E-mail',
        subject: 'Temat',
        message: 'Wiadomość',
        namePlaceholder: 'Imię',
        emailPlaceholder: 'twoj.email@example.com',
        subjectPlaceholder: 'Czego to dotyczy?',
        messagePlaceholder: 'Napisz wiadomość tutaj',
        send: 'Wyślij Wiadomość',
        sending: 'Wysyłanie...',
        required: '*',
      },
      success: {
        title: 'Wiadomość Wysłana Pomyślnie!',
        message: 'Dziękuję za kontakt. Odpowiem tak szybko jak to możliwe.',
        confirmation: 'Wkrótce powinieneś również otrzymać e-mail potwierdzający.',
        sendAnother: 'Wyślij Kolejną Wiadomość',
      },
      info: {
        email: 'E-mail',
        phone: 'Telefon',
        location: 'Lokalizacja',
        locationValue: 'Kraków, Polska',
      },
    },
    // Stopka
    footer: {
      about: {
        title: 'Wojciech Bubula',
        subtitle: 'Frontend Developer & Entuzjasta Full Stack',
        description: 'Pasjonuję się tworzeniem pięknych, funkcjonalnych aplikacji webowych, które rozwiązują rzeczywiste problemy i zapewniają wyjątkowe doświadczenia użytkownika.',
      },
      quickLinks: {
        title: 'Szybkie Linki',
        about: 'O mnie',
        skills: 'Umiejętności',
        projects: 'Projekty',
        contact: 'Kontakt',
      },
      connect: {
        title: 'Kontakt',
        description: 'Skontaktujmy się i porozmawiajmy o Twoim następnym projekcie.',
        email: 'E-mail',
      },
      copyright: {
        rights: 'Wszelkie prawa zastrzeżone.',
        madeWith: 'Stworzone z',
        love: 'i dużą ilością kawy',
        by: 'przez',
        backToTop: 'Powrót do góry',
      },
    },
  },
} as const;
