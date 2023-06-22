import React from 'react';

import { Container } from './styles';

interface IItemFooterProps {
  source: string;
}

const ItemFooter: React.FC<IItemFooterProps> = ({ source }) => {
  return (
    <Container>
      <strong>{'Source: '}</strong>
      {source}
    </Container>
  );
};

export default ItemFooter;
