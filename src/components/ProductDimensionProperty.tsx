import { ReactNode } from "react";
import { Text } from "./Text";

interface ProductDimensionPropertyProps {
  iconProperty: ReactNode;
  title: string;
  value: string;
}

export function ProductDimensionProperty({ iconProperty, title, value }: ProductDimensionPropertyProps) {
  return (
    <div className="flex gap-1.5">

      <div className="min-w-[49px]">
        {iconProperty}
      </div>

      <div className="flex flex-col smaller:flex-row gap-0 smaller:gap-1.5">
        <Text className="ml-1.5 pt-1.5 font-semibold">
          {title}
        </Text >
        <Text className="pt-1.5 ml-5 smaller:ml-0">
          {value}
        </Text>
      </div>

    </div>
  );
}