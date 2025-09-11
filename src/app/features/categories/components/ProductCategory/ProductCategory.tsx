import type { IProductCategory } from "../models/ProductCategory";
import styles from "./ProductCategory.module.css";

interface Props {
  category: IProductCategory;
}

export default function ProductCategory({ category }: Props) {
  return (
    <div className={styles.category}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={`${category.img}?q=100`}
          width="128"
          height="128"
          alt={category.name}
        />
      </div>
      <p>{category.name}</p>
    </div>
  );
}
