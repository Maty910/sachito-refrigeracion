import { Phone, Zap, Wrench, MapPin } from 'lucide-react';

export const WhyUsGrid = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Card Principal: Urgencias (Era blue-600) */}
          <div className="md:col-span-2 bg-brand-primary rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-brand-accent/30 transition-colors">
            {/* Glow effect ajustado */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <Zap className="text-brand-highlight mb-4" size={40} />
              <h3 className="text-3xl font-bold text-text-main mb-2 font-display">Urgencias 24hs</h3>
              <p className="text-blue-100 max-w-sm">
                Sabemos que el calor no espera. Priorizamos casos críticos en temporada alta.
              </p>
            </div>
            <button className="self-start mt-6 bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm font-bold backdrop-blur-sm transition-colors cursor-pointer">
              Consultar Disponibilidad
            </button>
          </div>

          {/* Card Herramientas (Era surface-dark hardcodeado) */}
          <div className="bg-surface-card rounded-3xl p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:border-brand-accent/50 transition-colors group">
            <Wrench className="text-brand-accent mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h4 className="text-text-main font-bold text-xl mb-2 font-display">Herramientas Pro</h4>
            <p className="text-text-muted text-sm">
              Bomba de vacío, nitrógeno, manifold digital. No improvisamos.
            </p>
          </div>

          {/* Card Zona (Igual que arriba) */}
          <div className="bg-surface-card rounded-3xl p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:border-brand-accent/50 transition-colors group">
            <MapPin className="text-brand-accent mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h4 className="text-text-main font-bold text-xl mb-2 font-display">Zona Oeste</h4>
            <p className="text-text-muted text-sm">
              Castelar, Ituzaingó, Morón, Padua. Llegamos rápido.
            </p>
          </div>

           {/* Card Contacto (Era gray-900 y green-500) */}
          <div className="md:col-span-2 bg-surface-dark rounded-3xl p-10 flex items-center justify-between border border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-text-main mb-2 font-display">¿Tenés dudas?</h3>
              <p className="text-text-muted">
                Te asesoramos gratis por WhatsApp antes de ir.
              </p>
            </div>
             {/* Usamos status-success para el botón de WhatsApp (verde) */}
            <div 
              className="bg-status-success p-4 rounded-full text-white shadow-lg shadow-status-success/20 animate-pulse cursor-pointer hover:scale-110 transition-transform" 
              onClick={() => window.open('https://wa.me/123456789')}
            >
              <Phone size={32} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};