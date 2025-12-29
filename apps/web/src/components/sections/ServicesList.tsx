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
    <section id="expertis" className="py-24 bg-surface-ice relative w-full overflow-hidden">
      <div className="absolute top-0 right-50 w-150 h-150 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-50 w-150 h-150 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {!isServicePage && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block font-display">
                  Nuestras Soluciones
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text-on-ice font-display tracking-tight">
                  Expertis Técnico <br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-accent">
                    Certificado.
                  </span>
              </h2>
            </div>
            <p className="text-text-muted-ice max-w-md text-right md:text-left font-medium text-lg">
              No somos "todólogos". Nos especializamos 100% en sistemas de refrigeración.
            </p>
          </div>
        )}

        {/* Lista de Servicios */}
        <div className="grid gap-6">
          {SERVICES.map((item) => (
            <div 
              key={item.id}
              onClick={handleCardClick}
              className={`
                group relative bg-white border border-slate-100 p-8 md:p-12 rounded-3xl transition-all duration-300 shadow-xl shadow-slate-200/50
                ${!isServicePage 
                  ? 'cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/5' 
                  : 'cursor-default' 
                }
              `}
            >
              <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between relative z-10">
                <div className="flex items-start gap-6">
                  {/* ID */}
                  <span className={`text-3xl font-display font-bold transition-colors ${!isServicePage ? 'text-brand-primary/20 group-hover:text-brand-primary' : 'text-brand-primary/20'}`}>
                    {item.id}
                  </span>
                  
                  <div>
                    {/* Título */}
                    <h3 className={`text-2xl md:text-3xl font-bold text-text-on-ice mb-3 transition-colors ${!isServicePage ? 'group-hover:text-brand-primary' : ''}`}>
                      {item.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-text-muted-ice max-w-xl leading-relaxed text-lg">
                      {item.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-50 text-sm text-slate-600 font-medium border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTÓN DE ACCIÓN */}
                <div className="flex flex-col items-center justify-center shrink-0">
                  {!isServicePage ? (
                     // Flecha Home
                    <div className="flex items-center justify-center w-14 h-14 rounded-full border border-slate-200 text-slate-400 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all transform group-hover:-rotate-45">
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 absolute transition-opacity" />
                        <ChevronRight className="group-hover:opacity-0 absolute transition-opacity" />
                    </div>
                  ) : (
                     // Botón Consultar
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); 
                        window.open(`https://wa.me/+5491123376861?text=Hola, me interesa el servicio de ${item.title}`);
                      }}
                      className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white transition-all text-sm font-bold cursor-pointer"
                    >
                      Consultar <MessageCircleQuestion size={18} />
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