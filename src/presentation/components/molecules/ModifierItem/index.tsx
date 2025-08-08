import React from 'react';

import { capitalize } from 'lodash';

import { IModifier } from '@/domain/entities';
import ItemCollapsible from '@/presentation/components/atoms/ItemCollapsible';
import ItemContent from '@/presentation/components/atoms/ItemContent';
import ItemFooter from '@/presentation/components/atoms/ItemFooter';
import ItemHeader from '@/presentation/components/atoms/ItemHeader';
import { cn } from '@/presentation/helpers/cn';
import getCostText from '@/presentation/helpers/getCostText';

import { getSubtitle } from './helpers';

type TModifierItemProps = {
  showTooltip?: boolean;
  modifier: IModifier;
};

const ModifierItem: React.FC<TModifierItemProps> = ({
  showTooltip = true,
  modifier,
}) => {
  const renderConfig = { showTooltip };

  return (
    <div className="w-full bg-neutral-50">
      <ItemHeader title={modifier.name} subtitle={getSubtitle(modifier)} />

      <div
        className={cn(
          'text-text-white flex justify-between items-center p-4 w-full',
          modifier.type === 'extra' ? 'bg-secondary-500' : 'bg-contrast-500',
        )}
      >
        <h2>{capitalize(modifier.type)}</h2>
      </div>

      <ItemContent description={modifier.description} config={renderConfig} />

      {!!modifier.variants.length && (
        <ItemCollapsible title="Variants" defaultOpen={false}>
          {modifier.variants.map(variant => (
            <div key={variant.effect}>
              <ItemContent
                title={`${variant.effect} (${getCostText(variant.cost)})`}
                description={variant.description}
                config={renderConfig}
              />
            </div>
          ))}
        </ItemCollapsible>
      )}

      <ItemFooter source={modifier.source} />
    </div>
  );
};

export default ModifierItem;
