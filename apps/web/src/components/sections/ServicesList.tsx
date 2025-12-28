import { ArrowUpRight, ChevronRight, MessageCircleQuestion } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { SERVICES } from '../../data/services.mock';

export const ServicesList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isServicePage = location.pathname === '/servicios';

  const handleCardClick = () => {
    if (!isServicePage) {
      navigate('/servicios');
    }
  };

  return (
    // CAMBIO: Fondo Claro (Ice)
    <section id="expertis" className="py-24 bg-surface-ice relative overflow-hidden">
      
      {/* Decoración de fondo sutil para que no sea tan plano */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          {/* CAMBIO: Texto oscuro sobre fondo claro */}
          <h2 className="text-4xl md:text-5xl font-bold text-text-on-ice">
            Nuestro <br/><span className="text-brand-primary">Expertis Técnico</span>
          </h2>
          {/* CAMBIO: Texto muted oscuro */}
          <p className="text-text-muted-ice max-w-md text-right md:text-left font-medium">
            No somos "todólogos". Nos especializamos 100% en sistemas de refrigeración para darte una solución definitiva.
          </p>
        </div>

        {/* Lista de Servicios */}
        <div className="grid gap-4">
          {SERVICES.map((item) => (
            <div 
              key={item.id}
              onClick={handleCardClick}
              // CAMBIOS VISUALES: 
              // 1. bg-surface-white (Tarjeta blanca limpia)
              // 2. border-black/5 (Borde sutil gris)
              // 3. shadow-sm hover:shadow-xl (Sombra elegante en vez de glow neón)
              className={`
                group relative bg-surface-white border border-black/5 p-8 md:p-12 rounded-3xl transition-all duration-300
                ${!isServicePage 
                  ? 'cursor-pointer hover:border-brand-accent/30 hover:shadow-2xl hover:shadow-brand-primary/5 hover:-translate-y-1' 
                  : 'cursor-default border-black/5' 
                }
              `}
            >
              <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between relative z-10">
                <div className="flex items-start gap-6">
                  {/* ID: Azul fuerte para contraste */}
                  <span className={`text-2xl font-display font-bold transition-colors ${!isServicePage ? 'text-brand-primary group-hover:text-brand-accent' : 'text-brand-primary'}`}>
                    {item.id}
                  </span>
                  
                  <div>
                    {/* Título: Oscuro (text-on-ice) */}
                    <h3 className={`text-2xl md:text-3xl font-bold text-text-on-ice mb-3 transition-colors ${!isServicePage ? 'group-hover:text-brand-primary' : ''}`}>
                      {item.title}
                    </h3>
                    
                    {/* Descripción: Gris medio */}
                    <p className="text-text-muted-ice max-w-xl leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Tags: Fondo gris muy clarito (slate-100) */}
                    <div className="flex gap-3 mt-6">
                      {item.tags.map(tag => (
                        <span key={tag} className={`px-3 py-1 rounded-full bg-slate-100 text-xs text-slate-600 font-medium border border-slate-200 transition-colors ${!isServicePage ? 'group-hover:bg-brand-accent/10 group-hover:text-brand-primary group-hover:border-brand-accent/20' : ''}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTÓN DE ACCIÓN */}
                <div className="flex flex-col items-center justify-center">
                  {!isServicePage ? (
                     // Flecha: Ahora es oscura o azul para contrastar con el blanco
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 text-slate-400 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all transform group-hover:-rotate-45">
                        <div className="opacity-0 group-hover:opacity-100 absolute transition-opacity">
                          <ArrowUpRight />
                        </div>
                        <div className="group-hover:opacity-0 absolute transition-opacity">
                          <ChevronRight />
                        </div>
                    </div>
                  ) : (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); 
                        window.open(`https://wa.me/123456789?text=Hola, me interesa el servicio de ${item.title}`);
                      }}
                      className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white transition-all text-sm font-bold cursor-pointer"
                    >
                      Consultar <MessageCircleQuestion size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};