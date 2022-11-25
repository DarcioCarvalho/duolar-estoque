import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={className}
    >
      {children}
    </Comp>
  );
}