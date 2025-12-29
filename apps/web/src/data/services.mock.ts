import type { ServiceItem } from '../../../../domain/models/service.model';

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Instalación Premium',
    desc: 'Montaje de equipos Split, Multisplit y PisoTecho. Utilizamos bomba de vacío y materiales normalizados para asegurar la garantía de fábrica.',
    tags: ['Sin Polvo', 'Garantía 90 días']
  },
  {
    id: '02',
    title: 'Carga de Gas en Vehículos',
    desc: 'Servicio express de diagnóstico y carga de gas para aires acondicionados de autos y camionetas.',
    tags: ['Diagnóstico 24hs', 'Vehículos']
  },
  {
    id: '03',
    title: 'Carga de Gas & Fugas',
    desc: 'Detección de micro-fugas con nitrógeno a alta presión. Carga precisa por balanza digital.',
    tags: ['R410a', 'R32', 'Ecológico', 'Sin Sobre-carga', 'Garantía 90 días', 'Fugas', 'Nitrógeno' ]
  },
  {
    id: '04',
    title: 'Limpieza Preventiva',
    desc: 'Mantenimiento integral con desarme completo. Incluye limpieza de filtros, serpentines y drenajes para optimizar el rendimiento y la vida útil del equipo.',
    tags: ['Anti-hongos', 'Ahorro Energía', 'Rendimiento Óptimo']
  },
  {
    id: '05',
    title: 'Reparación de Placas',
    desc: 'Diagnóstico y reparación de placas electrónicas para equipos Split y Multisplit. Repuestos originales y garantía de funcionamiento.',
    tags: ['Placas Inverter', 'Repuestos Originales', 'Garantía 90 días']
  },
  {
    id: '06',
    title: 'Asesoramiento Personalizado',
    desc: 'Te ayudamos a elegir el equipo que mejor se adapte a tus necesidades y presupuesto. Análisis de espacio, eficiencia energética y costos.',
    tags: ['Asesoramiento', 'Eficiencia Energética', 'A Medida']
  }
];
