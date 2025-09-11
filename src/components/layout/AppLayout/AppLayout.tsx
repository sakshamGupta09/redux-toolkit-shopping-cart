import { Outlet } from "react-router";
import Header from "../Header/Header";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
