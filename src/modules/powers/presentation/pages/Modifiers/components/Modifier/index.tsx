import React from 'react';

import { ModifierItem } from '@/modules/powers/presentation/components/molecules';
import { IModifier } from '@/shared/domain/entities';
import { EmptyItemCard } from '@/shared/presentation/components/molecules';

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
