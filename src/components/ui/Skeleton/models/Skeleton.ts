import type { ReactElement } from "react";

export interface SkeletonProps {
  width: string;
  height: string;
  borderRadius?: string;
  children: ReactElement;
  loading: boolean;
}
