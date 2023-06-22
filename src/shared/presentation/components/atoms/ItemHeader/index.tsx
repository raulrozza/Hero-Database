import React from 'react';

import { Container } from './styles';

interface IItemHeaderProps {
  title: string;
  subtitle?: string;
}

const ItemHeader: React.FC<IItemHeaderProps> = ({ title, subtitle }) => (
  <Container>
    <h1>{title}</h1>

    {subtitle && <h2>{subtitle}</h2>}
  </Container>
);

export default ItemHeader;
