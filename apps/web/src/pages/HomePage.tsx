import { Hero } from '../components/sections/Hero';
import { ServicesList } from '../components/sections/ServicesList';
import { WhyUsGrid } from '../components/sections/WhyUsGrid';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesList />
      <WhyUsGrid />
      <GuaranteeSection /> 
    </>
  );
};