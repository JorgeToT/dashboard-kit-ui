'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { MoreVerticalIcon } from 'lucide-react';
import { Files } from '@/types/DataTable.types';
import { FilesTableFileNameHeader, FilesTableFileNameBody, TextCell } from '@/components/table/FilesTableCell';

export const columns: ColumnDef<Files>[] = [
  {
    accessorKey: 'filename',
    header: ({ table }) => <FilesTableFileNameHeader table={table} />,
    cell: ({ row }) => <FilesTableFileNameBody row={row} />,
  },
  {
    accessorKey: 'filesize',
    header: () => <div>File size</div>,
    cell: ({ row }) => <TextCell value={row.getValue('filesize') as string} />,
  },
  {
    accessorKey: 'dateuploaded',
    header: () => <div>Date uploaded</div>,
    cell: ({ row }) => (
      <TextCell value={row.getValue('dateuploaded') as string} />
    ),
  },
  {
    accessorKey: 'lastupdated',
    header: () => <div>Last updated</div>,
    cell: ({ row }) => (
      <TextCell value={row.getValue('lastupdated') as string} />
    ),
  },
  {
    accessorKey: 'uploadedby',
    header: () => <div>Uploaded by</div>,
    cell: ({ row }) => (
      <TextCell value={row.getValue('uploadedby') as string} />
    ),
  },
  {
    id: 'actions',
    cell: () => (
      <Button variant="ghost" className="flex size-8 text-muted-foreground data-[state=open]:bg-muted cursor-pointer" size="icon" >
        <MoreVerticalIcon />
        <span className="sr-only">Open menu</span>
      </Button>
    ),
  },
];
