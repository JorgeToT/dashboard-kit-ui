import HeaderBar from '@/components/dashboard/HeaderBar';

import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-secondary-background text-foreground">
      <div className="w-64 bg-sidebar text-sidebar-foreground">
        I'm the Sidebar
      </div>
      <div className="flex-1 flex flex-col">
        <HeaderBar title="Overview" />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
