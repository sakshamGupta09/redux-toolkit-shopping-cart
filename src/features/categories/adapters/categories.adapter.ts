import { CATEGORIES } from "../mocks/categories";
import type { IProductCategory } from "../models/ProductCategory";

export function adaptCategories(): IProductCategory[] {
  return [...CATEGORIES];
}
