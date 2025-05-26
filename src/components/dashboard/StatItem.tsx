interface StatItemProps {
  title: string;
  data: string;
}

const StatItem = ({ title, data }: StatItemProps) => (
  <div className="flex flex-col gap-1.5 justify-between items-center py-6 lg:px-8 border-b-[1px] last:border-b-0">
    <span className="text-secondary-foreground text-[16px] font-semibold tracking-[0.3px] text-center">
      {title}
    </span>
    <span className="text-2xl font-bold tracking-[0.3px] text-center">
      {data}
    </span>
  </div>
);

export default StatItem;
