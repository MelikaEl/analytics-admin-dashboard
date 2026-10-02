// ui
import { DataTable } from "@/components/ui/data-table";

// users
import { userTableColumns, useUsers } from "@/features/users";

//shared
import { DataTablePagination } from "@/components/shared";

//hooks
import { useParams } from "@/hooks";

//types
import type { SortingState, Updater } from "@tanstack/react-table";

function UsersPage() {
  const { page, limit, order, sortBy, setPage, setLimit, setSort } = useParams();

  const { data: users, isLoading } = useUsers({ page, limit, order, sortBy });

  const isLastPage = (users?.length ?? 0) < limit;

  const sorting: SortingState = sortBy ? [{ id: sortBy, desc: order === "desc" }] : [];

  const handleSortingChange = (updater: Updater<SortingState>) => {
    const next = typeof updater === "function" ? updater(sorting) : updater;
    if (next.length > 0) {
      setSort(next[0].id, next[0].desc ? "desc" : "asc");
    }
  };

  return (
    <>
      <DataTable
        columns={userTableColumns}
        data={users || []}
        isLoading={isLoading}
        sorting={sorting}
        onSortingChange={handleSortingChange}
      />
      <DataTablePagination {...{ page, isLastPage, setPage, setLimit }} />
    </>
  );
}

export default UsersPage;
