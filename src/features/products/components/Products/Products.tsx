import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
  fetchProducts,
  selectProductsState,
} from "@features/products/productsSlice";
import { useEffect } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";

export default function Products() {
  const dispatch = useAppDispatch();
  const requestState = useAppSelector(selectProductsState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productItems = requestState.data.products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <section className={styles.products}>
      <h2 className="page-title">Best Selling Products</h2>
      <div className={styles.products__list}>{productItems}</div>
    </section>
  );
}
