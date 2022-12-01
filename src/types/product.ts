export type Product = {
  name: string;
  branch: string;
  imageURL: string;
  size?: Size;
}

export type Size = {
  width: string;
  height: string;
  depth?: string;
}