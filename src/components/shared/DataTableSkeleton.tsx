import { Skeleton } from "../ui/skeleton";
import { TableCell, TableRow } from "../ui/table";

interface DataTableSkeletonProps {
  columns: number;
}

export function DataTableSkeleton({ columns }: DataTableSkeletonProps) {
  return (
    //rows
    Array.from({ length: 10 }).map((_, rowIndex) => (
      <TableRow key={rowIndex}>
        {
          //columns
          Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <Skeleton className="h-5 w-full" />
            </TableCell>
          ))
        }
      </TableRow>
    ))
  );
}
