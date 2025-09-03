import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <p>Layout</p>
      <Outlet />
    </div>
  );
}
