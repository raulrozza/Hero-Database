import React from 'react';

import { Container } from './styles';

interface IItemContentProps {
  title?: string;
}

const ItemContent: React.FC<IItemContentProps> = ({ title, children }) => (
  <Container>
    {title && <strong>{title}</strong>}

    {children}
  </Container>
);

export default ItemContent;
