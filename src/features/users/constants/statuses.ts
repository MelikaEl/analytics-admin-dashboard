import type { UserStatus } from "../types";

import { CircleCheck, CircleX, Loader2 } from "lucide-react";

export const USER_STATUSES: UserStatus[] = ["active", "inactive", "pending"];

export const STATUS_ICONS = {
  active: { icon: CircleCheck, className: "text-success" },
  inactive: { icon: CircleX, className: "text-destructive" },
  pending: { icon: Loader2, className: "text-warning animate-spin" },
} as const;
