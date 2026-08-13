// ui
import { DataTable } from "@/components/ui/data-table";

// users
import { userTableColumns, useUsers } from "@/features/users";

// react router
import { useSearchParams } from "react-router-dom";

//shared
import { DataTablePagination } from "@/components/shared/DataTablePagination";

function UsersPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const { data: users, isLoading } = useUsers({ page, limit });

  const isLastPage = (users?.length ?? 0) < limit;

  return (
    <>
      <DataTable columns={userTableColumns} data={users || []} />

      <DataTablePagination {...{ setSearchParams, limit, page, isLastPage }} />
    </>
  );
}

export default UsersPage;
