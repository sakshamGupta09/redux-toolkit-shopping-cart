import type { IProductCategory } from "../models/ProductCategory";
import styles from "./ProductCategory.module.css";

interface Props {
  category: IProductCategory;
}

export default function ProductCategory({ category }: Props) {
  const image = {
    sm: `${category.img}?q=60`,
    lg: `${category.img}?q=100`,
  };

  return (
    <div className={styles.category}>
      <div className={styles.imgContainer}>
        <picture title={category.name}>
          <source media="(width < 800px)" srcSet={image.sm} />
          <source media="(width >= 800px)" srcSet={image.lg} />
          <img src={image.lg} alt={category.name} className={styles.img} />
        </picture>
      </div>
      <p className={styles.text}>{category.name}</p>
    </div>
  );
}
