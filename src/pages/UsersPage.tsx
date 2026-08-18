// ui
import { DataTable } from "@/components/ui/data-table";

// users
import { userTableColumns, useUsers } from "@/features/users";

//shared
import { DataTablePagination } from "@/components/shared";

//hooks
import { usePaginationParams } from "@/hooks";

function UsersPage() {
  const { page, limit, setPage, setLimit } = usePaginationParams();

  const { data: users, isLoading } = useUsers({ page, limit });

  const isLastPage = (users?.length ?? 0) < limit;

  return (
    <>
      <DataTable columns={userTableColumns} data={users || []} />
      <DataTablePagination {...{ page, isLastPage, setPage, setLimit }} />
    </>
  );
}

export default UsersPage;
