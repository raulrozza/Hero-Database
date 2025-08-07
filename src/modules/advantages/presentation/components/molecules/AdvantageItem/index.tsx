import React from 'react';

import { IAdvantage } from '@/domain/entities';
import ItemFooter from '@/presentation/components/atoms/ItemFooter';
import ItemHeader from '@/presentation/components/atoms/ItemHeader';
import { ItemContent } from '@/shared/presentation/components/atoms';

import { getSubtitle } from './helpers';
import { Container } from './styles';

type TAdvantageItemProps = IAdvantage & {
  showTooltip?: boolean;
};

const AdvantageItem: React.FC<TAdvantageItemProps> = ({
  showTooltip = true,
  ...advantage
}) => {
  const renderConfig = { showTooltip };

  return (
    <Container>
      <ItemHeader title={advantage.name} subtitle={getSubtitle(advantage)} />

      <ItemContent description={advantage.description} config={renderConfig} />

      <ItemFooter source={advantage.source} />
    </Container>
  );
};

export default AdvantageItem;
