import { Outlet } from "react-router-dom";

export function BlogLayout() {
  return (
    <div className="flex gap-4">
      <div>Search</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
