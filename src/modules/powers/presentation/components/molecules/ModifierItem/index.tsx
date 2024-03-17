import React from 'react';

import { IModifier } from '@/shared/domain/entities';
import {
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';

import { getSubtitle } from './helpers';
import { Container } from './styles';

type TModifierItemProps = IModifier & {
  showTooltip?: boolean;
};

const ModifierItem: React.FC<TModifierItemProps> = ({
  showTooltip = true,
  ...modifier
}) => {
  const renderConfig = { showTooltip };

  return (
    <Container>
      <ItemHeader title={modifier.name} subtitle={getSubtitle(modifier)} />

      <ItemContent description={modifier.description} config={renderConfig} />

      <ItemFooter source={modifier.source} />
    </Container>
  );
};

export default ModifierItem;
