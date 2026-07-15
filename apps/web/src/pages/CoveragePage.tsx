import { MapPin, CheckCircle2, Navigation, AlertTriangle } from 'lucide-react';
import castelarMap from '../assets/images/castelar-map.png';

export const CoveragePage = () => {
  const zones = [
    // ZONA OESTE
    {
      area: 'Partido de Morón',
      zone: 'Zona Oeste',
      neighborhoods: ['Castelar', 'Morón Centro', 'Haedo', 'El Palomar', 'Villa Sarmiento'],
    },
    {
      area: 'Partido de Ituzaingó',
      zone: 'Zona Oeste',
      neighborhoods: ['Ituzaingó Norte', 'Ituzaingó Sur', 'Villa Udaondo', 'Parque Leloir'],
    },
    {
      area: 'Partido de Merlo',
      zone: 'Zona Oeste',
      neighborhoods: ['San Antonio de Padua', 'Merlo Centro', 'Libertad'],
    },
    {
      area: 'Partido de Hurlingham',
      zone: 'Zona Oeste',
      neighborhoods: ['Hurlingham', 'Villa Tesei', 'William Morris'],
    },
    {
      area: 'Partido de La Matanza',
      zone: 'Zona Oeste',
      neighborhoods: ['Ramos Mejía', 'Ciudad Evita', 'San Justo'],
    },
    {
      area: 'Partido de Tres de Febrero',
      zone: 'Zona Oeste',
      neighborhoods: ['Caseros', 'Ciudad Jardín'],
    },
    {
      area: 'Partido de Moreno',
      zone: 'Zona Oeste',
      neighborhoods: ['Moreno', 'Paso del Rey', 'Trujui'],
    },
    // ZONA SUR
    {
      area: 'Partido de Avellaneda',
      zone: 'Zona Sur',
      neighborhoods: ['Avellaneda Centro', 'Dock Sud', 'Piñeyro', 'Sarandí', 'Wilde'],
    },
    {
      area: 'Partido de Lanús',
      zone: 'Zona Sur',
      neighborhoods: ['Lanús Centro', 'Remedios de Escalada', 'Valentín Alsina', 'Monte Chingolo'],
    },
    {
      area: 'Partido de Lomas de Zamora',
      zone: 'Zona Sur',
      neighborhoods: ['Lomas de Zamora', 'Temperley', 'Banfield', 'Adrogué'],
    },
    {
      area: 'Partido de Esteban Echeverría',
      zone: 'Zona Sur',
      neighborhoods: ['Monte Grande', 'El Jagüel', 'Luis Guillón', '9 de Abril'],
    },
    // ZONA NORTE
    {
      area: 'Partido de Vicente López',
      zone: 'Zona Norte',
      neighborhoods: ['Vicente López', 'Olivos', 'Florida', 'La Lucila', 'Munro'],
    },
    {
      area: 'Partido de San Isidro',
      zone: 'Zona Norte',
      neighborhoods: ['San Isidro', 'Acassuso', 'Beccar', 'Boulogne', 'Martínez'],
    },
    {
      area: 'Partido de San Fernando',
      zone: 'Zona Norte',
      neighborhoods: ['San Fernando', 'Victoria', 'Virreyes'],
    },
    {
      area: 'Partido de Tigre',
      zone: 'Zona Norte',
      neighborhoods: ['Tigre', 'Don Torcuato', 'El Talar', 'General Pacheco', 'Rincón de Milberg'],
    },
    {
      area: 'Partido de Pilar',
      zone: 'Zona Norte',
      neighborhoods: ['Pilar', 'Del Viso', 'Manuel Alberti', 'Presidente Derqui'],
    },
    {
      area: 'Partido de Escobar',
      zone: 'Zona Norte',
      neighborhoods: ['Belén de Escobar', 'Garín', 'Ingeniero Maschwitz', 'Maquinista Savio'],
    },
    {
      area: 'Partido de San Miguel',
      zone: 'Zona Norte',
      neighborhoods: ['San Miguel', 'Bella Vista', 'Muñiz'],
    },
    {
      area: 'Partido de José C. Paz',
      zone: 'Zona Norte',
      neighborhoods: ['José C. Paz', 'Tortuguitas'],
    },
    {
      area: 'Partido de Malvinas Argentinas',
      zone: 'Zona Norte',
      neighborhoods: ['Los Polvorines', 'Grand Bourg', 'Pablo Nogués', 'Ingeniero Adolfo Sourdeaux'],
    },
    // CABA
    {
      area: 'Ciudad Autónoma de Buenos Aires',
      zone: 'CABA',
      neighborhoods: [
        'Comuna 1', 'Comuna 2', 'Comuna 3', 'Comuna 4', 'Comuna 5',
        'Comuna 6', 'Comuna 7', 'Comuna 8', 'Comuna 9', 'Comuna 10',
        'Comuna 11', 'Comuna 12', 'Comuna 13', 'Comuna 14', 'Comuna 15',
      ],
    },
  ];

  return (
    <div className="pt-25 pb-20 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-2 block font-display">
            Área de Servicio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6">
            ¿Hasta dónde llegamos?
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Nuestra base operativa está en <span className="text-white font-bold">Castelar</span>.
            Cubrimos gran parte de Zona Oeste, Zona Sur, Zona Norte y CABA con respuesta rápida.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Columna Izquierda: Listado de Barrios */}
          <div className="lg:col-span-5 space-y-8">
            {zones.map((zone) => (
              <div
                key={zone.area}
                className="bg-surface-card border border-white/5 p-6 rounded-2xl hover:border-brand-accent/30 transition-colors"
              >
                <span className="block text-xs uppercase tracking-widest text-brand-accent mb-3">
                  {zone.zone}
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-brand-primary" />
                  <h3 className="text-xl font-bold text-white font-display">{zone.area}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {zone.neighborhoods.map((hood) => (
                    <span key={hood} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-dark text-xs text-text-muted border border-white/5">
                      <CheckCircle2 size={12} className="text-brand-accent" /> {hood}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Aviso de Viáticos */}
            <div className="bg-brand-primary/10 border border-brand-primary/20 p-6 rounded-2xl flex gap-4 items-start">
              <AlertTriangle className="text-brand-highlight shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold mb-1">Sobre los Viáticos</h4>
                <p className="text-sm text-text-muted">
                  El presupuesto base incluye traslados dentro de Castelar e Ituzaingó.
                  Para zonas más alejadas (más de 15 km de nuestra base) se puede coordinar un
                  adicional por combustible, peajes y estacionamiento en caso de ser necesario.
                  El monto se conversa al cotizar cada visita.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mapa Visual */}
          <div className="lg:col-span-7">
            <div className="sticky top-32">
              <div className="aspect-square md:aspect-video w-full bg-surface-dark rounded-3xl border border-white/10 relative overflow-hidden group">

                {/* Google Maps snazzy maps */}
                <div
                  style={{ backgroundImage: `url(${castelarMap})` }}
                  className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 transform group-hover:scale-105"
                ></div>

                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent"></div>

                {/* Marcador Central (Base) */}
                <div className="absolute top-1/5 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="relative">
                    <div className="w-4 h-4 bg-brand-accent rounded-full animate-ping absolute top-0 left-0"></div>
                    <div className="w-4 h-4 bg-brand-accent rounded-full relative z-10 border-2 border-brand-dark"></div>
                  </div>
                  <div className="mt-2 bg-brand-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-white shadow-xl">
                    Base Operativa (Castelar)
                  </div>
                </div>

                {/* Botón CTA Mapa */}
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Castelar+Zona+Oeste"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-accent text-text-main px-6 py-3 rounded-full font-bold hover:bg-brand-highlight hover:shadow-glow transition-all transform hover:-translate-y-1"
                  >
                    <Navigation size={18} /> Ver en Google Maps
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
