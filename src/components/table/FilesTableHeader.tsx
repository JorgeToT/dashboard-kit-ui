import { flexRender } from '@tanstack/react-table';
import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DataTableHeaderBodyProps } from '@/types/DataTable.types';

export const FilesTableHeader = <TData,>({
  table,
}: DataTableHeaderBodyProps<TData>) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};
