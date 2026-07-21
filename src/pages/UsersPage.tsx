import { DataTable } from "@/components/ui/data-table";
import { userTableColumns, useUsers } from "@/features/users";

function UsersPage() {
  const { data: users, isLoading } = useUsers();

  return <DataTable columns={userTableColumns} data={users || []} />;
}

export default UsersPage;
