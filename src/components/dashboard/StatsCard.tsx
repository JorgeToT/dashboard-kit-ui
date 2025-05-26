import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { CardProps } from '@/types/Components.types';

const StatsCard = ({ title, data }: CardProps) => {
  return (
    <Card className="py-6 px-8 cursor-pointer gap-3 tracking-[0.4px] hover:border-primary hover:text-primary group">
      <CardHeader>
        <CardTitle className="text-[19px] font-bold text-secondary-foreground group-hover:text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[40px] font-bold text-center tracking-[1px]">
          {data}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
