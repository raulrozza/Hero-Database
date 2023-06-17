import React from 'react';

import Link from 'next/link';

import { Container } from './styles';

interface INavLinkProps {
  href: string;
  active?: boolean;
}

const NavLink: React.FC<INavLinkProps> = ({
  href,
  active = false,
  children,
}) => (
  <Container active={active}>
    <Link href={href}>{children}</Link>
  </Container>
);

export default NavLink;
