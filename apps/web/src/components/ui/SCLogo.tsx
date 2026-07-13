import { COMPANY } from '@domain/brand/company';

interface SCLogoProps {
  variant?: 'navbar' | 'footer';
  className?: string;
}

export function SCLogo({ variant = 'navbar', className = '' }: SCLogoProps) {
  // Responsive sizing based on variant
  const sizeClasses = {
    navbar: 'h-12 sm:h-14 md:h-16 lg:h-18',
    footer: 'h-14 md:h-16',
  };

  const baseClasses = `w-auto transition-all duration-300 ${sizeClasses[variant]} ${className}`;

  return (
    <img
      src={COMPANY.brand.logo.webp}
      alt={COMPANY.name.commercial}
      className={baseClasses}
    />
  );
}
