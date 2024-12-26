import Section from '@/components/Section';
import Image from 'next/image';
import Button from '@/components/Button';

// 5:01:41

const Hero = () => {
  return (
    <Section
      className='pt-[12rem] -mt-[5.25rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings
      id='hero'>
      <div className='container'>
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-16 md:mb-20 lg:mb-24'>
          <h1 className='h1 mb-6'>
            Explore the Possibilities of AI Chatting with{' '}
            <span className='relative inline-block'>
              Brainwave{' '}
              <Image
                src='/assets/hero/curve.png'
                className='absolute top-full left-0 w-full -mt-2'
                width={1248}
                height={56}
                alt='curve'
              />
            </span>
          </h1>
          <p className='body-1 max-w-3xl mx-auto mb-6 lg:mb-8 text-n-2'>
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          <Button as='a' href='#pricing' variant='secondary'>
            Get Started
          </Button>
        </div>

        <div className='relative max-w-96 mx-auto md:max-w-5xl xl:mb-24'>
          <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
            <div className='relative bg-n-8 rounded-2xl'>
              <div className='h-6 bg-n-10 rounded-t-2xl' />

              <div className='aspect-[33/40] rounded-b-2xl overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                <Image
                  src='/assets/hero/robot.jpg'
                  alt='hero-img'
                  className='w-full scale-150 translate-y-[8%] md:scale-100 md:-translate-y-[10%] lg:-translate-y-[23%]'
                  width={1034}
                  height={1512}
                />
              </div>
            </div>
          </div>

          <div className='absolute -top-1/2 left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
            <Image
              src='/assets/hero/hero-background.jpg'
              className='w-full'
              alt='hero-background'
              width={1440}
              height={1800}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
