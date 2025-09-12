import { CATEGORIES } from "../constants/categories";
import type {
  ICategoriesResponse,
  IProductCategory,
} from "../models/ProductCategory";

export function adaptCategories(
  response: ICategoriesResponse[]
): IProductCategory[] {
  return CATEGORIES;
}
