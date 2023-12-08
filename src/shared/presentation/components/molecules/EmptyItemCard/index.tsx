import React from 'react';

import {
  ItemContent,
  ItemHeader,
} from '@/shared/presentation/components/atoms';

import { Container } from './styles';

interface IEmptyItemCardProps {
  title: string;
  text: string;
}

const EmptyItemCard: React.FC<IEmptyItemCardProps> = ({ title, text }) => (
  <Container>
    <ItemHeader title={title} />

    <ItemContent description={[text]} />
  </Container>
);

export default EmptyItemCard;
