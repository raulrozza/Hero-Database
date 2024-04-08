import React from 'react';

import { capitalize } from 'lodash';

import { getCostText } from '@/modules/powers/presentation/helpers';
import { IEffect } from '@/shared/domain/entities';
import {
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';
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

      <ItemFooter source={effect.source} />
    </Container>
  );
};

export default EffectItem;
