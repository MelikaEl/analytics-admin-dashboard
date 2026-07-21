//import tanstack
import type { ColumnDef } from "@tanstack/react-table";

//import types
import type { User } from "./types";

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
    header: "Joined At",
    cell: ({ row }) => row.original.joinedAt,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => row.original.role,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.original.status,
  },
];
