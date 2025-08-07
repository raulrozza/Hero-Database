import React from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import { FaChevronDown } from 'react-icons/fa';

interface IItemCollapsibleProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const ItemCollapsible: React.FC<IItemCollapsibleProps> = ({
  title,
  children,
  defaultOpen = true,
}) => (
  <Accordion.Root
    type="single"
    collapsible
    defaultValue={defaultOpen ? 'item' : undefined}
  >
    <Accordion.Item className="flex flex-col bg-secondary-300/50" value="item">
      <Accordion.Header>
        <Accordion.Trigger className="text-text-white flex justify-between items-center cursor-pointer p-4 bg-secondary-500 w-full border-none transition-all hover:bg-secondary-800 [&[data-state='open']>svg]:rotate-180">
          <h2>{title}</h2>

          <FaChevronDown aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default ItemCollapsible;
