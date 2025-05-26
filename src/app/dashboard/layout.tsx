import HeaderBar from '@/components/dashboard/HeaderBar';
import Sidebar from '@/components/dashboard/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="bg-secondary-background text-foreground">
      <SidebarProvider>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <HeaderBar title="Overview" />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
