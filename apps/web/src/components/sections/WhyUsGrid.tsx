import { Phone, Zap, Wrench, MapPin, ArrowRight } from 'lucide-react';

export const WhyUsGrid = () => {
  return (
    <section id="eleginos" className="py-24 bg-surface-ice relative overflow-hidden">
      {/* Decoración de fondo sutil (Eco del Hero) */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Título Estilo Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-on-ice font-display mb-6 tracking-tight">
            ¿Por qué elegir a <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-accent">
              Sachito.Ref?
            </span>
          </h2>
          <p className="text-text-muted-ice text-lg">
            No somos una app anónima. Somos técnicos reales, de barrio, comprometidos con la calidad y tu seguridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: Urgencias (Principal) - Blanca con detalles sutiles */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            {/* Glow sutil en la esquina */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-accent/20 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 h-full">
                <div className="bg-brand-primary/10 p-5 rounded-2xl text-brand-primary group-hover:scale-110 transition-transform duration-300">
                    <Zap size={36} />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-on-ice font-display mb-3">Urgencias 24hs</h3>
                    <p className="text-text-muted-ice leading-relaxed mb-6 md:mb-0 text-base">
                        Prioridad absoluta para familias con niños, adultos mayores y comercios. Cuando el calor aprieta, nosotros corremos.
                    </p>
                </div>
                <button 
                    onClick={() => window.open('https://wa.me/+5491123376861?text=Hola!%20Quisiera%20consultar%20sobre%20una%20urgencia')}
                    className="shrink-0 bg-brand-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-primary transition-colors flex items-center gap-2 shadow-lg shadow-brand-dark/20"
                >
                    Consultar Ahora <ArrowRight size={18} />
                </button>
            </div>
          </div>

          {/* Card 2: Herramientas - Blanca Limpia */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
              <Wrench size={28} />
            </div>
            <h4 className="text-xl font-bold text-text-on-ice font-display mb-2">Tecnología de Punta</h4>
            <p className="text-sm text-text-muted-ice leading-relaxed">
              Bomba de vacío o nitrógeno. Diagnósticos precisos que ahorran dinero.
            </p>
          </div>

          {/* Card 3: Zona - Blanca Limpia */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
              <MapPin size={28} />
            </div>
            <h4 className="text-xl font-bold text-text-on-ice font-display mb-2">Locales en Zona Oeste</h4>
            <p className="text-sm text-text-muted-ice leading-relaxed">
              Castelar, Morón, Ituzaingó. Al estar cerca, llegamos más rápido y con menores costos de traslado.
            </p>
          </div>

           {/* Card 4: Contacto - Dark Gradient (El único toque oscuro para cerrar fuerte) */}
          <div className="md:col-span-2 bg-linear-to-br from-brand-dark to-brand-primary rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-900/20 relative overflow-hidden group ">
            <div className="relative z-10 flex flex-col md:flex-col items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white font-display mb-1">¿Tenés dudas técnicas?</h3>
                <p className="text-blue-100 text-sm opacity-90">
                  Mandanos foto de tu equipo y te asesoramos sin cargo antes de la visita.
                </p>
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/+5491123376861?text=Hola!%20Quisiera%20consultar%20sobre%20mi%20equipo')}
                className="bg-white text-brand-dark px-8 py-3 rounded-xl font-bold hover:bg-brand-highlight transition-all flex items-center gap-2 shadow-lg w-full md:w-auto justify-center"
              >
                <Phone size={20} /> WhatsApp Directo
              </button>
            </div>
            
             {/* Decoración Icono Gigante */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                <Phone size={180} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};