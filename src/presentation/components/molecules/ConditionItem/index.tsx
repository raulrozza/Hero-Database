'use client';
import React from 'react';

import { capitalize } from 'lodash';

import { ICondition } from '@/domain/entities';
import ItemCollapsible from '@/presentation/components/atoms/ItemCollapsible';
import ItemContent from '@/presentation/components/atoms/ItemContent';
import ItemFooter from '@/presentation/components/atoms/ItemFooter';
import ItemHeader from '@/presentation/components/atoms/ItemHeader';
import { useMediaQuery } from '@/presentation/hooks';

type TConditionItemProps = {
  showComponents?: boolean;
  showTooltip?: boolean;
  condition: ICondition;
};

const ConditionItem: React.FC<TConditionItemProps> = ({
  showComponents = true,
  showTooltip = true,
  condition,
}) => {
  const renderConfig = { showTooltip };
  const isMobile = useMediaQuery('md');

  const containerClassName = 'w-100% bg-neutral-50';

  if (condition.type === 'basic')
    return (
      <div className={containerClassName}>
        <ItemHeader
          title={condition.name}
          subtitle={capitalize(condition.type)}
        />

        <ItemContent
          description={condition.description}
          config={renderConfig}
        />

        <ItemFooter source={condition.source} />
      </div>
    );

  return (
    <div className={containerClassName}>
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
              title={component.name}
              description={component.description}
              config={renderConfig}
            />
          ))}
        </ItemCollapsible>
      )}

      <ItemFooter source={condition.source} />
    </div>
  );
};

export default ConditionItem;
