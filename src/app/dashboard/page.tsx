'use client';

import StatsCard from '@/components/dashboard/StatsCard';
import { ChartContainer } from '@/components/dashboard/ChartContainer';
import { FilesTable } from '@/components/table/FilesTable';
import { columns } from '@/components/table/FilesTableColumn';
import { cardData, filesData } from '@/data/dashboardStats';
import { motion } from 'motion/react';

const DashboardPage = () => {
  return (
    <main className="sm:px-[30px] sm:py-6 gap-2.5 sm:gap-[30px] flex flex-col">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-0.5 sm:gap-x-[30px] sm:gap-y-3.5 lg:grid-cols-4 lg:gap-[30px]"
      >
        {cardData.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.1 * index,
            }}
          >
            <StatsCard title={card.title} data={card.data} />
          </motion.div>
        ))}
      </motion.section>
      <ChartContainer />
      <FilesTable columns={columns} data={filesData} />
    </main>
  );
};

export default DashboardPage;
