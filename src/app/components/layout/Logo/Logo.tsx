import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <picture title="Shopping App Logo">
      <source
        type="image/avif"
        media="(width > 800px)"
        srcSet="https://www.ugaoo.com/cdn/shop/files/logo.png?height=100&v=1738571809"
      />
      <source
        type="image/avif"
        media="(width <= 800px)"
        srcSet="https://www.ugaoo.com/cdn/shop/files/logo.png?height=80&v=1738571809"
      />
      <img
        src="https://www.ugaoo.com/cdn/shop/files/logo.png?height=80&v=1738571809"
        alt="Logo"
        className={styles.logo}
      />
    </picture>
  );
}
