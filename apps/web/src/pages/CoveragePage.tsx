import { MapPin, CheckCircle2, Navigation, AlertTriangle } from 'lucide-react';

export const CoveragePage = () => {
  const zones = [
    {
      area: "Partido de Morón",
      neighborhoods: ["Castelar", "Morón Centro", "Haedo", "El Palomar", "Villa Sarmiento"]
    },
    {
      area: "Partido de Ituzaingó",
      neighborhoods: ["Ituzaingó Norte", "Ituzaingó Sur", "Villa Udaondo", "Parque Leloir"]
    },
    {
      area: "Partido de Merlo",
      neighborhoods: ["San Antonio de Padua", "Merlo Centro"]
    },
    {
      area: "Partido de Hurlingham",
      neighborhoods: ["Hurlingham", "Villa Tesei"]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-dark min-h-screen">
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
            Cubrimos gran parte de Zona Oeste con respuesta rápida.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Columna Izquierda: Listado de Barrios */}
          <div className="lg:col-span-5 space-y-8">
            {zones.map((zone, idx) => (
              <div key={idx} className="bg-surface-card border border-white/5 p-6 rounded-2xl hover:border-brand-accent/30 transition-colors">
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
                  Para zonas más alejadas (más de 10km de nuestra base), se puede cobrar un adicional mínimo por combustible y peajes.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mapa Visual */}
          <div className="lg:col-span-7">
            <div className="sticky top-32">
              <div className="aspect-square md:aspect-video w-full bg-surface-dark rounded-3xl border border-white/10 relative overflow-hidden group">
                
                {/* Fondo de Mapa (Imagen estática de Google Maps estilizada o placeholder) */}
                {/* Podes cambiar esta URL por una captura real de tu zona en Google Maps snazzy maps */}
                <div 
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 transform group-hover:scale-105"
                ></div>
                
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent"></div>

                {/* Marcador Central (Base) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
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
                    className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-6 py-3 rounded-full font-bold hover:bg-brand-highlight hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1"
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