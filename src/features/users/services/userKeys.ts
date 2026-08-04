import type { UsersParams } from "../types";

export const userKeys = {
  fetchUsers: (params?: UsersParams) => ["users", params] as const,
};
