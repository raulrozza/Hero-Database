import React from 'react';

import { BoxItemContent } from '@/domain/valueObjects';
import { cn } from '@/presentation/helpers/cn';
import type { RenderItemContentConfig } from '@/presentation/helpers/renderItemContent';

import ContentFactory from '..';
import { VARIABLES } from '../../constants/variables';

interface IBoxContentProps extends BoxItemContent {
  config: RenderItemContentConfig | undefined;
}

const BoxContent: React.FC<IBoxContentProps> = ({ description, config }) => (
  <section
    className={cn(
      'flex flex-col gap-2 p-2 border-t-2 border-t-primary-500 border-b-2 border-b-neutral-900 bg-primary-100 dark:bg-primary-900',
      `[${VARIABLES.TITLE_BORDER}: 0px]`,
    )}
  >
    <ContentFactory description={description} config={config} />
  </section>
);

export default BoxContent;
