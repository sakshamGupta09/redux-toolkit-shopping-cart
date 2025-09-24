import { Outlet } from "react-router";
import Header from "../Header/Header";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__content}>
        <Outlet />
      </main>
    </div>
  );
}
