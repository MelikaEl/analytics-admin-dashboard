//import tanstack
import type { ColumnDef } from "@tanstack/react-table";

//import types
import type { User, UserStatus } from "./types";

//import ui
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

//constants
import { STATUS_ICONS } from "./constants";

//utils
import { formatDate } from "@/utils/date";

//icons
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export const userTableColumns: ColumnDef<User>[] = [
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => row.original.email,
  },
  {
    accessorKey: "fullName",
    header: "User",
    cell: ({ row }) => row.original.fullName,
  },
  {
    accessorKey: "joinedAt",
    header: ({ column }) => {
      const sorted = column.getIsSorted();
      return (
        <Button
          variant="secondary"
          onClick={() => {
            return column.toggleSorting(sorted === "asc");
          }}
        >
          Joined At
          {sorted === "asc" && <ArrowUp className="ml-2 h-4 w-4" />}
          {sorted === "desc" && <ArrowDown className="ml-2 h-4 w-4" />}
          {!sorted && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
    cell: ({ row }) => formatDate(row.original.joinedAt),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => row.original.role,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { icon: Icon, className } = STATUS_ICONS[row.original.status as UserStatus];
      return (
        <Badge variant="outline" className="text-muted-foreground">
          <Icon className={className} />
          {row.original.status}
        </Badge>
      );
    },
  },
];
