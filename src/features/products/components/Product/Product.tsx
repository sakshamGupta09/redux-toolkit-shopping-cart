import type { IProduct } from "@features/products/models/Product";
import styles from "./Product.module.css";
import { getImageUrl } from "@utils/getImageUrl";

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  const images = getImageUrl(product.images[0]);

  return (
    <article className={styles.product}>
      <div className={styles.product__imgContainer}>
        <picture title={product.description}>
          <source
            media="(width < 800px)"
            srcSet={`${images.sm}, ${images["1x"]} 1x, ${images["2x"]} 2x`}
          />
          <source media="(width >= 800px)" srcSet={images.lg} />
          <img
            className={styles.product__image}
            alt={product.description}
            src={images.lg}
            loading="lazy"
            width="100%"
            height="100%"
          />
        </picture>
      </div>
    </article>
  );
}
