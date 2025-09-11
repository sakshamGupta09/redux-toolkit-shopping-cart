export type RequestStatus = "idle" | "progress" | "success" | "failed";

export interface RequestState<T> {
  status: RequestStatus;
  data: T;
  error: string | null;
}
