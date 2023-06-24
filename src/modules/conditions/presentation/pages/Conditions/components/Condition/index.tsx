import React from 'react';

import { ConditionItem } from '@/modules/conditions/presentation/components/molecules';
import {
  ItemContent,
  ItemHeader,
} from '@/shared/presentation/components/atoms';

import { Container } from './styles';
import { useConditionValue } from '../../store';

const Condition: React.FC = () => {
  const condition = useConditionValue();

  if (!condition)
    return (
      <Container>
        <ItemHeader title="Condition" />

        <ItemContent>
          <p>Please, select a condition from the options</p>
        </ItemContent>
      </Container>
    );

  return (
    <Container>
      <ConditionItem {...condition} />
    </Container>
  );
};

export default Condition;
