import { Slot } from '@radix-ui/react-slot';
import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Link({ children, asChild, className, ...rest }: LinkProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={`text-gray-300 text-md sm:text-2xl font-semibold hover:text-blue-300 hover:cursor-pointer transition-colors ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}