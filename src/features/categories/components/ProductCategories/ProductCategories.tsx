import { useAppDispatch, useAppSelector } from "@/app/hooks";
import styles from "./ProductCategories.module.css";
import { useEffect } from "react";
import { fetchCategories, selectCategoriesState } from "../../slice";

export default function ProductCategories() {
  const dispatch = useAppDispatch();
  const categoriesState = useAppSelector(selectCategoriesState);

  useEffect(() => {
    if (categoriesState.status === "idle") {
      dispatch(fetchCategories());
    }
  }, [categoriesState, dispatch]);

  return <section className={styles.categories}></section>;
}
