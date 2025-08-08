import React from 'react';

import { capitalize } from 'lodash';

import { IEffect } from '@/domain/entities';
import ItemCollapsible from '@/presentation/components/atoms/ItemCollapsible';
import ItemContent from '@/presentation/components/atoms/ItemContent';
import ItemFooter from '@/presentation/components/atoms/ItemFooter';
import ItemHeader from '@/presentation/components/atoms/ItemHeader';
import { cn } from '@/presentation/helpers/cn';
import getCostText from '@/presentation/helpers/getCostText';

type TEffectItemProps = {
  showTooltip?: boolean;
  effect: IEffect;
};

const sectionClassName = 'flex g-2';
const pClassName = 'font-light';
const strongClassName = 'font-extrabold';

const EffectItem: React.FC<TEffectItemProps> = ({
  showTooltip = true,
  effect,
}) => {
  const renderConfig = { showTooltip };

  return (
    <div className="w-full bg-neutral-50">
      <ItemHeader title={effect.name} subtitle={capitalize(effect.type)} />

      <div
        className={cn(
          'flex flex-col items-center p-2 g-2 bg-primary-100 dark:bg-primary-900',
        )}
      >
        <div className={sectionClassName}>
          <p className={pClassName}>
            <strong className={strongClassName}>Action:</strong>{' '}
            {effect.action || 'None'}
          </p>
          <span>•</span>
          <p className={pClassName}>
            <strong className={strongClassName}>Range:</strong> {effect.range}
          </p>
        </div>

        <div className={sectionClassName}>
          <p className={pClassName}>
            <strong className={strongClassName}>Duration:</strong>{' '}
            {effect.duration}
          </p>
          <span>•</span>
          <p className={pClassName}>
            <strong className={strongClassName}>Cost:</strong>{' '}
            {getCostText(effect.cost, { showPositiveSign: false })}
          </p>
        </div>
      </div>

      <ItemContent description={effect.description} config={renderConfig} />

      {!!effect.extras.length && (
        <ItemCollapsible title="Extras">
          {effect.extras.map(extra => (
            <ItemContent
              key={extra.key}
              title={`${extra.name} (${getCostText(extra.cost)})`}
              description={extra.description}
            />
          ))}
        </ItemCollapsible>
      )}

      <ItemFooter source={effect.source} />
    </div>
  );
};

export default EffectItem;
