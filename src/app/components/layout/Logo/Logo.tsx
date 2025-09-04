import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <picture title="Shopping App Logo">
      <source
        type="image/avif"
        media="(min-width:780px)"
        srcSet="logos/logo-lg.avif"
      />
      <source
        media="(max-width:465px)"
        srcSet="logos/logo-sm.avif"
        type="image/avif"
      />
      <img src="logos/logo-sm.avif" alt="Logo" className={styles.logo} />
    </picture>
  );
}
