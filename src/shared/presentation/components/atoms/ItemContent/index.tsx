import React, { ComponentProps } from 'react';

import type { ItemContent as ItemContentType } from '@/shared/domain/valueObjects';

import { TextContent } from './components';
import { Container } from './styles';

interface IItemContentProps {
  title?: string;
  description: ItemContentType[];
  config?: ComponentProps<typeof TextContent>['config'];
  children?: never;
}

const ItemContent: React.FC<IItemContentProps> = ({
  title,
  description,
  config,
}) => (
  <Container>
    {title && <h4>{title}</h4>}

    {description.map((content, index) => {
      if (typeof content === 'string')
        return (
          <TextContent key={index} description={content} config={config} />
        );

      return null;
    })}
  </Container>
);

export default ItemContent;
