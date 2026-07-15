export const COMPANY = {
  name: {
    commercial: 'SC Refrigeración',
    legal: 'SC Refrigeración',
  },
  contact: {
    email: 'screfrigeracion.info@gmail.com',
    whatsapp: {
      number: '+5491176685418',
      messages: {
        default: 'Hola! Quiero instalar un equipo de frío.',
        schedule: 'Hola! Quisiera agendar una visita por mi equipo de frío.',
        urgency: 'Hola! Tengo una urgencia con mi equipo de frío.',
        consult: 'Hola! Quisiera consultar sobre mi equipo de frío.',
        service: (title: string) => `Hola! Me interesa el servicio de ${title}.`,
      },
    },
  },
  location: {
    city: 'Castelar',
    coverage: 'Zona Oeste, Zona Sur, Zona Norte y CABA',
  },
  social: {
    instagram: 'https://www.instagram.com/s.c.refrigeracion/',
    tiktok: 'https://www.tiktok.com/@s.c.refrigeracion',
  },
  brand: {
    tagline: 'Tu equipo de frío en las mejores manos.',
    serviceRole: 'Servicio Técnico Especializado',
    logo: {
      header: '/SC-Icon.webp',
      footerLogo: '/sc-footer-logo.webp',
      favicon: {
        webp: '/SC-Icon.webp',
        ico: '/SC-Icon.ico',
      },
    },
  },
} as const;
