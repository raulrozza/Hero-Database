import React from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import { FaChevronDown } from 'react-icons/fa';

import { Container, Content, Header } from './styles';

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

          <FaChevronDown aria-hidden />
        </Header>
      </Accordion.Header>

      <Content>{children}</Content>
    </Container>
  </Accordion.Root>
);

export default ItemCollapsible;
