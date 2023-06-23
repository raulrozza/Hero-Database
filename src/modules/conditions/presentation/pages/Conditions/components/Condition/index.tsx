import React from 'react';

import { capitalize } from 'lodash';

import {
  ItemCollapsible,
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';
import { renderItemDescription } from '@/shared/presentation/helpers';

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
          {renderItemDescription(condition.description)}
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

      <ItemContent>{renderItemDescription(condition.description)}</ItemContent>

      <ItemCollapsible title="Components">
        {condition.components.map(component => (
          <ItemContent key={component.key} title={component.name}>
            {renderItemDescription(component.description)}
          </ItemContent>
        ))}
      </ItemCollapsible>

      <ItemFooter source={condition.source} />
    </Container>
  );
};

export default Condition;
