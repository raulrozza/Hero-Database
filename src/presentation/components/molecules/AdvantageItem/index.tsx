import React from 'react';

import { IAdvantage } from '@/domain/entities';
import ItemContent from '@/presentation/components/atoms/ItemContent';
import ItemFooter from '@/presentation/components/atoms/ItemFooter';
import ItemHeader from '@/presentation/components/atoms/ItemHeader';

import { getSubtitle } from './helpers';

type TAdvantageItemProps = {
  showTooltip?: boolean;
  advantage: IAdvantage;
};

const AdvantageItem: React.FC<TAdvantageItemProps> = ({
  showTooltip = true,
  advantage,
}) => {
  const renderConfig = { showTooltip };

  return (
    <div className="w-full bg-neutral-50">
      <ItemHeader title={advantage.name} subtitle={getSubtitle(advantage)} />

      <ItemContent description={advantage.description} config={renderConfig} />

      <ItemFooter source={advantage.source} />
    </div>
  );
};

export default AdvantageItem;
