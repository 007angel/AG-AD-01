export type Highlight = {
  title: string;
  text: string;
};

export type ServiceBox = {
  title: string;
  description: string;
  points: string[];
  icon: string;
  /** Foto local en public/fotos (coloca el archivo con este nombre para usarla). */
  localImage: string;
  /** Foto de respaldo si no existe la local. */
  image: string;
};

export const highlights: Highlight[] = [
  {
    title: "100% Compliance",
    text: "Cumplimos con cada regulación vigente para evitar demoras y sanciones.",
  },
  {
    title: "Atención personalizada",
    text: "Diseñamos soluciones ágiles para cada operación de comercio exterior.",
  },
  {
    title: "Cobertura nacional",
    text: "Operamos con velocidad y precisión para mover tu carga sin fricción.",
  },
];

export const defaultServiceBoxes: ServiceBox[] = [
  {
    title: "Agencia Aduanal",
    description: "Despachos aduanales rápidos y precisos en todas las aduanas de Honduras.",
    points: [
      "Importación y exportación",
      "Clasificación arancelaria",
      "Asesoría legal",
      "Despachos ágiles",
    ],
    icon: "📦",
    localImage: "/fotos/agencia-aduanal.jpg",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Logística Internacional",
    description: "Transporte aéreo, marítimo y terrestre con seguro de mercancías incluido.",
    points: ["Transporte aéreo", "Transporte marítimo", "Seguro de carga", "Rastreo en tiempo real"],
    icon: "🌍",
    localImage: "/fotos/logistica-internacional.jpg",
    image:
      "https://images.unsplash.com/photo-1517502166878-35c93a0072bb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Gestión de Carga",
    description: "Almacenaje, consolidación y embalaje profesional de tu mercancía.",
    points: ["Almacenaje seguro", "Consolidación de carga", "Embalaje profesional"],
    icon: "📍",
    localImage: "/fotos/gestion-carga.jpg",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Asesoría y Trámites",
    description: "Consultoría en comercio exterior y gestión de permisos especiales.",
    points: ["Consultoría aduanera", "Gestión de permisos", "Defensa legal", "Cumplimiento normativo"],
    icon: "⚖️",
    localImage: "/fotos/asesoria-tramites.jpg",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
];

export type CompanyInfo = {
  /** Edita aquí los datos de la empresa. */
  yearsOfExperience: string;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsappText: string;
  address: string;
  hours: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
};

export const companyInfo: CompanyInfo = {
  yearsOfExperience: "15",
  phone: "+504 3289-0454",
  phoneRaw: "+50432890454",
  email: "gerenciageneral@agenciaaduaneralya.com",
  whatsappText:
    "Hola, me gustaría solicitar una cotización para mis operaciones de comercio exterior.",
  address: "San Pedro Sula, Honduras",
  hours: "Lunes a viernes: 8:00 AM – 5:00 PM - Sábados: 8:00 AM – 12:00 PM",
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/agenciaaduaneralya?utm_source=qr&igsh=cXhiMmJ5dXI1dHB4",
    linkedin: "https://www.linkedin.com/in/agencia-aduanera-lya-a7b740429",
  },
};

export type NewsItem = {
  title: string;
  date: string;
  excerpt: string;
};

/** Edita aquí las noticias o avisos que quieras mostrar. */
export const news: NewsItem[] = [
  {
    title: "Recordatorio a los importadores",
    date: "3 ago 2026",
    excerpt:
      "Recuerda mantener al día la documentación de tus operaciones para evitar demoras en los despachos.",
  },
  {
    title: "Nuevas regulaciones aduaneras",
    date: "21 jul 2026",
    excerpt:
      "Informamos sobre las actualizaciones normativas vigentes para importaciones y exportaciones.",
  },
];
