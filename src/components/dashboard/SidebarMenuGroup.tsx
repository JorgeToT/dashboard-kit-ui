import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';

export type SidebarItem = {
  title: string;
  icon: string;
};

type SidebarMenuGroupProps = {
  items: SidebarItem[];
  activeTitle: string;
  setActiveTitle: (title: string) => void;
};

const SidebarMenuGroup = ({
  items,
  activeTitle,
  setActiveTitle,
}: SidebarMenuGroupProps) => {
  const { openMobile } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={activeTitle === item.title}>
            <a
              href="#"
              role="button"
              tabIndex={0}
              aria-current={activeTitle === item.title ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setActiveTitle(item.title);
              }}
              className="flex items-center gap-6"
            >
              <Image src={item.icon} alt={item.title} className="h-5" />
              {((isMobile && openMobile) || !isMobile) && (
                <span className="text-base font-normal tracking-[0.2px] leading-5">
                  {item.title}
                </span>
              )}
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default SidebarMenuGroup;
