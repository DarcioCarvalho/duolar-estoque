import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({ children, asChild, className }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp
      className={`text-gray-100 font-sans font-semibold text-2xl sm:text-3xl md:text-5xl ${className}`}
    >
      {children}
    </Comp>
  );
}