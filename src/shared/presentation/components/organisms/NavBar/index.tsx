import React, { ComponentPropsWithoutRef } from 'react';

import { useRouter } from 'next/router';

import { NavLink } from '@/shared/presentation/components/atoms';

import { Container } from './styles';

const LINKS: ComponentPropsWithoutRef<typeof NavLink>[] = [
  {
    href: '/conditions',
    children: 'Conditions',
  },
  {
    href: '/powers',
    children: 'Powers',
  },
];

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="logo">
        <h1>M&M Index</h1>
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
