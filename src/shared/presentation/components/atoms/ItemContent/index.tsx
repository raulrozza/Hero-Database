import React from 'react';

import type { ItemContent as ItemContentType } from '@/shared/domain/valueObjects';
import { RenderItemContentConfig } from '@/shared/presentation/helpers';

import ContentFactory from './components';
import { Container } from './styles';

interface IItemContentProps {
  title?: string;
  description: ItemContentType[];
  config?: RenderItemContentConfig;
  children?: never;
}

const ItemContent: React.FC<IItemContentProps> = ({
  title,
  description,
  config,
}) => (
  <Container>
    {title && <h4>{title}</h4>}

    <ContentFactory description={description} config={config} />
  </Container>
);

export default ItemContent;
