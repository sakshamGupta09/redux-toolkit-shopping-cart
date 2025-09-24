import Products from "@features/products/components/Products/Products";
import ProductCategories from "../../features/categories/components/ProductCategories/ProductCategories";

export default function HomePage() {
  return (
    <>
      <ProductCategories />
      <Products />
    </>
  );
}
