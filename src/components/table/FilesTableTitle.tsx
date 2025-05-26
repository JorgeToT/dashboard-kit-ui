import Image from 'next/image';
import { Button } from '@/components/ui/button';
import uploadIcon from '@/images/icons/upload-icon.svg';

export const FilesTableTitle = () => {
  return (
    <div className="flex justify-between items-center py-5 px-6">
      <h2 className="text-lg font-medium">Files uploaded</h2>
      <div className="flex gap-3">
        <Button variant="outline" className="py-[9px] px-4 text-gray-700">
          <span className="leading-5 font-medium">Download all</span>
        </Button>
        <Button variant="purple" className="py-[9px] px-4 ">
          <Image src={uploadIcon} alt="Upload" />
          <span className="leading-5 font-medium">Upload</span>
        </Button>
      </div>
    </div>
  );
};
