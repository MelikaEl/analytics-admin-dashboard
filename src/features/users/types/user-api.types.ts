import type { User } from "./user.types";

export type GetUsersResponse = User[];

export interface UsersParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: "asc" | "desc";
}
