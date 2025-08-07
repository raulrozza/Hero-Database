import React from 'react';

import { AdvantageItem } from '@/modules/advantages/presentation/components/molecules';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';
import { IAdvantage } from '@/shared/domain/entities';

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
