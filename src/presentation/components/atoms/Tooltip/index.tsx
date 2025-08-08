'use client';

import React, { ReactElement } from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';

const DELAY = 200;

interface ITooltipProps {
  content: ReactElement;
  children: React.ReactNode;
}

const Tooltip: React.FC<ITooltipProps> = ({ children, content }) => (
  <RadixTooltip.Provider delayDuration={DELAY}>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side="left"
          className="max-h-[var(--radix-tooltip-content-available-height)] [transform-origin: var(--radix-tooltip-content-transform-origin)] animate-scale-in shadow-2xl overflow-auto overflow-x-hidden [&[data-side='bottom'].arrow]: fill-primary-500"
        >
          <RadixTooltip.Arrow className="arrow fill-neutral-50" />

          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);

export default Tooltip;
