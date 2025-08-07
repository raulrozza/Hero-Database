import React from 'react';

import { ListItemContent } from '@/domain/valueObjects';
import {
  RenderItemContentConfig,
  renderItemContent,
} from '@/shared/presentation/helpers';

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
