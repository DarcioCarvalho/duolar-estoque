import { Product } from "./product"

export type Stock = {
  id: number;
  product: Product;
  amount: number;
  isAssembled?: boolean;
}