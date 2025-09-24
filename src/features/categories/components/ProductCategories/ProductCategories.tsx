import { useAppDispatch, useAppSelector } from "@app/hooks";
import styles from "./ProductCategories.module.css";
import { useEffect } from "react";
import { fetchCategories, selectCategoriesState } from "../../slice";
import ProductCategory from "../ProductCategory/ProductCategory";
import type { IProductCategory } from "@features/categories/models/ProductCategory";

export default function ProductCategories() {
  const dispatch = useAppDispatch();
  const categoriesState = useAppSelector(selectCategoriesState);

  const isLoading = categoriesState.status === "progress";

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const categoryItems = categoriesState.data.map((el: IProductCategory) => (
    <ProductCategory key={el.id} category={el} loading={isLoading} />
  ));

  return (
    <>
      <h2 className="page-title">Shop by Category</h2>
      <section className={styles.categories} aria-busy={isLoading}>
        {categoryItems}
      </section>
    </>
  );
}
