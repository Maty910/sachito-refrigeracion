import { ArrowUpRight, ShieldCheck, MapPin, Star, ThermometerSnowflake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-brand-dark overflow-hidden pt-25 pb-10">
      
      {/* 1. IMAGEN DE FONDO (Contexto y Profundidad) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2532&auto=format&fit=crop" 
          alt="Ambiente climatizado" 
          className="w-full h-full object-cover object-center brightness-75"
        />
        {/* Overlay degradado para que el texto se lea perfecto */}
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80"></div>
      </div>

      {/* Efectos de Luz Ambientales */}
      <div className="absolute top-0 right-0 w-200px h-200px bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Propuesta de Valor */}
          <div className="lg:col-span-7">
            
            {/* Badge de Estado */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-highlight/30 bg-brand-highlight/10 text-brand-highlight text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg shadow-brand-highlight/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-highlight opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-highlight"></span>
              </span>
              Servicio Técnico Activo • Zona Oeste
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-main leading-[0.95] tracking-tight mb-8 font-display drop-shadow-2xl">
              EL FRÍO QUE <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-accent to-white">NECESITÁS</span>.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed mb-10 font-light border-l-4 border-brand-accent pl-6">
              Olvidate del calor y de los técnicos que te dejan plantado. 
              En SC Refrigeración combinamos <strong className="text-white font-bold">prolijidad</strong>, <strong className="text-white font-bold">puntualidad</strong> y <strong className="text-white font-bold">garantía escrita</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://wa.me/+5491123376861?text=Hola!%20Quisiera%20solicitar%20un%20turno')}
                className="group relative bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(30,58,138,0.6)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-linear-to-r from-brand-primary to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  Solicitar Turno Ahora
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>

              <button 
                onClick={() => navigate('/zonas-de-cobertura')}
                className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 hover:border-brand-accent/50 cursor-pointer"
              >
                <MapPin size={20} className="text-brand-accent" />
                Ver Zonas de Cobertura
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-accent" size={18} />
                Técnico Certificado
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Star className="text-brand-highlight" size={18} />
                4.9/5 en reseñas de clientes
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Panel de Estado "Tech" */}
          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Efecto Glow detrás de la card */}
            <div className="absolute inset-0 bg-linear-to-tr from-brand-accent/20 to-transparent rounded-4xl blur-3xl transform rotate-6 scale-90"></div>

            {/* CARD PRINCIPAL: Estilo Panel de Control */}
            <div className="relative bg-surface-card/60 backdrop-blur-xl border border-white/10 p-8 rounded-4xl shadow-2xl overflow-hidden">
              
              {/* Header de la Card */}
              <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
                <div>
                  <p className="text-xs text-brand-highlight font-bold uppercase tracking-widest mb-1">Status del Sistema</p>
                  <h3 className="text-2xl font-bold text-white font-display">Operativo</h3>
                </div>
                <div className="bg-brand-primary/20 p-3 rounded-xl text-brand-accent animate-pulse">
                  <ThermometerSnowflake size={32} />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-dark/50 p-4 rounded-xl border border-white/5">
                  <p className="text-3xl font-bold text-white mb-1 font-display">+500</p>
                  <p className="text-xs text-gray-400 uppercase">Instalaciones</p>
                </div>
                <div className="bg-brand-dark/50 p-4 rounded-xl border border-white/5">
                  <p className="text-3xl font-bold text-white mb-1 font-display">24h</p>
                  <p className="text-xs text-gray-400 uppercase">Respuesta</p>
                </div>
              </div>

              {/* Botón Flotante Simulado (Review) */}
              <div className="bg-brand-accent/10 border border-brand-accent/20 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-brand-accent text-brand-dark p-2 rounded-full">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Garantía Asegurada</p>
                  <p className="text-xs text-brand-highlight">90 días de cobertura escrita</p>
                </div>
              </div>

            </div>
            
            {/* Elemento Decorativo Flotante */}
            <div className="absolute -bottom-6 -right-6 bg-surface-dark border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-3000ms">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-bold text-white">Turnos Disponibles</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};