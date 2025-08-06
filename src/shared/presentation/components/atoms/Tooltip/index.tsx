import React, { ReactElement } from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';

import { Content } from './styles';

const DELAY = 200;

interface ITooltipProps {
  content: ReactElement;
  children: React.ReactNode;
}

const Tooltip: React.FC<ITooltipProps> = ({ children, content }) => {
  return (
    <RadixTooltip.Provider delayDuration={DELAY}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <Content side="left">
            <RadixTooltip.Arrow className="arrow" />

            {content}
          </Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
