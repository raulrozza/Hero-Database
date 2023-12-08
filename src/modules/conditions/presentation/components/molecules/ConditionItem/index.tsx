import React from 'react';

import { capitalize } from 'lodash';

import { ICondition } from '@/shared/domain/entities';
import {
  ItemCollapsible,
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';
import { useMediaQuery } from '@/shared/presentation/hooks';

import { Container } from './styles';

type TConditionItemProps = ICondition & {
  showComponents?: boolean;
  showTooltip?: boolean;
};

const ConditionItem: React.FC<TConditionItemProps> = ({
  showComponents = true,
  showTooltip = true,
  ...condition
}) => {
  const renderConfig = { showTooltip };
  const isMobile = useMediaQuery('md');

  if (condition.type === 'basic')
    return (
      <Container>
        <ItemHeader
          title={condition.name}
          subtitle={capitalize(condition.type)}
        />

        <ItemContent
          description={condition.description}
          config={renderConfig}
        />

        <ItemFooter source={condition.source} />
      </Container>
    );

  return (
    <Container>
      <ItemHeader
        title={condition.name}
        subtitle={capitalize(condition.type)}
      />

      <ItemContent description={condition.description} config={renderConfig} />

      {showComponents && (
        <ItemCollapsible title="Components" defaultOpen={!isMobile}>
          {condition.components.map(component => (
            <ItemContent
              key={component.key}
              description={condition.description}
              config={renderConfig}
            />
          ))}
        </ItemCollapsible>
      )}

      <ItemFooter source={condition.source} />
    </Container>
  );
};

export default ConditionItem;
