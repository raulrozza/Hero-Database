import React from 'react';

import Link from 'next/link';

import { cn } from '@/presentation/helpers/cn';

interface INavLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<INavLinkProps> = ({
  href,
  active = false,
  children,
}) => (
  <div
    className={cn(
      'flex transition-all',
      active ? 'bg-primary-800' : 'bg-secondary-500',
    )}
  >
    <Link
      href={href}
      className={cn(
        'flex w-full text-center p-2 pt-1 pb-1 text-white font-title text-lg no-underline tracking-wider',
        active ? 'hover:bg-primary-500' : 'hover:bg-secondary-300',
      )}
    >
      {children}
    </Link>
  </div>
);

export default NavLink;
