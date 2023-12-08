import React from 'react';

import { AdvantageItem } from '@/modules/advantages/presentation/components/molecules';
import { EmptyItemCard } from '@/shared/presentation/components/molecules';

import { Container } from './styles';
import { useAdvantageValue } from '../../store';

const Advantage: React.FC = () => {
  const advantage = useAdvantageValue();

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
