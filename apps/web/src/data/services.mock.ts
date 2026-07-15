import type { ServiceItem } from '@domain/models/service.model';

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Instalación de Equipos de Frío',
    desc: 'Instalación profesional de equipos de frío para transporte en camiones, semi-remolques, utilitarios y camionetas, garantizando un rendimiento óptimo y duradero.',
    tags: ['Sin Polvo', 'Garantía escrita 1 año o 850hs de uso']
  },
  {
    id: '02',
    title: 'Carga de Gas de emergencia',
    desc: 'Servicio express de diagnóstico y carga de gas para no perder viajes.',
    tags: ['Diagnóstico 24hs', 'Vehículos']
  },
  {
    id: '03',
    title: 'Carga de Gas & Fugas',
    desc: 'Detección de micro-fugas con nitrógeno a alta presión. Carga precisa por balanza digital.',
    tags: ['R22', 'R404', 'R12', 'R134a' ]
  },
  {
    id: '04',
    title: 'Limpieza Preventiva integral',
    desc: 'Mantenimiento integral con desarme completo. Incluye limpieza de serpentinas y drenajes para optimizar el rendimiento y la vida útil del equipo.',
    tags: ['Desinfección', 'Ahorro de combustible', 'Mayor vida útil']
  },
  {
    id: '05',
    title: 'Reparación de equipos de frío',
    desc: 'Reparación de equipos de frío para transporte, utilizando repuestos originales y garantizando un funcionamiento correcto.',
    tags: ['Nuevas tecnologías', 'Repuestos Originales', 'Todas las marcas']
  },
  {
    id: '06',
    title: 'Asesoramiento Personalizado',
    desc: 'Te ayudamos a elegir el equipo que mejor se adapte a tus necesidades y presupuesto. Análisis de espacio, costos y beneficios.',
    tags: ['Equipos confiables', 'Profesionalismo', 'Garantía de fábrica']
  }
];
