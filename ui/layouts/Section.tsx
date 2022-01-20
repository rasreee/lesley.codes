import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

export type SectionProps = HTMLAttributes<HTMLElement>;

export const Section: React.FunctionComponent<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={classNames(className, 'flex flex-col gap-3 py-2')} {...props}>
      {children}
    </section>
  );
};
