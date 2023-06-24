import React from 'react';

import { Container } from './styles';

interface IItemContentProps {
  title?: string;
}

const ItemContent: React.FC<IItemContentProps> = ({ title, children }) => (
  <Container>
    {title && <h4>{title}</h4>}

    {children}
  </Container>
);

export default ItemContent;
