import React from 'react';

/* import { EffectItem } from '@/modules/powers/presentation/components/molecules'; */
import { EmptyItemCard } from '@/shared/presentation/components/molecules';

import { Container } from './styles';
import { useEffectValue } from '../../store';

const Effect: React.FC = () => {
  const effect = useEffectValue();

  if (!effect)
    return (
      <Container>
        <EmptyItemCard
          title="Effect"
          text="Please, select an effect from the options"
        />
      </Container>
    );

  return <Container>{/*  <EffectItem {...effect} /> */}</Container>;
};

export default Effect;
