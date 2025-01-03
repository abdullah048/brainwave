'use client';

import Section from '@/components/Section';
import Heading from '@/components/Heading';
import Image from 'next/image';
import { brainwaveServices } from '@/constants';
import { Generating } from '@/components/Design/Hero';

// 6:12:35

const Services = () => {
  return (
    <Section id='how-to-use'>
      <div className='container'>
        <Heading
          override
          className='md:text-center mb-12 lg:mb-20 mx-auto max-w-[50rem]'
          title='Generative AI made for creators.'
          as='h2'
          text='Brainwave unlocks the potential of AI-powered applications'
        />

        <div className='relative'>
          <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
            <div className='absolute top-0 left-0 w-full h-full md:w-3/5 xl:w-auto pointer-events-none'>
              <Image
                className='w-full h-full object-cover md:object-right'
                width={1594}
                height={1466}
                src='/assets/services/service-1.png'
                alt='service-1'
              />
            </div>

            <div className='relative z-1 max-w-72 mx-auto md:mx-0 md:ml-auto'>
              <Heading
                as='h4'
                title='Smartest AI'
                text='Brainwave unlocks the potential of AI-powered applications'
              />
              <ul className='body-2'>
                {brainwaveServices.map(service => (
                  <li key={service} className='border-t border-n-6 py-4'>
                    <div className='flex items-center gap-5'>
                      <Image
                        width={24}
                        height={24}
                        src='/assets/check.svg'
                        alt='check-mark'
                      />
                      <p className='body-2'>{service}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className='absolute left-4 right-4 bottom-5 md:left-1/2 bg-n-8/80 border border-n-1/10 md:bottom-8 md:w-2/4 md:-translate-x-1/2' />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
