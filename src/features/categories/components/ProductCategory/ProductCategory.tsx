import Skeleton from "@components/ui/Skeleton/Skeleton";
import type { IProductCategory } from "../../models/ProductCategory";
import styles from "./ProductCategory.module.css";

interface Props {
  category: IProductCategory;
  loading: boolean;
}

export default function ProductCategory({ category, loading }: Props) {
  return (
    <div className={styles.category}>
      <div className={styles.imgContainer}>
        <Skeleton width="128px" height="128px" loading={loading}>
          <img
            className={styles.img}
            src={category.img}
            width="128"
            height="128"
            alt={category.name}
            loading="lazy"
          />
        </Skeleton>
      </div>
      <Skeleton width="100%" height="20px" loading={loading}>
        <p className={styles.name}>{category.name}</p>
      </Skeleton>
    </div>
  );
}
