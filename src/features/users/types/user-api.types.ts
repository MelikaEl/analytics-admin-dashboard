import type { User, UserRole } from "./user.types";

export type GetUsersResponse = User[];

export interface UsersParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: "asc" | "desc";
  role?: UserRole;
}
