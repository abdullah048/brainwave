import { forwardRef, Fragment, HTMLAttributes, PropsWithChildren } from 'react';
import SectionSvg from '../../public/assets/svg/SectionSvg';

interface Props extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
}

const Section = forwardRef<HTMLElement, Props>((props: Props, ref) => {
  const {
    children,
    className,
    id,
    customPaddings,
    crosses,
    crossesOffset,
    ...rest
  } = props;

  return (
    <section
      ref={ref}
      id={id}
      className={`
        relative 
        ${
          customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''}`
        } 
        ${className || ''}`}
      {...rest}>
      {children}

      <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10' />
      <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10' />

      {crosses && (
        <Fragment>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset || ''
            } pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </Fragment>
      )}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
