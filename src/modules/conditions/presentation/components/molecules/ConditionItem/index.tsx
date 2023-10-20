import React from 'react';

import { capitalize } from 'lodash';

import { ICondition } from '@/shared/domain/entities';
import {
  ItemCollapsible,
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';
import { renderItemDescription } from '@/shared/presentation/helpers';

import { Container } from './styles';

type TConditionItemProps = ICondition & { showComponents?: boolean };

const ConditionItem: React.FC<TConditionItemProps> = ({
  showComponents = true,
  ...condition
}) => {
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

      {showComponents && (
        <ItemCollapsible title="Components">
          {condition.components.map(component => (
            <ItemContent key={component.key} title={component.name}>
              {renderItemDescription(component.description)}
            </ItemContent>
          ))}
        </ItemCollapsible>
      )}

      <ItemFooter source={condition.source} />
    </Container>
  );
};

export default ConditionItem;
