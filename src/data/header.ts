import notificationIcon from '@/images/icons/notification-icon.svg';
import searchIcon from '@/images/icons/search-icon.svg';
import { HeaderButton } from '@/types/Components.types';

export const headerButtons: HeaderButton[] = [
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
