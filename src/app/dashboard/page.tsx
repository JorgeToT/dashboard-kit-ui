import StatsCard from '@/components/dashboard/StatsCard';
import { ChartContainer } from '@/components/dashboard/ChartContainer';
import { FilesTable } from '@/components/table/FilesTable';
import { columns } from '@/components/table/FilesTableColumn';
import { cardData, filesData } from '@/data/dashboardStats';

const DashboardPage = () => {
  return (
    <main className="sm:px-[30px] sm:py-6 gap-2.5 sm:gap-[30px] flex flex-col">
      <section className="grid grid-cols-2 gap-0.5 sm:gap-x-[30px] sm:gap-y-3.5 lg:grid-cols-4 lg:gap-[30px]">
        {cardData.map((card) => (
          <StatsCard key={card.title} title={card.title} data={card.data} />
        ))}
      </section>
      <section>
        <ChartContainer />
      </section>
      <FilesTable columns={columns} data={filesData} />
    </main>
  );
};

export default DashboardPage;
