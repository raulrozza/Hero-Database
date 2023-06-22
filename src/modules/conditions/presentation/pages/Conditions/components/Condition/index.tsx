import React from 'react';

import { capitalize } from 'lodash';

import {
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';

import { Container } from './styles';
import { useConditionValue } from '../../store';

const Condition: React.FC = () => {
  const condition = useConditionValue();

  if (!condition)
    return (
      <Container>
        <ItemContent>
          <p>Please, select a condition from the options</p>
        </ItemContent>
      </Container>
    );

  return (
    <Container>
      <ItemHeader
        title={condition.name}
        subtitle={capitalize(condition.type)}
      />

      <ItemContent>
        {condition.description.split('\n').map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </ItemContent>

      <ItemFooter source={condition.source} />
    </Container>
  );
};

export default Condition;
