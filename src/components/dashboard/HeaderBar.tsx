import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import notificationIcon from '@/images/icons/notification-icon.svg';
import searchIcon from '@/images/icons/search-icon.svg';
import Image from 'next/image';
import logoIcon from '@/images/logo.svg';

interface HeaderButton {
  label: string;
  icon: string;
  showInMobile?: boolean;
}

const headerButtons: HeaderButton[] = [
  {
    label: 'Search',
    icon: searchIcon,
  },
  {
    label: 'Notifications',
    icon: notificationIcon,
    showInMobile: true,
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
      <header className="flex flex-row items-center justify-between p-4 md:p-[30px] md:pr-[33px] gap-4 bg-secondary sm:bg-transparent">
        <h1 className="text-2xl font-bold tracking-[0.3px] hidden sm:block">
          {title}
        </h1>
        <Image
          src={logoIcon}
          alt="Logo"
          width={32}
          height={32}
          className="cursor-pointer md:cursor-auto block sm:hidden"
        />
        <nav className="flex justify-between items-center sm:space-x-8">
          <div className="flex items-center space-x-6">
            {headerButtons.map((button) => (
              <button
                key={button.label}
                aria-label={button.label}
                className={button.showInMobile ? '' : 'hidden sm:block'}
              >
                <Image
                  src={button.icon}
                  alt={button.label}
                  className="cursor-pointer hover:opacity-60 transition-opacity"
                />
              </button>
            ))}
          </div>
          <div className="h-8 hidden sm:block">
            <Separator orientation="vertical" />
          </div>
          <div className="hidden sm:flex items-center space-x-3.5">
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
