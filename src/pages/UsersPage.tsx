//hooks
import { useUsers } from "@/features/users";

function UsersPage() {
  const { data, isLoading } = useUsers();

  return <div>UsersPage</div>;
}

export default UsersPage;
