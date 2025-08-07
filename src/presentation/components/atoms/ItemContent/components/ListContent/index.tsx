import React from 'react';

import type { RenderItemContentConfig } from '@/presentation/helpers/renderItemContent';
import renderItemContent from '@/presentation/helpers/renderItemContent';
import { ListItemContent } from '@/shared/domain/valueObjects';

interface IListContentProps extends ListItemContent {
  config: RenderItemContentConfig | undefined;
}

const ListContent: React.FC<IListContentProps> = ({ items, config }) => (
  <ul className="flex flex-col gap-2 pl-8">
    {items.map((item, index) => (
      <li key={index}>{renderItemContent(item, config)}</li>
    ))}
  </ul>
);

export default ListContent;
