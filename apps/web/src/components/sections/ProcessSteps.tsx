export const ProcessSteps = () => {
  const steps = [
    { num: '01', title: 'Diagnóstico', desc: 'Evaluamos el equipo y el entorno para detectar la raíz del problema.' },
    { num: '02', title: 'Presupuesto', desc: 'Te pasamos un precio cerrado y claro antes de tocar cualquier tornillo.' },
    { num: '03', title: 'Ejecución', desc: 'Trabajamos con limpieza y herramientas de precisión (Bomba de vacío, Nitrógeno).' },
    { num: '04', title: 'Garantía', desc: 'Te entregamos el equipo funcionando y con garantía escrita.' },
  ];

  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main font-display mb-4">¿Cómo trabajamos?</h2>
          <p className="text-text-muted">Transparencia desde el primer mensaje hasta el final.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative group">
              <div className="text-6xl font-display font-bold text-brand-primary/20 mb-4 group-hover:text-brand-accent/20 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2 font-display">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              
              {/* Línea conectora (solo visual) */}
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};