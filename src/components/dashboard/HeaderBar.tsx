import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import notificationIcon from '@/images/icons/notification-icon.svg';
import searchIcon from '@/images/icons/search-icon.svg';
import Image from 'next/image';

interface HeaderButton {
  label: string;
  icon: string;
}

const headerButtons: HeaderButton[] = [
  {
    label: 'Search',
    icon: searchIcon,
  },
  {
    label: 'Notifications',
    icon: notificationIcon,
  },
];

interface HeaderBarProps {
  title: string;
  user?: {
    name: string;
    imageUrl: string;
  };
}

const HeaderBar = React.memo(
  ({
    title,
    user = {
      name: 'Jones Ferdinand',
      imageUrl: '/images/user.png',
    },
  }: HeaderBarProps) => {
    return (
      <header className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-[30px] md:pr-[33px] gap-4">
        <h1 className="text-2xl font-bold tracking-[0.3px]">{title}</h1>
        <nav className="flex justify-between items-center space-x-8">
          <div className="flex items-center space-x-6">
            {headerButtons.map((button) => (
              <button key={button.label} aria-label={button.label}>
                <Image
                  src={button.icon}
                  alt={button.label}
                  className="cursor-pointer hover:opacity-60 transition-opacity"
                />
              </button>
            ))}
          </div>
          <div className="h-8">
            <Separator orientation="vertical" />
          </div>
          <div className="flex items-center space-x-3.5">
            <p className="text-sm font-semibold tracking-[0.2px]">
              {user.name}
            </p>
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.imageUrl} alt={`${user.name}'s profile`} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </header>
    );
  },
);

export default HeaderBar;
