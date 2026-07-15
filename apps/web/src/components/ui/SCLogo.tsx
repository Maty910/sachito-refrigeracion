import { COMPANY } from '@domain/brand/company';

interface SCLogoProps {
  variant?: 'navbar' | 'footer';
  className?: string;
}

export function SCLogo({ variant = 'navbar', className = '' }: SCLogoProps) {
  // Responsive sizing based on variant.
  // El logo del footer es apaisado (1717x916), por eso usamos alturas
  // más bajas que el icono cuadrado del navbar para que el ancho renderizado
  // no rompa la grilla del footer.
  const sizeClasses = {
    navbar: 'h-12 sm:h-14 md:h-16 lg:h-18',
    footer: 'h-12 md:h-14',
  };

  const baseClasses = `w-auto transition-all duration-300 ${sizeClasses[variant]} ${className}`;

  const src = variant === 'footer' ? COMPANY.brand.logo.footerLogo : COMPANY.brand.logo.header;

  return (
    <img
      src={src}
      alt={COMPANY.name.commercial}
      className={baseClasses}
    />
  );
}
