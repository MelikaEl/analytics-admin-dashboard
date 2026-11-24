// ui
import { DataTable } from "@/components/ui/data-table";

// users
import { FilterDropdown, userTableColumns, useUsers } from "@/features/users";

//shared
import { DataTablePagination } from "@/components/shared";

//hooks
import { useParams } from "@/hooks";

function UsersPage() {
  const { page, limit, order, sortBy, role, setPage, setLimit, setSort, setRole } = useParams();

  const { data: users, isLoading } = useUsers({ page, limit, order, sortBy, role });

  const isLastPage = (users?.length ?? 0) < limit;

  return (
    <>
      <div className="pb-4 flex justify-end">
        <FilterDropdown {...{ role, setRole }} />
      </div>
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
