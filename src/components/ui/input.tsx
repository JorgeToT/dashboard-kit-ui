import * as React from 'react';

import { cn } from '@/lib/utils';

type InputProps = React.ComponentProps<'input'> & {
  icon?: React.ReactNode;
};

function Input({ className, type, icon, ...props }: InputProps) {
  const hasIcon = Boolean(icon);
  const paddingClass = hasIcon ? 'pr-10' : '';

  return (
    <div className={cn('relative inline-flex w-full', className)}>
      <input
        type={type}
        data-slot="input"
        className={cn(
          paddingClass,
          'file:text-foreground placeholder:text-secondary-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-lg border bg-transparent px-4 py-2.5 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-[14px]/5 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        )}
        {...props}
      />
      {icon && icon}
    </div>
  );
}

export { Input };
