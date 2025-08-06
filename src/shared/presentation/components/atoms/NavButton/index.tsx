import React, { forwardRef } from 'react';

import { cn } from '@/presentation/helpers/cn';

interface INavButtonProps {
  children: string;
  active?: boolean;
}

const NavButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  INavButtonProps
> = ({ active = false, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'flex transition-all text-center p-2 pt-1 pb-1 text-white font-title text-lg no-underline tracking-wider cursor-pointer',
      active
        ? 'bg-primary-800 hover:bg-primary-500'
        : 'bg-secondary-500 hover:bg-secondary-300',
    )}
    {...props}
  >
    {children}
  </button>
);

export default forwardRef(NavButton);
