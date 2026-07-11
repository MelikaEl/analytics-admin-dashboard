import { useQuery } from '@tanstack/react-query';
import { userApi } from "../services/userApi";
import { userKeys } from '../services/userKeys';

export const useUsers = () => {
  return useQuery({
    queryKey: userKeys.fetchUsers,
    queryFn: userApi.fetchUsers,
  });
};