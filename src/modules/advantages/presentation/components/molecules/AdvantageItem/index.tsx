import React from 'react';

import { IAdvantage } from '@/shared/domain/entities';
import {
  ItemContent,
  ItemFooter,
  ItemHeader,
} from '@/shared/presentation/components/atoms';
import { renderItemDescription } from '@/shared/presentation/helpers';

import { getSubtitle } from './helpers';
import { Container } from './styles';

type TAdvantageItemProps = IAdvantage & {
  showComponents?: boolean;
  showTooltip?: boolean;
};

const AdvantageItem: React.FC<TAdvantageItemProps> = ({
  showComponents = true,
  showTooltip = true,
  ...advantage
}) => {
  const renderConfig = { showTooltip };

  return (
    <Container>
      <ItemHeader title={advantage.name} subtitle={getSubtitle(advantage)} />

      <ItemContent>
        {renderItemDescription(advantage.description, renderConfig)}
      </ItemContent>

      <ItemFooter source={advantage.source} />
    </Container>
  );
};

export default AdvantageItem;
