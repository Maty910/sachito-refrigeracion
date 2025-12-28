import type { ServiceItem } from '../../../../domain/models/service.model';

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Instalación Premium',
    desc: 'Montaje de equipos Split y Multisplit. Utilizamos bomba de vacío y materiales normalizados para asegurar la garantía de fábrica.',
    tags: ['Sin Polvo', 'Garantía 1 Año']
  },
  {
    id: '02',
    title: 'Reparación de Placas',
    desc: 'Laboratorio electrónico propio. Recuperamos placas inverter y convencionales que otros dan por muertas.',
    tags: ['Diagnóstico 24hs', 'Inverter']
  },
  {
    id: '03',
    title: 'Carga de Gas & Fugas',
    desc: 'Detección de micro-fugas con nitrógeno a alta presión. Carga precisa por balanza digital.',
    tags: ['R410a', 'R32', 'Ecológico']
  },
  {
    id: '04',
    title: 'Mantenimiento Preventivo',
    desc: 'Limpieza profunda con hidrolavadora y productos bactericidas. Mejorá el rendimiento y bajá el consumo.',
    tags: ['Anti-hongos', 'Ahorro Energía']
  }
];
