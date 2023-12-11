import React from 'react';

import { ListItemContent } from '@/shared/domain/valueObjects';
import {
  RenderItemContentConfig,
  renderItemContent,
} from '@/shared/presentation/helpers';

interface IListContentProps extends ListItemContent {
  config: RenderItemContentConfig | undefined;
}

const ListContent: React.FC<IListContentProps> = ({ items, config }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{renderItemContent(item, config)}</li>
    ))}
  </ul>
);

export default ListContent;
