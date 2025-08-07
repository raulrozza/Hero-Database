import React from 'react';

import type { ItemContent as ItemContentType } from '@/domain/valueObjects';
import { cn } from '@/presentation/helpers/cn';
import type { RenderItemContentConfig } from '@/presentation/helpers/renderItemContent';

import ContentFactory from './components';
import { VARIABLES } from './constants/variables';

interface IItemContentProps {
  title?: string;
  description: ItemContentType[];
  config?: RenderItemContentConfig;
}

const ItemContent: React.FC<IItemContentProps> = ({
  title,
  description,
  config,
}) => (
  <section
    className={cn(
      'flex flex-col gap-2 p-4',
      `[${VARIABLES.TITLE_BORDER}: 1px]`,
    )}
  >
    {title && <h4>{title}</h4>}

    <ContentFactory description={description} config={config} />
  </section>
);

export default ItemContent;
