// ui
import { DataTable } from "@/components/ui/data-table";

// users
import { userTableColumns, useUsers } from "@/features/users";

//shared
import { DataTablePagination } from "@/components/shared";

//hooks
import { useParams } from "@/hooks";

function UsersPage() {
  const { page, limit, order, sortBy, setPage, setLimit, setSort } = useParams();

  const { data: users, isLoading } = useUsers({ page, limit, order, sortBy });

  const isLastPage = (users?.length ?? 0) < limit;

  return (
    <>
      <DataTable
        columns={userTableColumns}
        data={users || []}
        isLoading={isLoading}
        {...{ order, sortBy, setSort }}
      />
      <DataTablePagination {...{ page, isLastPage, setPage, setLimit }} />
    </>
  );
}

export default UsersPage;
