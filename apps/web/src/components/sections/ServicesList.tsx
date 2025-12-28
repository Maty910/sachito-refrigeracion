import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { SERVICES } from '../../data/services.mock';

export const ServicesList = () => {
  return (
    <section id="expertis" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Nuestro <br/><span className="text-text-muted">Expertis Técnico</span>
          </h2>
          <p className="text-text-muted max-w-md text-right md:text-left">
            No somos "todólogos". Nos especializamos 100% en sistemas de refrigeración para darte una solución definitiva.
          </p>
        </div>

        {/* Lista de Servicios */}
        <div className="grid gap-4">
          {SERVICES.map((item) => (
            <div 
              key={item.id}
              /* CAMBIOS CLAVE ACÁ:
                1. hover:border-blue-500 -> hover:border-brand-accent (Cyan)
                2. hover:bg-[#0e1442] -> hover:bg-brand-dark/50 (Usamos variables con opacidad)
              */
              className="group relative bg-surface-card border border-white/5 p-8 md:p-12 rounded-3xl hover:border-brand-accent/50 hover:bg-brand-primary/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between relative z-10">
                <div className="flex items-start gap-6">
                  {/* ID del servicio (01, 02...) */}
                  <span className="text-2xl font-display text-brand-primary group-hover:text-brand-accent transition-colors font-bold">
                    {item.id}
                  </span>
                  
                  <div>
                    {/* Título */}
                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3 group-hover:text-brand-highlight transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-text-muted max-w-xl leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex gap-3 mt-6">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-text-muted border border-white/10 group-hover:border-brand-accent/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón Circular con Flecha */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white group-hover:bg-brand-accent group-hover:text-brand-dark group-hover:border-brand-accent transition-all transform group-hover:-rotate-45">
                  <div className="opacity-0 group-hover:opacity-100 absolute transition-opacity">
                    <ArrowUpRight />
                  </div>
                  <div className="group-hover:opacity-0 absolute transition-opacity">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};