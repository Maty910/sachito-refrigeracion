import { Phone, Zap, Wrench, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY } from '@domain/brand/company';

const URGENCIA_WHATSAPP_URL = `https://wa.me/${COMPANY.contact.whatsapp.number}?text=${encodeURIComponent(COMPANY.contact.whatsapp.messages.urgency)}`;
const CONSULTA_WHATSAPP_URL = `https://wa.me/${COMPANY.contact.whatsapp.number}?text=${encodeURIComponent(COMPANY.contact.whatsapp.messages.consult)}`;

export const WhyUsGrid = () => {
  return (
    <section id="eleginos" className="py-12 bg-surface-ice relative overflow-hidden">
      {/* Decoración de fondo sutil (Eco del Hero) */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-125 h-125 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-125 h-125 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Título Estilo Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-balance text-4xl md:text-5xl font-bold text-text-on-ice font-display mb-6 tracking-tight">
            ¿Por qué elegir a <br />
            <span className="text-brand-primary">SC Refrigeración?</span>
          </h2>
          <p className="text-text-muted-ice text-lg">
            No somos una app anónima. Somos técnicos reales, de barrio, comprometidos con la calidad y tu seguridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1: Urgencias (Principal) */}
          <div className="md:col-span-2 bg-white rounded-xl p-8 md:p-10 border border-slate-200 relative overflow-hidden transition-colors duration-200 hover:border-brand-primary/40 hover:bg-slate-50/40 motion-reduce:transition-none">
            {/* Glow sutil en la esquina — ambient atmosphere, static (no group-hover) */}
            <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 h-full">
              <div className="bg-brand-primary/10 p-5 rounded-xl text-brand-primary shrink-0">
                <Zap size={36} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-text-on-ice font-display mb-3">Urgencias 24hs</h3>
                <p className="text-text-muted-ice leading-relaxed mb-6 md:mb-0 text-base">
                  Prioridad absoluta para equipos que se dejaron de funcionar de un día para el otro y ya tienen programados viajes.
                </p>
              </div>
              <a
                href={URGENCIA_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar por urgencia en WhatsApp"
                className="group shrink-0 inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-xl font-bold transition-colors duration-200 hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-ice motion-reduce:transition-none"
              >
                Consultar Ahora
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </a>
            </div>
          </div>

          {/* Card 2: Herramientas */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 flex flex-col justify-center transition-colors duration-200 hover:border-brand-primary/40 hover:bg-slate-50/40 group motion-reduce:transition-none">
            <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center text-slate-600 mb-6 transition-colors duration-200 group-hover:bg-brand-accent/10 group-hover:text-brand-accent motion-reduce:transition-none">
              <Wrench size={28} aria-hidden="true" />
            </div>
            <h4 className="text-xl font-bold text-text-on-ice font-display mb-2">Tecnología de Punta</h4>
            <p className="text-sm text-text-muted-ice leading-relaxed">
              Vacuómetros, manómetros digitales y nitrógeno. Diagnósticos precisos que ahorran dinero.
            </p>
          </div>

          {/* Card 3: Zona */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 flex flex-col justify-center transition-colors duration-200 hover:border-brand-primary/40 hover:bg-slate-50/40 group motion-reduce:transition-none">
            <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center text-slate-600 mb-6 transition-colors duration-200 group-hover:bg-brand-accent/10 group-hover:text-brand-accent motion-reduce:transition-none">
              <MapPin size={28} aria-hidden="true" />
            </div>
            <h4 className="text-xl font-bold text-text-on-ice font-display mb-2">Cobertura en Zona Oeste</h4>
            <p className="text-sm text-text-muted-ice leading-relaxed">
              Castelar, Morón, Ituzaingó, Hurlingham, Merlo y Tres de Febrero. Al estar cerca, llegamos más rápido y con menores costos de traslado.
            </p>
          </div>

          {/* Card 4: Contacto — único toque oscuro, sólido para énfasis visual de la CTA */}
          <div className="md:col-span-2 bg-brand-dark rounded-xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white font-display mb-1">¿Tenés dudas técnicas?</h3>
                <p className="text-blue-100 text-sm opacity-90">
                  Mandanos foto de tu equipo y te asesoramos sin cargo antes de la visita.
                </p>
              </div>
              <a
                href={CONSULTA_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar por WhatsApp"
                className="group inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-3 rounded-xl font-bold transition-colors duration-200 hover:bg-brand-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark w-full md:w-auto justify-center motion-reduce:transition-none"
              >
                <Phone size={20} aria-hidden="true" /> WhatsApp Directo
              </a>
            </div>

            {/* Decoración Icono Gigante — ambiente, sin interacción */}
            <div aria-hidden="true" className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
              <Phone size={180} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
