import React from 'react';

import { AdvantageItem } from '@/modules/advantages/presentation/components/molecules';
import { api } from '@/shared/infra/http/api';
import { PopoverContainer } from '@/shared/presentation/components/atoms';

interface IAdvantagePopoverContainerProps {
  entityKey: string;
}

const AdvantagePopoverContainer: React.FC<IAdvantagePopoverContainerProps> = ({
  entityKey,
}) => {
  const query = api.advantages.getByKey.useQuery({ key: entityKey });

  if (query.isLoading)
    return (
      <PopoverContainer>
        <span>Loading...</span>
      </PopoverContainer>
    );

  if (!query.data) return null;

  return (
    <PopoverContainer>
      <AdvantageItem {...query.data} showTooltip={false} />
    </PopoverContainer>
  );
};

export default AdvantagePopoverContainer;
