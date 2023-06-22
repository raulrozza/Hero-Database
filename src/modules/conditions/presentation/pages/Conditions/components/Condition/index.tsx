import React from 'react';

import { capitalize } from 'lodash';

import {
  ItemCollapsible,
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
        <ItemHeader title="Condition" />

        <ItemContent>
          <p>Please, select a condition from the options</p>
        </ItemContent>
      </Container>
    );

  if (condition.type === 'basic')
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

      <ItemCollapsible title="Components">
        {condition.components.map(component => (
          <ItemContent key={component.key} title={component.name}>
            {component.description.split('\n').map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </ItemContent>
        ))}
      </ItemCollapsible>

      <ItemFooter source={condition.source} />
    </Container>
  );
};

export default Condition;
