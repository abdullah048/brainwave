import Section from '@/components/Section';
import Heading from '@/components/Heading';
import { benefits } from '@/constants';
import Image from 'next/image';
import Arrow from '../../public/assets/svg/Arrow';
import { GradientLight } from '@/components/Design/Benefits';
import ClipPath from '../../public/assets/svg/ClipPath';

const Benefits = () => {
  return (
    <Section id='features'>
      <div className='container relative z-2'>
        <Heading
          className='md:max-w-md lg:max-w-2xl text-center'
          as='h2'
          title='Chat Smarter, Not Harder with Brainwave'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
          {benefits.map(benefit => (
            <div
              className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-sm'
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
              key={benefit.id}>
              <div className='relative z-2 flex flex-col min-h-80 p-10 pointer-events-none'>
                <Heading
                  className='mb-5'
                  title={benefit.title}
                  as='h5'
                  override
                />
                <p className='body-2 mb-6 text-n-3'>{benefit.text}</p>
                <div className='flex items-center mt-auto'>
                  <Image
                    src={benefit.iconUrl}
                    alt='card-icon'
                    width={48}
                    height={48}
                  />
                  <p className='ml-auto font-code text-xs font-bold text-n-1 tracking-wider md:text-sm'>
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {benefit.light && <GradientLight />}

              <div
                className='absolute inset-0.5 bg-n-8'
                style={{
                  clipPath: 'url(#benefits)',
                }}>
                {benefit.imageUrl && (
                  <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                    <Image
                      className='w-full h-full object-cover'
                      src={benefit.imageUrl}
                      alt='hover-card-image'
                      width={384}
                      height={384}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
          <ClipPath />
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
