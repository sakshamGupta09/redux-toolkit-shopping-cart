import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
  fetchProducts,
  selectProductsState,
} from "@features/products/productsSlice";
import { useEffect } from "react";
import Product from "../Product/Product";

export default function Products() {
  const dispatch = useAppDispatch();
  const requestState = useAppSelector(selectProductsState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productItems = requestState.data.products.map(() => <Product />);

  return (
    <section>
      <h2 className="page-title">Best Selling Products</h2>
      <ul>{productItems}</ul>
    </section>
  );
}
