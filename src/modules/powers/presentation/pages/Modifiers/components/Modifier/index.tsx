import React from 'react';

import { ModifierItem } from '@/modules/powers/presentation/components/molecules';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';
import { IModifier } from '@/domain/entities';

import { Container } from './styles';

const Modifier: React.FC = () => {
  const modifier = null as IModifier | null;

  if (!modifier)
    return (
      <Container>
        <EmptyItemCard
          title="Modifier"
          text="Please, select a modifier from the options"
        />
      </Container>
    );

  return (
    <Container>
      <ModifierItem {...modifier} />
    </Container>
  );
};

export default Modifier;
