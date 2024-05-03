import React from 'react';

import { ConditionItem } from '@/modules/conditions/presentation/components/molecules';
import { api } from '@/shared/infra/http/api';
import { PopoverContainer } from '@/shared/presentation/components/atoms';

interface IConditionPopoverContainerProps {
  entityKey: string;
}

const ConditionPopoverContainer: React.FC<IConditionPopoverContainerProps> = ({
  entityKey,
}) => {
  const query = api.conditions.getByKey.useQuery({ key: entityKey });

  if (query.isLoading)
    return (
      <PopoverContainer>
        <span>Loading...</span>
      </PopoverContainer>
    );

  if (!query.data) return null;

  return (
    <PopoverContainer>
      <ConditionItem
        {...query.data}
        showComponents={false}
        showTooltip={false}
      />
    </PopoverContainer>
  );
};

export default ConditionPopoverContainer;
