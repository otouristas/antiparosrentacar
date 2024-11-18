import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CarFleet from '../components/CarFleet';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <CarFleet />
      <Testimonials />
    </>
  );
};

export default Home;