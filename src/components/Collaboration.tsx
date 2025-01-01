import Section from '@/components/Section';
import Heading from '@/components/Heading';
import { collabApps, collabContent, collabText } from '@/constants';
import Image from 'next/image';
import Button from '@/components/Button';
import { LeftCurve, RightCurve } from '@/components/Design/Collaboration';

// 5:59:41

const Collaboration = () => {
  return (
    <Section crosses>
      <div className='container lg:flex'>
        <div className='max-w-96'>
          <Heading
            title='AI Chat App for seamless collaboration'
            as='h2'
            className='mb-4 md:mb-8'
            override
          />

          <ul className='mb-10 md:mb-14 xl:mb-[5.5rem] space-y-6'>
            {collabContent.map(({ id, title, text }) => (
              <li key={id}>
                <div className='flex items-center gap-5'>
                  <Image
                    width={24}
                    height={24}
                    src='/assets/check.svg'
                    alt='check-mark'
                  />
                  <Heading title={title} as='h6' override />
                </div>
                {text && <p className='body-2 mt-3 text-n-4'>{text}</p>}
              </li>
            ))}
          </ul>

          <Button>try it now</Button>
        </div>

        <div className='lg:ml-auto lg:w-[38rem] mt-4'>
          <p className='body-2 lg:max-w-[26rem] text-n-4 mb-4 md:mb-16 lg:mb-32 lg:mx-auto'>
            {collabText}
          </p>

          <div className='relative left-1/2 flex aspect-square max-w-80 border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100'>
            <div className='flex w-52 aspect-square m-auto border border-n-6 rounded-full'>
              <div className='w-24 p-1 relative aspect-square m-auto bg-conic-gradient rounded-full'>
                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                  <Image
                    src='/assets/brainwave-symbol.svg'
                    width={48}
                    height={48}
                    alt='logo'
                    priority
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.5rem] origin-bottom rotate-${
                    index * 45
                  }`}>
                  <div
                    className={`relative -top-[1.5rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}>
                    <Image
                      className='m-auto'
                      src={app.icon}
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
