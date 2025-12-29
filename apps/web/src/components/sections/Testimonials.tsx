import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Fede C",
    location: "Cliente en Haedo",
    text: "Excelente servicio. Llegaron puntuales (algo raro hoy en día) y me explicaron todo lo que le pasaba al equipo. Quedó enfriando perfecto.",
    stars: 5,
    date: "Hace 3 semanas"
  },
  {
    id: 2,
    name: "Laura J.",
    location: "Cliente en Padua",
    text: "Los llamé por una urgencia porque el aire tiraba agua. Lo solucionaron en el día y dejaron todo impecable. Súper recomendables.",
    stars: 5,
    date: "Hace 1 mes"
  },
  {
    id: 3,
    name: "Comercio 'Barbería lo de Chacho'",
    location: "Cliente en Castelar",
    text: "Hacemos el mantenimiento de los aires del local con ellos hace 2 años. Siempre responden rápido. Profesionales serios.",
    stars: 5,
    date: "Hace 3 meses"
  }, 
  {
    id: 4,
    name: "Joaquín M.",
    location: "Cliente en Castelar",
    text: "Muy conforme con el trabajo realizado. El aire estaba quemado por un rayo hace años y lo reparó en el día. Volveré a contactarlos para futuros mantenimientos.",
    stars: 5,
    date: "Hace 2 semanas"
  }, 
  {
    id: 5,
    name: "Delfi R.",
    location: "Cliente en Floresta",
    text: "Servicio rápido y eficiente. Me explicaron todo el proceso y dejaron todo limpio. El aire funciona mejor que nunca.",
    stars: 5,
    date: "Hace 2 meses"
  }, 
  {
    id: 6,
    name: "Gabriela G.",
    location: "Cliente en Castelar",
    text: "Muy profesionales y atentos. Me ayudaron a elegir el mejor equipo para mi casa y la instalación fue impecable. Los recomiendo sin dudar.",
    stars: 5,
    date: "Hace 2 meses"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-surface-ice relative overflow-hidden" id="testimonios">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-on-ice font-display mb-4">
            Lo que dicen nuestros <br/>
            <span className="text-brand-primary">Vecinos</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-text-muted-ice">
            <span className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </span>
            <span className="font-bold text-text-on-ice">4.9/5</span>
            <span>en Reseñas de clientes</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 relative group"
            >
              <Quote className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" size={48} />
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-text-muted-ice leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-primary font-bold font-display">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-text-on-ice">{review.name}</p>
                  <div className="flex items-center gap-2 text-xs text-text-muted-ice">
                    <span>{review.location}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};