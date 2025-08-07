import React from 'react';

import { ICondition } from '@/domain/entities';
import { ConditionItem } from '@/modules/conditions/presentation/components/molecules';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';

import { Container } from './styles';

const Condition: React.FC = () => {
  const condition = null as ICondition | null;

  if (!condition)
    return (
      <Container>
        <EmptyItemCard
          title="Condition"
          text="Please, select a condition from the options"
        />
      </Container>
    );

  return (
    <Container>
      <ConditionItem {...condition} />
    </Container>
  );
};

export default Condition;
