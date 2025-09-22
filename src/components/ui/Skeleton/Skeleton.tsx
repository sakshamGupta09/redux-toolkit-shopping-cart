import type { SkeletonProps } from "./models/Skeleton";

export default function Skeleton({
  width = "100%",
  height = "2rem",
  borderRadius = "0",
  loading = false,
  children,
}: SkeletonProps) {
  if (!loading) {
    return children;
  }

  const style: React.CSSProperties = {
    width,
    height,
    borderRadius,
    backgroundColor: "var(--skeleton-bg)",
  };
  return <div style={style} aria-hidden="true" />;
}
