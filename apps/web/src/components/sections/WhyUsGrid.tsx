import { Phone, Zap, Wrench, MapPin } from 'lucide-react';

export const WhyUsGrid = () => {
  return (
    // ID cambiado a 'eleginos' para diferenciar de 'nosotros'
    <section id="eleginos" className="py-24 bg-surface-ice">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-text-on-ice font-display mb-4">
            ¿Por qué los vecinos <br/> nos eligen?
          </h2>
          <p className="text-text-muted-ice max-w-xl">
            En un mercado lleno de improvisados, nosotros apostamos a la calidad y la transparencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Card Principal: Urgencias (Fondo Oscuro para resaltar) */}
          <div className="md:col-span-2 bg-brand-dark rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-brand-dark/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Zap className="text-brand-highlight" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 font-display">Urgencias 24hs</h3>
              <p className="text-gray-300 max-w-sm text-lg">
                Sabemos que el calor no espera. En temporada alta, priorizamos casos críticos.
              </p>
            </div>
            
            <button 
                onClick={() => window.open('https://wa.me/123456789')}
                className="self-start mt-8 bg-brand-accent text-brand-dark px-8 py-3 rounded-xl text-sm font-bold hover:bg-white transition-colors cursor-pointer"
            >
              Consultar Disponibilidad
            </button>
          </div>

          {/* Card Herramientas (Fondo Blanco) */}
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-slate-50 p-4 rounded-full mb-6">
              <Wrench className="text-brand-primary" size={40} />
            </div>
            <h4 className="text-text-on-ice font-bold text-xl mb-3 font-display">Herramientas Pro</h4>
            <p className="text-text-muted-ice text-sm leading-relaxed">
              Bomba de vacío, nitrógeno, manifold digital. Invertimos en tecnología.
            </p>
          </div>

          {/* Card Zona (Fondo Blanco) */}
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-slate-50 p-4 rounded-full mb-6">
              <MapPin className="text-brand-primary" size={40} />
            </div>
            <h4 className="text-text-on-ice font-bold text-xl mb-3 font-display">Zona Oeste</h4>
            <p className="text-text-muted-ice text-sm leading-relaxed">
              Castelar, Ituzaingó, Morón, Padua. Llegamos rápido.
            </p>
          </div>

           {/* Card Contacto (Fondo Cyan) */}
          <div className="md:col-span-2 bg-brand-accent rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-cyan-500/20 relative overflow-hidden">
            <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-brand-dark mb-2 font-display">¿Tenés dudas técnicas?</h3>
              <p className="text-brand-dark/80 font-medium text-lg">
                Te asesoramos gratis por WhatsApp antes de ir.
              </p>
            </div>
            
            <button 
              onClick={() => window.open('https://wa.me/123456789')}
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-dark transition-all flex items-center gap-3 cursor-pointer shadow-lg z-10"
            >
              <Phone size={20} className="text-brand-accent" /> Escribinos
            </button>
            <div className="absolute -right-10 -bottom-20 opacity-10 pointer-events-none">
                <Phone size={340} className='mb-20 mr-8 rotate-265 z-2'/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};