import { forwardRef, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  override?: boolean;
  text?: string;
}

const Heading = forwardRef<HTMLHeadingElement, Props>((props: Props, ref) => {
  const {
    title,
    className,
    as: Component = 'h1',
    override = false,
    text,
    ...rest
  } = props;
  return (
    <div
      className={`${
        override
          ? className || ''
          : `${className ? className : ''} max-w-4xl mx-auto mb-12 lg:mb-20`
      }`}>
      <Component ref={ref} className={Component} {...rest}>
        {title}
      </Component>
      {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
    </div>
  );
});

Heading.displayName = 'Heading';

export default Heading;
