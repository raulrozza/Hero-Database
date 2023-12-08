import React from 'react';

import { ListItemContent } from '@/shared/domain/valueObjects';
import {
  RenderItemDescriptionConfig,
  renderItemDescription,
} from '@/shared/presentation/helpers';

interface IListContentProps extends ListItemContent {
  config: RenderItemDescriptionConfig | undefined;
}

const ListContent: React.FC<IListContentProps> = ({ items, config }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{renderItemDescription(item, config)}</li>
    ))}
  </ul>
);

export default ListContent;
