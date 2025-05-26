import { flexRender } from '@tanstack/react-table';
import { TableBody, TableRow, TableCell } from '@/components/ui/table';
import { DataTableHeaderBodyProps } from '@/types/DataTable.types';

export const FilesTableBody = <TData,>({
  table,
}: DataTableHeaderBodyProps<TData>) => {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
