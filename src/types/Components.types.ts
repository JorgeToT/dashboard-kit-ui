export interface HeaderButton {
  label: string;
  icon: string;
  showInMobile?: boolean;
}

export interface HeaderBarProps {
  title: string;
  user?: {
    name: string;
    imageUrl: string;
  };
}

export interface CardProps {
  title: string;
  data: string;
}

export type SidebarItem = {
  title: string;
  icon: string;
};

export type SidebarMenuGroupProps = {
  items: SidebarItem[];
  activeTitle: string;
  setActiveTitle: (title: string) => void;
};
