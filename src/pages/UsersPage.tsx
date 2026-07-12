//hooks
import { useUsers } from "@/features/users/hooks/useUsers";

function UsersPage() {
  const { data, isLoading } = useUsers();

  return <div>UsersPage</div>;
}

export default UsersPage;
