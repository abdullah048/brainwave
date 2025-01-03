import ButtonGradient from '../../public/assets/svg/ButtonGradient';
import React, { Fragment } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Collaboration from '@/components/Collaboration';
import Services from '@/components/Services';

const Home = () => {
  return (
    <Fragment>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </Fragment>
  );
};

export default Home;
