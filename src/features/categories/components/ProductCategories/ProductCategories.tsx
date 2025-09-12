import { useAppDispatch, useAppSelector } from "@/app/hooks";
import styles from "./ProductCategories.module.css";
import { useEffect } from "react";
import { fetchCategories, selectCategoriesState } from "../../slice";
import ProductCategory from "../ProductCategory/ProductCategory";

export default function ProductCategories() {
  const dispatch = useAppDispatch();
  const categoriesState = useAppSelector(selectCategoriesState);

  useEffect(() => {
    if (categoriesState.status === "idle") {
      dispatch(fetchCategories());
    }
  }, [categoriesState, dispatch]);

  const categoryItems = categoriesState.data.map((el) => (
    <ProductCategory key={el.id} category={el} />
  ));

  return (
    <>
      <h2 className="page-title">Shop by Category</h2>
      <section className={styles.categories}>{categoryItems}</section>
    </>
  );
}
