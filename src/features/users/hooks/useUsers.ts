//import react query
import { useQuery } from "@tanstack/react-query";

//import services
import { userApi } from "../services/userApi";
import { userKeys } from "../services/userKeys";

//import types
import type { GetUsersResponse, UsersParams } from "../types";

export const useUsers = (params?: UsersParams) => {
  return useQuery<GetUsersResponse>({
    queryKey: userKeys.fetchUsers(params),
    queryFn: () => userApi.fetchUsers(params),
  });
};
