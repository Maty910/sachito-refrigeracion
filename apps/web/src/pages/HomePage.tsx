import { Hero } from '../components/sections/Hero';
import { HomeServices } from '../components/sections/HomeServices';
import { WhyUsGrid } from '../components/sections/WhyUsGrid';
import { AboutSection } from '../components/sections/AboutSection';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';
import { Testimonials } from '../components/sections/Testimonials'; // <--- Importar

export const HomePage = () => {
  return (
    <>
      <Hero />             {/* Oscuro */}
      <AboutSection />     {/* Claro (Ice) */}
      <HomeServices />     {/* Oscuro */}
      <WhyUsGrid />        {/* Claro (Ice) */}
      <GuaranteeSection /> {/* Oscuro */}
      <Testimonials />     {/* Claro (Ice) */}
    </>
  );
};