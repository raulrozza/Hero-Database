import React from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import { Container, Header } from './styles';

interface IItemCollapsibleProps {
  title: string;
}

const ItemCollapsible: React.FC<IItemCollapsibleProps> = ({
  title,
  children,
}) => (
  <Accordion.Root type="single" collapsible defaultValue="item">
    <Container value="item">
      <Accordion.Header>
        <Header>
          <h2>{title}</h2>
        </Header>
      </Accordion.Header>

      <Accordion.Content>{children}</Accordion.Content>
    </Container>
  </Accordion.Root>
);

export default ItemCollapsible;
