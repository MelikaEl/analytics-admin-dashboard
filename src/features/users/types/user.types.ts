export interface User {
  avatar: string;
  email: string;
  fullName: string;
  id: string;
  joinedAt: string;
  role: string;
  status: string;
}

export type UserStatus = "active" | "inactive" | "pending";

