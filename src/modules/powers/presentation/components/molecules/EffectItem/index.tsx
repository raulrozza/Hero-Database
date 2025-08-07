import React from 'react';

import { capitalize } from 'lodash';

import { IEffect } from '@/domain/entities';
import { getCostText } from '@/modules/powers/presentation/helpers';
import ItemCollapsible from '@/presentation/components/atoms/ItemCollapsible';
import ItemFooter from '@/presentation/components/atoms/ItemFooter';
import ItemHeader from '@/presentation/components/atoms/ItemHeader';
import { ItemContent } from '@/shared/presentation/components/atoms';
import { useThemeProvider } from '@/shared/presentation/contexts';

import { Container, Subtitle } from './styles';

type TEffectItemProps = IEffect & {
  showTooltip?: boolean;
};

const EffectItem: React.FC<TEffectItemProps> = ({
  showTooltip = true,
  ...effect
}) => {
  const { name } = useThemeProvider();
  const renderConfig = { showTooltip };

  return (
    <Container>
      <ItemHeader title={effect.name} subtitle={capitalize(effect.type)} />

      <Subtitle themeName={name}>
        <div>
          <p>
            <strong>Action:</strong> {effect.action || 'None'}
          </p>
          <span>•</span>
          <p>
            <strong>Range:</strong> {effect.range}
          </p>
        </div>

        <div>
          <p>
            <strong>Duration:</strong> {effect.duration}
          </p>
          <span>•</span>
          <p>
            <strong>Cost:</strong>{' '}
            {getCostText(effect.cost, { showPositiveSign: false })}
          </p>
        </div>
      </Subtitle>

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
    </Container>
  );
};

export default EffectItem;
