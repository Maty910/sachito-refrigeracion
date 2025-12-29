import { Snowflake, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-brand-dark overflow-hidden text-center px-6">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Snowflake size={120} className="text-brand-accent animate-[spin_10s_linear_infinite] opacity-80" />
            <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full"></div>
          </div>
        </div>
        
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-white/10 font-display mb-4">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
          ¡Te congelaste!
        </h2>
        
        <p className="text-xl text-text-muted mb-10 leading-relaxed">
          Parece que la página que buscás no existe o se perdió en el frío. 
          Mejor volvamos a un lugar más cálido.
        </p>

        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-accent hover:text-brand-dark transition-all group shadow-lg shadow-brand-primary/20 cursor-pointer"
        >
          <Home size={20} /> Volver al Inicio
        </button>
      </div>
    </section>
  );
};