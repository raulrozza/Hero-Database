'use client';

import React, { ComponentPropsWithoutRef } from 'react';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Content } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavButton from '@/presentation/components/atoms/NavButton';
import NavLink from '@/presentation/components/atoms/NavLink';

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
  const pathname = usePathname();

  return (
    <NavigationMenu.Root>
      <nav className="flex items-end gap-9 p-6 pt-9 pb-9 bg-primary-500">
        <div className="h-full flex items-center">
          <Link
            href="/"
            className="text-white text-4xl no-underline font-title"
          >
            Hero Database
          </Link>
        </div>

        <NavigationMenu.List className="flex">
          {LINKS.map(item => {
            if (item.type === 'link')
              return (
                <NavigationMenu.Item key={item.href} asChild>
                  <NavLink {...item} active={pathname === item.href} />
                </NavigationMenu.Item>
              );

            if (item.type === 'menu') {
              const isActive = item.items.some(item => pathname === item.href);

              return (
                <NavigationMenu.Item key={item.children}>
                  <NavigationMenu.Trigger asChild>
                    <NavButton {...item} active={isActive} />
                  </NavigationMenu.Trigger>

                  <Content className="absolute">
                    {item.items.map(item => (
                      <NavLink
                        key={item.href}
                        {...item}
                        active={pathname === item.href}
                      />
                    ))}
                  </Content>
                </NavigationMenu.Item>
              );
            }

            return null;
          })}
        </NavigationMenu.List>
      </nav>
    </NavigationMenu.Root>
  );
};

export default NavBar;
