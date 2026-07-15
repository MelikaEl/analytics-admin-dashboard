//import react query
import { useQuery } from "@tanstack/react-query";

//import services
import { userApi } from "../services/userApi";
import { userKeys } from "../services/userKeys";

//import types
import type { GetUsersResponse } from "../types";

export const useUsers = () => {
  return useQuery<GetUsersResponse>({
    queryKey: userKeys.fetchUsers,
    queryFn: userApi.fetchUsers,
  });
};
