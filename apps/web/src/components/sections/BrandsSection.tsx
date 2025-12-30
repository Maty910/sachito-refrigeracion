import { CheckCircle2 } from 'lucide-react';

const BRANDS = [
  "Surrey", "Carrier", "Samsung", "LG", 
  "Electra", "BGH", "Philco", "Midea",
  "Hisense", "York", "Cardiff", "Daikin",
  "Noblex", "Whirlpool", "Drean",
  "Sanyo", "Gafa", "Koh-i-noor"
];

export const BrandsSection = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <p className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3">
            Respaldo Técnico
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-text-on-ice font-display">
            Experiencia en Primeras Marcas
          </h3>
        </div>

        {/* Grilla de Marcas */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {BRANDS.map((brand) => (
            <div 
              key={brand}
              className="flex items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-display font-bold text-lg hover:bg-white hover:text-brand-primary hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300 cursor-default group"
            >
              <span className="group-hover:scale-105 transition-transform">{brand}</span>
            </div>
          ))}
        </div>

        {/* Texto adicional */}
        <div className="text-center mb-12">
          <p className="text-slate-500 italic">Y muchas marcas más...</p>
        </div>

        {/* Bajada de confianza */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-text-muted-ice">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-brand-accent" />
            <span>Repuestos Originales</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-brand-accent" />
            <span>Garantía de Fabricante</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-brand-accent" />
            <span>Manuales Oficiales</span>
          </div>
        </div>

      </div>
    </section>
  );
};