import React from 'react';

import { ConditionItem } from '@/modules/conditions/presentation/components/molecules';
import { EmptyItemCard } from '@/shared/presentation/components/molecules';

import { Container } from './styles';
import { useConditionValue } from '../../store';

const Condition: React.FC = () => {
  const condition = useConditionValue();

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
