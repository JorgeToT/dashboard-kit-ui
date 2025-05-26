'use client';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Table } from '@/components/ui/table';
import { DataTableProps } from '@/types/DataTable.types';
import { FilesTableTitle } from '@/components/table/FilesTableTitle';
import { FilesTableHeader } from '@/components/table/FilesTableHeader';
import { FilesTableBody } from '@/components/table/FilesTableBody';
import { motion } from 'motion/react';

export const FilesTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.8,
      }}
      className="font-inter rounded-lg border bg-white w-full"
    >
      <FilesTableTitle />
      <div className="overflow-x-auto grid">
        <Table>
          <FilesTableHeader table={table} />
          <FilesTableBody table={table} />
        </Table>
      </div>
    </motion.section>
  );
};
