import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import fileIcon from '@/images/icons/file-icon.svg';
import imageIcon from '@/images/icons/image-icon.svg';
import filmIcon from '@/images/icons/film-icon.svg';
import figmaIcon from '@/images/icons/figma-icon.svg';
import framerIcon from '@/images/icons/framer-icon.svg';
import { Row, Table } from '@tanstack/react-table';
import { Files } from '@/types/DataTable.types';

const iconsFormat = {
  pdf: fileIcon,
  jpg: imageIcon,
  png: imageIcon,
  mp4: filmIcon,
  fig: figmaIcon,
  docx: fileIcon,
  framerx: framerIcon,
};

export const TextCell = ({ value }: { value: string }) => (
  <span className="text-[#667085] text-sm font-normal">{value}</span>
);

export const FilesTableFileNameHeader = ({ table }: { table: Table<Files> }) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox checked={ table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate') } onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />
      File name
    </div>
  );
};

export const FilesTableFileNameBody = ({ row }: { row: Row<Files> }) => {
  const filename = row.getValue('filename') as string;
  const filesize = row.getValue('filesize') as string;
  return (
    <div className="flex items-center gap-3">
      <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
      <div className="bg-[#F4EBFF] p-2.5 rounded-full min-w-10">
        <Image src={ iconsFormat[filename.split('.').pop() as keyof typeof iconsFormat] } alt={filename} width={20} height={20} />
      </div>
      <div>
        <p className="text-sm font-medium">{filename}</p>
        <span className="text-[#667085] text-sm font-normal">{filesize}</span>
      </div>
    </div>
  );
};
