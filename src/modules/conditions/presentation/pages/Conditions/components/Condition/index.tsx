import React from 'react';

import { ConditionItem } from '@/modules/conditions/presentation/components/molecules';
import { ICondition } from '@/shared/domain/entities';
import { EmptyItemCard } from '@/shared/presentation/components/molecules';

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
