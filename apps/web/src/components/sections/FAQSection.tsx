import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "¿Cobran visita técnica?",
    answer: "Sí, la visita tiene un costo fijo por diagnóstico y viáticos. Lo bueno es que si aceptás el presupuesto de reparación en el momento, ¡la visita se bonifica al 100%!"
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Para tu comodidad aceptamos Efectivo, Transferencia Bancaria y Mercado Pago."
  },
  {
    question: "¿Cuál es la demora para un turno?",
    answer: "En temporada baja (Invierno) solemos tener disponibilidad en 24/48hs. En temporada alta (Verano) recomendamos reservar con 3 a 5 días de anticipación."
  },
  {
    question: "¿Instalan equipos usados?",
    answer: "Sí, realizamos instalaciones de equipos usados, pero requerimos una revisión previa del equipo para garantizar que esté en condiciones."
  },
  {
    question: "¿Ofrecen garantía por sus servicios?",
    answer: "Sí, ofrecemos una garantía de 90 días en casi todas nuestras reparaciones e instalaciones, siempre y cuando se sigan las recomendaciones de uso y mantenimiento. Consulta los términos específicos al momento de contratar el servicio."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // CAMBIO: Volvimos a bg-surface-dark (Oscuro)
    <section className="py-24 bg-surface-dark border-t border-white/5 relative overflow-hidden" id='dudas'>
      
      {/* Decoración sutil de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <HelpCircle size={14} />
              Resolvemos tus dudas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-main font-display mb-6">
              Preguntas <br/>
              <span className="text-text-muted">Frecuentes</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Queremos que contrates con total tranquilidad. Acá te dejamos las respuestas a lo que más nos preguntan nuestros clientes.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/123456789')}
              className="hidden lg:inline-flex text-brand-accent font-bold items-center gap-2 hover:text-brand-highlight transition-colors"
            >
              ¿Tenés otra duda? Escribinos al WhatsApp
            </button>
          </div>

          {/* Columna Derecha: Acordeón Dark */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className={`
                  rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                  ${openIndex === index 
                    ? 'bg-surface-card border-brand-accent/30 shadow-lg shadow-black/20' 
                    : 'bg-transparent border-white/5 hover:bg-white/5'
                  }
                `}
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-6 flex justify-between items-center gap-4">
                  <h3 className={`text-lg font-bold font-display transition-colors ${openIndex === index ? 'text-brand-accent' : 'text-text-main'}`}>
                    {faq.question}
                  </h3>
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0
                    ${openIndex === index ? 'bg-brand-accent text-brand-dark rotate-180' : 'bg-white/10 text-text-muted'}
                  `}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Botón mobile */}
            <div className="lg:hidden mt-8 text-center">
              <button 
                onClick={() => window.open('https://wa.me/123456789')}
                className="text-brand-accent font-bold inline-flex items-center gap-2 hover:text-brand-highlight transition-colors"
              >
                ¿Tenés otra duda? Escribinos al WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};