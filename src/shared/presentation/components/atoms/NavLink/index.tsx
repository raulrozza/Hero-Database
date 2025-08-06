import React from 'react';

import Link from 'next/link';

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
  <div data-active={active}>
    <Link href={href}>{children}</Link>
  </div>
);

export default NavLink;
