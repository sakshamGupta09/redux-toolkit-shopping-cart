import type { SkeletonProps } from "./models/Skeleton";
import styles from "./Skeleton.module.css";

export default function Skeleton({
  width = "100%",
  height = "2rem",
  borderRadius = "0",
  loading = false,
  children,
  animated = true,
  className = "",
}: SkeletonProps) {
  if (!loading) {
    return children;
  }

  const style: React.CSSProperties = {
    width,
    height,
    borderRadius,
  };

  let skeletonClass = `${styles.skeleton} ${className}`;
  if (animated) {
    skeletonClass += " " + styles.animated;
  }

  return <div className={skeletonClass} style={style} aria-hidden="true" />;
}
