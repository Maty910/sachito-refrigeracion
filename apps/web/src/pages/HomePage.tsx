import { Hero } from '../components/sections/Hero';
import { HomeServices } from '../components/sections/HomeServices';
import { WhyUsGrid } from '../components/sections/WhyUsGrid';
import { AboutSection } from '../components/sections/AboutSection'; // <--- Importar
import { GuaranteeSection } from '../components/sections/GuaranteeSection';

export const HomePage = () => {
  return (
    <>
      <Hero />             {/* Oscuro */}
      <AboutSection />     {/* Claro (Ice) - ID: #nosotros */}
      <HomeServices />     {/* Oscuro */}
      <WhyUsGrid />        {/* Claro (Ice) - ID: #eleginos */}
      <GuaranteeSection /> 
    </>
  );
};