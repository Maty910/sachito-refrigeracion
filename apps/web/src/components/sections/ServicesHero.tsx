import { ShieldCheck } from 'lucide-react';

export const ServicesHero = () => {
  return (
    <section className="relative pt-40 pb-20 bg-brand-dark overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO (Técnica/Abstracta) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
        {/* Usamos una imagen de textura técnica o herramientas para dar contexto */}
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
          alt="Herramientas de refrigeración" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      {/* 2. LUCES AMBIENTALES (Consistentes con la Home) */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-brand-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-highlight text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <ShieldCheck size={14} />
            Soluciones Certificadas
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-main font-display mb-6 leading-tight">
            Servicios Técnicos <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-accent to-white">
              de Alta Precisión.
            </span>
          </h1>
          
          <p className="text-xl text-text-muted max-w-2xl leading-relaxed border-l-4 border-brand-primary pl-6">
            Desde instalaciones domésticas hasta reparaciones complejas de placas inverter. 
            Acá tenés el detalle de todo lo que podemos hacer por tu equipo.
          </p>
        </div>
      </div>
    </section>
  );
};