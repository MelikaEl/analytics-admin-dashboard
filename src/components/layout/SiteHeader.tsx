// ui components
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

//react router
import { Link, useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Overview",
  "/users": "User Management",
  "/transactions": "Transactions",
};

export function SiteHeader() {
  const location = useLocation();
  const currentTitle = pageTitles[location.pathname];

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb className="text-teal-700 font-bold">
          <BreadcrumbList>
            {/* Always show Overview/Home as the root */}
            <BreadcrumbItem>
              {location.pathname === "/" ? (
                <BreadcrumbPage>Overview</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to="/">Overview</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {location.pathname !== "/" && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold">{currentTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
