import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.searchBar}>Search Bar</div>
      <p className="ml-auto">Cart</p>
      <p>Login</p>
    </header>
  );
}
