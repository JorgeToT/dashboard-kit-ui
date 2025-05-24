import agentsIcon from '@/images/icons/agents-icon.svg';
import articlesIcon from '@/images/icons/articles-icon.svg';
import contactsIcon from '@/images/icons/contacts-icon.svg';
import ideaIcon from '@/images/icons/idea-icon.svg';
import overviewIcon from '@/images/icons/overview-icon.svg';
import settingsIcon from '@/images/icons/settings-icon.svg';
import subscriptionIcon from '@/images/icons/subscription-icon.svg';
import ticketIcon from '@/images/icons/ticket-icon.svg';

export type SidebarItem = {
  title: string;
  icon: string;
};

export const items: SidebarItem[] = [
  { title: 'Overview', icon: overviewIcon },
  { title: 'Tickets', icon: ticketIcon },
  { title: 'Ideas', icon: ideaIcon },
  { title: 'Contacts', icon: contactsIcon },
  { title: 'Agents', icon: agentsIcon },
  { title: 'Articles', icon: articlesIcon },
  { title: 'Settings', icon: settingsIcon },
  { title: 'Subscription', icon: subscriptionIcon },
];
