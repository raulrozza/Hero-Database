import React from 'react';

import { capitalize } from 'lodash';

import { IEffect } from '@/shared/domain/entities';
import {
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';

import { Container } from './styles';

type TEffectItemProps = IEffect & {
  showTooltip?: boolean;
};

const EffectItem: React.FC<TEffectItemProps> = ({
  showTooltip = true,
  ...effect
}) => {
  const renderConfig = { showTooltip };

  return (
    <Container>
      <ItemHeader title={effect.name} subtitle={capitalize(effect.type)} />

      <ItemContent description={effect.description} config={renderConfig} />

      <ItemFooter source={effect.source} />
    </Container>
  );
};

export default EffectItem;
