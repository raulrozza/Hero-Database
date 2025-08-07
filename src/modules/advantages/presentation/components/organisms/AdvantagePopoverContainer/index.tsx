import React from 'react';

import { AdvantageItem } from '@/modules/advantages/presentation/components/molecules';
import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import { api } from '@/infra/http/api';

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
        <PopoverContainer.Span>Loading...</PopoverContainer.Span>
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
