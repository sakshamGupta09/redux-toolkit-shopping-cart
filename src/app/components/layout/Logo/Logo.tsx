import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <img
      className={styles.logo}
      src="/logo.avif"
      width="271"
      height="125"
      loading="lazy"
      alt="Logo"
    />
  );
}
