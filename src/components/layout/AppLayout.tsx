import { Outlet } from "react-router-dom";
import { AppSidebar, SiteHeader } from "@/components/layout";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";

export function AppLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <main className="p-7">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
