import { ArrowUpRight, MessageCircleQuestion } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '../../data/services.mock';

// Single source of truth for the WhatsApp phone number. Matches the number
// used in Hero.tsx and Navbar.tsx so the phone stays consistent across the
// site. The per-item message is built at render time below.
const WHATSAPP_PHONE = '+5491176685418';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const ServicesList = () => {
  const location = useLocation();
  const isServicePage = location.pathname === '/servicios';

  return (
    <section id="servicios" className="py-24 bg-surface-ice relative w-full overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 right-50 w-150 h-150 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div aria-hidden="true" className="absolute bottom-0 left-50 w-150 h-150 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {!isServicePage && (
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block font-display">
                Servicios
              </span>
              <h2 className="text-balance text-4xl md:text-5xl font-bold text-text-on-ice font-display tracking-tight">
                Nuestras{' '}
                <br className="block md:hidden" />
                <span className="text-brand-primary">Soluciones.</span>
              </h2>
            </div>
            <p className="text-text-muted-ice max-w-md text-right md:text-left font-medium text-lg">
              En <strong>SC Refrigeración</strong>, nos especializamos en brindar soluciones integrales para la refrigeración de transporte, asegurando que cada carga llegue a su destino en condiciones óptimas.
            </p>
          </div>
        )}

        {/* Lista de Servicios */}
        <div className="grid gap-6">
          {SERVICES.map((item) => {
            const whatsappHref = `${WHATSAPP_BASE_URL}?text=Hola, me interesa el servicio de ${item.title}`;
            const whatsappAriaLabel = `Consultar sobre ${item.title} por WhatsApp al ${WHATSAPP_PHONE}`;

            const cardInner = (
              <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between relative z-10">
                <div className="flex items-start gap-6">
                  {/* ID */}
                  <span className={`text-3xl font-display font-bold transition-colors duration-200 motion-reduce:transition-none ${!isServicePage ? 'text-brand-primary group-hover:text-brand-primary/50' : 'text-brand-primary'}`}>
                    {item.id}
                  </span>

                  <div>
                    {/* Título */}
                    <h3 className={`text-2xl md:text-3xl font-bold text-text-on-ice mb-3 transition-colors duration-200 motion-reduce:transition-none ${!isServicePage ? 'group-hover:text-brand-primary' : ''}`}>
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 text-brand-primary transition-colors duration-200 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary motion-reduce:transition-none">
                      <ArrowUpRight className="size-5" aria-hidden="true" />
                    </div>
                  ) : (
                    // Botón Consultar
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={whatsappAriaLabel}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary/10 text-brand-primary transition-colors duration-200 hover:bg-brand-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-ice motion-reduce:transition-none text-sm font-bold"
                    >
                      Consultar <MessageCircleQuestion size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            );

            if (isServicePage) {
              return (
                <article
                  key={item.id}
                  className="relative bg-white border border-slate-200 p-8 md:p-12 rounded-xl"
                >
                  {cardInner}
                </article>
              );
            }

            return (
              <Link
                key={item.id}
                to="/servicios"
                className="group relative block bg-white border border-slate-200 p-8 md:p-12 rounded-xl transition-colors duration-200 hover:border-brand-primary/40 hover:bg-slate-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-ice motion-reduce:transition-none"
              >
                {cardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
