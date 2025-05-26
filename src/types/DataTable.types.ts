import { ColumnDef, Table } from '@tanstack/react-table';

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface DataTableHeaderBodyProps<TData> {
  table: Table<TData>;
}

export type Files = {
  filename: string;
  filesize: string;
  dateuploaded: string;
  lastupdated: string;
  uploadedby: string;
  actions?: string;
};
