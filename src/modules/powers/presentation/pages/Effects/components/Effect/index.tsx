import React from 'react';

import { EffectItem } from '@/modules/powers/presentation/components/molecules';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';
import { IEffect } from '@/shared/domain/entities';

import { Container } from './styles';

const Effect: React.FC = () => {
  const effect = null as IEffect | null;

  if (!effect)
    return (
      <Container>
        <EmptyItemCard
          title="Effect"
          text="Please, select an effect from the options"
        />
      </Container>
    );

  return (
    <Container>
      <EffectItem {...effect} />
    </Container>
  );
};

export default Effect;
