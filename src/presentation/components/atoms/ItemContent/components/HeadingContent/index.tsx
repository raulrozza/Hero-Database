import React from 'react';

import { cn } from '@/presentation/helpers/cn';
import type { RenderItemContentConfig } from '@/presentation/helpers/renderItemContent';
import { HeadingItemContent } from '@/shared/domain/valueObjects';

import { h2Classes } from '../../constants/classes';
import { VARIABLES } from '../../constants/variables';

interface IHeadingContentProps extends HeadingItemContent {
  config: RenderItemContentConfig | undefined;
}

const HeadingContent: React.FC<IHeadingContentProps> = ({ variant, text }) => (
  <header
    className={cn(
      'text-center text-primary-500',
      `[${VARIABLES.TITLE_BORDER}: 0px]`,
    )}
  >
    {React.createElement(
      variant,
      {
        className: variant === 'h2' ? h2Classes : undefined,
      },
      text,
    )}
  </header>
);

export default HeadingContent;
