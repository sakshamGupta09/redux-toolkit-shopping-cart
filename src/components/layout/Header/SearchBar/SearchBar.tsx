import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <form className={styles.searchContainer}>
      <label htmlFor="searchField" className="d-flex">
        <img src="search.svg" alt="Search products icon" />
      </label>
      <input type="search" id="searchField" placeholder="Search for products, brands and more" />
    </form>
  );
}
