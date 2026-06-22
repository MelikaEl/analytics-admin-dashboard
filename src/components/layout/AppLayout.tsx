import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";

export function AppLayout() {
  return (
    <>
      <AppSidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
