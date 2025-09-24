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

  const productItems = requestState.data.products.map((product) => <Product />);

  return (
    <>
      <h2 className="page-title">Trending Products</h2>
      <section></section>
    </>
  );
}
