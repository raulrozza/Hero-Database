import React, { ComponentPropsWithoutRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLink } from '@/shared/presentation/components/atoms';

import { Container } from './styles';

const LINKS: ComponentPropsWithoutRef<typeof NavLink>[] = [
  {
    href: '/conditions',
    children: 'Conditions',
  },
  {
    href: '/advantages',
    children: 'Advantages',
  },
  {
    href: '/powers',
    children: 'Powers',
  },
  {
    href: '/modifications',
    children: 'Modifications',
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
