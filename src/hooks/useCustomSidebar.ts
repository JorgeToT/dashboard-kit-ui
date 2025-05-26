import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSidebar } from '@/components/ui/sidebar';
import { items } from '@/data/SidebarItems';

export const useCustomSidebar = () => {
  const [activeTitle, setActiveTitle] = useState<string>(items[0].title);
  const { toggleSidebar, openMobile } = useSidebar();
  const isMobile = useIsMobile();

  const handleSidebarToggle = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return {
    activeTitle,
    setActiveTitle,
    handleSidebarToggle,
    openMobile,
    isMobile,
  };
};
