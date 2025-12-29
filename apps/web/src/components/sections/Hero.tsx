import { ArrowUpRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-brand-dark overflow-hidden">
      {/* Fondo Abstracto Moderno */}
      <div className="absolute top-0 right-0 w-200 h-200 bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-brand-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Columna Izquierda: Texto Principal */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-highlight text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse"></span>
              Disponible ahora en Zona Oeste
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-main leading-[0.95] tracking-tight mb-8 font-display">
              CLIMA <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-accent to-brand-highlight">
                PERFECTO
              </span>.
            </h1>
            
            <p className="text-xl text-text-muted max-w-xl leading-relaxed border-l-4 border-brand-primary pl-6 mb-10">
              Servicio técnico especializado en refrigeración residencial y comercial. 
              Soluciones rápidas, prolijas y garantizadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://wa.me/+5491123376861?text=Hola!%20Quisiera%20solicitar%20un%20turno%20para%20servicio%20de%20refrigeración')}
                className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-accent hover:text-brand-dark transition-all flex items-center justify-center gap-3 group cursor-pointer shadow-lg shadow-brand-primary/20"
              >
                Solicitar Visita 
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button 
                onClick={() => navigate('/cobertura')}
                className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MapPin size={20} /> Ver Zona de Cobertura
              </button>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas de Confianza (Stats) */}
          <div className="lg:col-span-5 relative">
            {/* Elemento decorativo de fondo */}
            <div className="absolute inset-0 bg-linear-to-tr from-brand-primary/20 to-transparent rounded-3xl blur-3xl -z-10"></div>

            <div className="grid grid-cols-2 gap-4">
               {/* Card 1: Experiencia */}
              <div className="bg-surface-card/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-brand-accent/30 transition-all hover:-translate-y-1 duration-300">
                <p className="text-4xl font-bold text-text-main mb-2 font-display">+500</p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-bold">Equipos Instalados</p>
              </div>

               {/* Card 2: Garantía */}
              <div className="bg-surface-card/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-brand-accent/30 transition-all hover:-translate-y-1 duration-300 delay-75">
                <p className="text-4xl font-bold text-text-main mb-2 font-display">100%</p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-bold">Garantía Escrita</p>
              </div>
              
               {/* Card 3: Reemplazo de Matriculado -> Diagnóstico */}
              <div className="col-span-2 bg-surface-card p-8 rounded-2xl border border-brand-primary/30 flex items-center gap-6 hover:border-brand-accent/50 transition-colors group">
                <div className="bg-brand-primary/20 p-4 rounded-full text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <p className="text-xl text-text-main font-bold font-display mb-1">Técnico Certificado</p>
                  <p className="text-sm text-text-muted">Trabajos bajo norma y con seguro.</p>
                </div>
              </div>

                {/* Card 4: Rapidez (Nueva) */}
              <div className="col-span-2 bg-surface-dark/50 p-6 rounded-2xl border border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Clock className="text-brand-highlight" size={20} />
                    <p className="text-sm text-text-main font-medium">Respuesta Rápida</p>
                </div>
                <span className="text-xs text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">Zona Oeste</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};