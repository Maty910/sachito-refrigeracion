import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-brand-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-150 h-150 bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-brand-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-brand-highlight text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Disponible en Zona Oeste
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-main leading-[0.9] tracking-tight mb-8 font-display">
              CLIMA <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-accent to-brand-highlight">
                PERFECTO
              </span>.
            </h1>
            
            <p className="text-xl text-text-muted max-w-2xl leading-relaxed border-l-4 border-brand-primary pl-6 mb-10">
              Servicio técnico matriculado especializado en refrigeración residencial y comercial. 
              Diagnosticamos lo que otros no ven.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.open('https://wa.me/+5491123376861?text=Hola!%20Quisiera%20solicitar%20un%20turno%20para%20servicio%20de%20refrigeración')}
                className="bg-brand-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-accent hover:text-brand-dark transition-all flex items-center gap-3 group cursor-pointer shadow-lg shadow-brand-primary/20"
              >
                Solicitar Visita 
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button 
                onClick={() => navigate('/zona-de-cobertura')}
                className="px-8 py-4 rounded-lg font-bold text-white border border-white/20 hover:bg-white/5 transition-all cursor-pointer"
              >
                Ver Zona de Cobertura
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-brand-accent/30 transition-colors">
                <p className="text-3xl font-bold text-text-main mb-1 font-display">+500</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">Instalaciones</p>
              </div>
              <div className="bg-surface-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-brand-accent/30 transition-colors">
                <p className="text-3xl font-bold text-text-main mb-1 font-display">100%</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">Garantía</p>
              </div>
              
              <div className="col-span-2 bg-surface-card p-6 rounded-2xl border border-brand-primary/30 flex items-center gap-4">
                <div className="bg-brand-primary/20 p-3 rounded-full text-brand-accent">
                  <ShieldCheck />
                </div>
                <div>
                  <p className="text-text-main font-bold font-display">Matriculado CACAAV</p>
                  <p className="text-xs text-text-muted">Certificación Oficial</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};