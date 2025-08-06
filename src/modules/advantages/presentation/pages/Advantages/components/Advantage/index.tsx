import React from 'react';

import { AdvantageItem } from '@/modules/advantages/presentation/components/molecules';
import { IAdvantage } from '@/shared/domain/entities';
import { EmptyItemCard } from '@/shared/presentation/components/molecules';

import { Container } from './styles';

const Advantage: React.FC = () => {
  const advantage = null as IAdvantage | null;

  if (!advantage)
    return (
      <Container>
        <EmptyItemCard
          title="Advantage"
          text="Please, select an advantage from the options"
        />
      </Container>
    );

  return (
    <Container>
      <AdvantageItem {...advantage} />
    </Container>
  );
};

export default Advantage;
