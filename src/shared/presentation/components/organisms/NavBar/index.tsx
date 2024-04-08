import React, { ComponentPropsWithoutRef } from 'react';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLink, NavButton } from '@/shared/presentation/components/atoms';

import { Container, Menu } from './styles';

type MenuItem =
  | (ComponentPropsWithoutRef<typeof NavLink> & { type: 'link' })
  | (ComponentPropsWithoutRef<typeof NavButton> & {
      type: 'menu';
      items: ComponentPropsWithoutRef<typeof NavLink>[];
    });

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
    type: 'menu',
    children: 'Powers',
    items: [
      {
        href: '/effects',
        children: 'Effects',
      },
      {
        href: '/modifiers',
        children: 'Modifiers',
      },
    ],
  },
];

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <NavigationMenu.Root>
      <Container>
        <div className="logo">
          <Link href="/">M&M Index</Link>
        </div>

        <NavigationMenu.List className="links">
          {LINKS.map(item => {
            if (item.type === 'link')
              return (
                <NavigationMenu.Item key={item.href} asChild>
                  <NavLink {...item} active={router.pathname === item.href} />
                </NavigationMenu.Item>
              );

            if (item.type === 'menu') {
              const isActive = item.items.some(
                item => router.pathname === item.href,
              );

              return (
                <NavigationMenu.Item key={item.children}>
                  <NavigationMenu.Trigger asChild>
                    <NavButton {...item} active={isActive} />
                  </NavigationMenu.Trigger>

                  <Menu>
                    {item.items.map(item => (
                      <NavLink
                        key={item.href}
                        {...item}
                        active={router.pathname === item.href}
                      />
                    ))}
                  </Menu>
                </NavigationMenu.Item>
              );
            }

            return null;
          })}
        </NavigationMenu.List>
      </Container>
    </NavigationMenu.Root>
  );
};

export default NavBar;
