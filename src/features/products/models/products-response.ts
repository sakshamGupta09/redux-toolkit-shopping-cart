import type { IProduct } from "./Product";

export interface IProductsResponse {
  total: number;
  products: IProduct[];
}
