import ProductCategory from "../ProductCategory/ProductCategory";
import styles from "./ProductCategories.module.css";

export default function ProductCategories() {
  const categoriesList = [
    {
      name: "Beauty",
      img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/5f2ee7f883cdb774.png",
    },
    {
      name: "Fashion",
      img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/ff559cb9d803d424.png",
    },
  ].map((el) => <ProductCategory key={el.name} category={el} />);

  return <section className={styles.categories}>{categoriesList}</section>;
}
