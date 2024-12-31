import Section from '@/components/Section';
import Heading from '@/components/Heading';
import { collabContent } from '@/constants';
import Image from 'next/image';
import Button from './Button';

// 5:45:54

const Collaboration = () => {
  return (
    <Section crosses>
      <div className='container xl:flex'>
        <div className='max-w-96'>
          <Heading
            title='AI Chat App for seamless collaboration'
            as='h2'
            className='mb-4 md:mb-8'
            override
          />

          <ul className='mb-10 md:mb-14 space-y-6'>
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
      </div>
    </Section>
  );
};

export default Collaboration;
