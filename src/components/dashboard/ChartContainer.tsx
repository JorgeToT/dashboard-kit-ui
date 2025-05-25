import Image from 'next/image';
import graphDesktop from '@/images/desktop-graph.png';
import graphTablet from '@/images/tablet-graph.png';
import graphMobile from '@/images/mobile-graph.png';
import graphLabel from '@/images/graph-label.png';

const statsData = [
  {
    title: 'Resolved',
    data: '449',
  },
  {
    title: 'Received',
    data: '426',
  },
  {
    title: 'Average first response time',
    data: '33m',
  },
  {
    title: 'Average response time',
    data: '3h 8m',
  },
  {
    title: 'Resolution within SLA',
    data: '94%',
  },
];

const ChartContainer = () => {
  return (
    <div className="grid grid-cols-12 bg-white rounded-lg border-[1px] mb-2.5 sm:mb-0">
      <div className="col-span-12 sm:col-span-7 md:col-span-8 p-8 pb-0 sm:pb-8 sm:pr-6">
        <div className="mb-3.5 lg:mb-14 flex justify-between flex-col gap-6 lg:flex-row">
          <div>
            <h2 className="text-[19px] font-bold mb-2 tracking-[0.4px]">
              Today’s trends
            </h2>
            <p className="text-[12px] font-normal text-secondary-foreground tracking-[0.1px]">
              as of 25 May 2019, 09:41 PM
            </p>
          </div>
          <div className="flex justify-center lg:items-end">
            <Image src={graphLabel} alt="Graph Label" />
          </div>
        </div>
        <div className="flex justify-center items-center sm:h-100">
          <Image src={graphDesktop} alt="Graph" className="hidden lg:block" />
          <Image
            src={graphTablet}
            alt="Graph"
            className="hidden sm:block lg:hidden"
          />
          <Image src={graphMobile} alt="Graph" className="sm:hidden" />
        </div>
      </div>
      <aside className="hidden sm:block sm:col-span-5 md:col-span-4 border-l-[1px] bg-white shadow">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1.5 justify-between items-center py-6 lg:px-8 border-b-[1px] last:border-b-0"
          >
            <span className="text-secondary-foreground text-[16px] font-semibold tracking-[0.3px]">
              {item.title}
            </span>
            <span className="text-2xl font-bold tracking-[0.3px]">
              {item.data}
            </span>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default ChartContainer;
