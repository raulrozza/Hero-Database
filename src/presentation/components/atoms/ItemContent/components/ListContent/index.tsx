import React from 'react';

import { ListItemContent } from '@/domain/valueObjects';
import type { RenderItemContentConfig } from '@/presentation/helpers/renderItemContent';
import renderItemContent from '@/presentation/helpers/renderItemContent';

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
