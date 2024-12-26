import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import ButtonSvg from '../../public/assets/svg/ButtonSvg';

const buttonStyles = cva(
  'relative inline-flex items-center justify-center h-11 px-7 transition-colors hover:text-color-1',
  {
    variants: {
      variant: {
        primary: 'text-n-1',
        secondary: 'text-n-8',
        hamburger: 'ml-auto lg:hidden px-3',
      },
      defaultVariants: {
        variant: 'primary',
      },
    },
  }
);

interface BaseProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  as?: 'button' | 'a';
  href?: string;
  isLoading?: boolean;
  textprops?: HTMLAttributes<HTMLSpanElement>;
}

type Props = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (props: Props, ref) => {
    const {
      children,
      className,
      href,
      as = 'button',
      isLoading,
      variant,
      textprops = {},
      ...rest
    } = props;

    const Component = as;

    return (
      <Component
        ref={ref as any}
        className={cn(buttonStyles({ variant }), className)}
        {...rest}
        {...(as === 'a' ? { href } : { disabled: isLoading })}
        {...props}>
        <span
          className={cn(
            'relative z-10 font-code font-bold uppercase text-xs',
            textprops.className
          )}
          {...textprops}>
          {children}
        </span>
        {ButtonSvg(variant === 'secondary')}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
