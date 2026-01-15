import { Snowflake } from 'lucide-react';

export function SCLogo() {
  return (
    <div className="flex items-center gap-4 py-2">
      {/* Snowflake Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-brand-accent opacity-20 blur-lg rounded-full"></div>
        <div className="relative bg-brand-dark p-2.5 rounded-lg border-2 border-brand-accent">
          <Snowflake className="w-6 h-6 text-brand-accent" strokeWidth={2.5} />
        </div>
      </div>
      
      {/* Logo Text and Label */}
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-0">
          <span className="text-white font-bold text-2xl tracking-tight">SC</span>
          <span className="text-brand-accent font-bold text-2xl tracking-tight ml-1">.REF</span>
        </div>
        <span className="text-brand-accent text-[9px] font-medium tracking-[0.2em] uppercase leading-none">
          Soluciones climáticas
        </span>
      </div>
    </div>
  );
}
