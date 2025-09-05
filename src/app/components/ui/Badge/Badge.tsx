import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface Props {
  count: number;
  children: ReactNode;
}

export default function Badge({ count, children }: Props) {
  return (
    <div className={styles.badgeContainer}>
      {children}
      <span className={styles.badge}>{count}</span>
    </div>
  );
}
