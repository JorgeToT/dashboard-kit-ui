'use client';

import logoIcon from '@/images/logo.svg';
import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { SidebarMenuGroup } from '@/components/dashboard/SidebarMenuGroup';
import { items } from '@/data/SidebarItems';
import { useCustomSidebar } from '@/hooks/useCustomSidebar';

const group1 = items.slice(0, 6);
const group2 = items.slice(6);

export const Sidebar = () => {
  const { activeTitle, setActiveTitle, handleSidebarToggle, openMobile, isMobile } = useCustomSidebar();

  return (
    <UISidebar>
      <SidebarHeader className="flex flex-row gap-3 pt-[37px] pl-5 md:pl-8 pb-0 items-center mb-[59px]">
        <Image src={logoIcon} alt="Logo" width={32} height={32} onClick={handleSidebarToggle} className="cursor-pointer md:cursor-auto" />
        {((isMobile && openMobile) || !isMobile) && (
          <h1 className="text-[19px] tracking-[0.4px] font-bold">
            Dashboard Kit
          </h1>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-4">
            <SidebarMenuGroup
              items={group1}
              activeTitle={activeTitle}
              setActiveTitle={setActiveTitle}
            />
            <Separator className="opacity-[6%]" />
            <SidebarMenuGroup
              items={group2}
              activeTitle={activeTitle}
              setActiveTitle={setActiveTitle}
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  );
};
