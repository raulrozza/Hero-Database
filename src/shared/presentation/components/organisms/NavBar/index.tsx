import React, { ComponentPropsWithoutRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLink } from '@/shared/presentation/components/atoms';

import { Container } from './styles';

type MenuItem = ComponentPropsWithoutRef<typeof NavLink> & { type: 'link' };

const LINKS: MenuItem[] = [
  {
    type: 'link',
    href: '/conditions',
    children: 'Conditions',
  },
  {
    type: 'link',
    href: '/advantages',
    children: 'Advantages',
  },
  {
    type: 'link',
    href: '/powers',
    children: 'Powers',
  },
  {
    type: 'link',
    href: '/modifiers',
    children: 'modifiers',
  },
];

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="logo">
        <Link href="/">M&M Index</Link>
      </div>

      <div className="links">
        {LINKS.map(link => (
          <NavLink
            key={link.href}
            {...link}
            active={router.pathname === link.href}
          />
        ))}
      </div>
    </Container>
  );
};

export default NavBar;
