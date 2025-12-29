import { Hero } from '../components/sections/Hero';
import { WhyUsGrid } from '../components/sections/WhyUsGrid';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';
import { HomeServices } from '../components/sections/HomeServices';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeServices />
      <WhyUsGrid />
      <GuaranteeSection /> 
    </>
  );
};