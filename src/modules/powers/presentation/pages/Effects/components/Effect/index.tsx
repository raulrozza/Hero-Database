import React from 'react';

import { IEffect } from '@/domain/entities';
import { EffectItem } from '@/modules/powers/presentation/components/molecules';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';

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
