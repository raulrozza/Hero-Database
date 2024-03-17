import React from 'react';

import { ModifierItem } from '@/modules/powers/presentation/components/molecules';
import { EmptyItemCard } from '@/shared/presentation/components/molecules';

import { Container } from './styles';
import { useModifierValue } from '../../store';

const Modifier: React.FC = () => {
  const modifier = useModifierValue();

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
