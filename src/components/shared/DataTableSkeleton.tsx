import { Skeleton } from "../ui/skeleton";
import { TableCell, TableRow } from "../ui/table";

interface DataTableSkeletonProps {
  rows: number;
  columns: number;
}

export function DataTableSkeleton({ rows, columns }: DataTableSkeletonProps) {
  return Array.from({ length: rows }).map((_, rowIndex) => (
    <TableRow key={rowIndex}>
      {Array.from({ length: columns }).map((_, colIndex) => (
        <TableCell key={colIndex}>
          <Skeleton className="h-5 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ));
}
