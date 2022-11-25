import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 h-12 max-w-172 bg-gray-800 rounded focus-within:ring-2 ring-blue-400"
      onClick={(event) => {
        event.currentTarget.firstChild?.parentElement?.querySelector("input")?.focus()
      }}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400 hidden smaller:block ">
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-400 outline-none"
      {...props}
    >
    </input>
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput
}