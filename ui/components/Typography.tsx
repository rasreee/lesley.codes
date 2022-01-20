import { cn } from '@lib/classnames';
import { HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  children: ReactNode;
  /* Custom text color className */
  color?: string;
  /* Custom font size className */
  size?: string;
  /* Custom font weight className */
  weight?: string;
}

const defaultTextColor = 'text-gray-700 dark:text-gray-100';

export const H1: React.FC<TextProps> = ({
  children,
  className,
  size = 'text-4xl md:text-5xl',
  color = defaultTextColor,
  weight = 'font-bold',
  ...props
}) => {
  return (
    <h1
      className={cn(
        size,
        color,
        weight,
        'tracking-tight',
        className
          ?.split(' ')
          .map((c) => `${c}`)
          .join(' ')
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<TextProps> = ({
  children,
  className,
  size = 'text-2xl md:text-3xl',
  color = defaultTextColor,
  weight = 'font-bold',
  ...props
}) => {
  return (
    <h1
      className={cn(
        size,
        color,
        weight,
        'tracking-tight',
        className
          ?.split(' ')
          .map((c) => `${c}`)
          .join(' ')
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H3: React.FC<TextProps> = ({
  children,
  className,
  size = 'text-xl md:text-2xl',
  weight = 'font-semibold',
  color = defaultTextColor,
  ...props
}) => {
  return (
    <h3
      className={cn(
        color,
        size,
        weight,
        'tracking-tight',
        className
          ?.split(' ')
          .map((c) => `${c}`)
          .join(' ')
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const P: React.FC<TextProps> = ({
  children,
  className = '',
  size = 'text-base md:text-lg 2xl:text-xl',
  color = defaultTextColor,
  weight = 'font-normal',
  ...props
}) => {
  return (
    <p
      className={cn(
        color,
        size,
        weight,
        'tracking-tight',
        className
          ?.split(' ')
          .map((c) => `${c}`)
          .join(' ')
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const Span: React.FC<TextProps> = ({
  children,
  className,
  size = 'text-base md:text-lg',
  color = defaultTextColor,
  weight = 'font-normal',
  ...props
}) => {
  return (
    <span
      className={cn(
        color,
        size,
        weight,
        className
          ?.split(' ')
          .map((c) => `${c}`)
          .join(' ')
      )}
      {...props}
    >
      {children}
    </span>
  );
};
