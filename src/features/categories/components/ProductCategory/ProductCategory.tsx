import Skeleton from "@components/ui/Skeleton/Skeleton";
import type { IProductCategory } from "../../models/ProductCategory";
import styles from "./ProductCategory.module.css";
import { Link } from "react-router";

interface Props {
  category: IProductCategory;
  loading: boolean;
}

export default function ProductCategory({ category, loading }: Props) {
  return (
    <li className={styles.category}>
      <Link to={`products/${category.id}`}>
        <div className={styles.category__imgContainer}>
          <Skeleton width="100%" height="144px" loading={loading}>
            <img
              className={styles.category__img}
              src={category.img}
              width="128"
              height="128"
              alt={category.name}
              loading="lazy"
            />
          </Skeleton>
        </div>
        <Skeleton width="100%" height="20px" loading={loading}>
          <p className={styles.category__name}>{category.name}</p>
        </Skeleton>
      </Link>
    </li>
  );
}
