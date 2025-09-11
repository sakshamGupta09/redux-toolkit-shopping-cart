import { Link } from "react-router";
import Logo from "./Logo/Logo";
import styles from "./Header.module.css";
import Badge from "../../ui/Badge/Badge";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />

      <SearchBar />

      <Link
        to="cart"
        className="d-flex items-center gap-sm decoration-none font-sm text-primary"
      >
        <Badge count={0}>
          <img src="cart.svg" alt="Cart icon" />
        </Badge>
        <span className={styles.menuItemText}>Cart</span>
      </Link>
      
      <Link
        to="login"
        className="d-flex items-center gap-sm decoration-none font-sm text-primary"
      >
        <img src="user.svg" alt="User icon" />
        <span className={styles.menuItemText}>Login</span>
      </Link>
    </header>
  );
}
