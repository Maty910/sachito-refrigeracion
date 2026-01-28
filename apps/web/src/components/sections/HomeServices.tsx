import { ArrowRight, Snowflake, Wrench, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HomeServices = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Instalación",
      desc: "Split y Multisplit. Respetamos la garantía de fábrica.",
      icon: <Snowflake size={32} />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Reparación",
      desc: "Placas electrónicas, cambio de compresores y fugas.",
      icon: <Wrench size={32} />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Mantenimiento",
      desc: "Limpieza profunda y carga de gas para ahorrar energía.",
      icon: <Settings size={32} />,
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    // Mantenemos fondo oscuro acá para que contraste con el Hero y el WhyUs (que ahora es claro)
    <section className="py-24 bg-surface-dark border-y border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-2 block font-display">
              ¿Qué hacemos?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
              Soluciones{' '}<span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-accent">Integrales</span>
            </h2>
          </div>
          <button 
            onClick={() => navigate('/servicios')}
            className="group flex items-center gap-2 text-white font-bold hover:text-brand-accent transition-colors"
          >
            Ver detalle de servicios <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => navigate('/servicios')}
              className="bg-surface-card border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${cat.color} transition-transform group-hover:scale-110`}>
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">{cat.title}</h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {cat.desc}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Saber más <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};