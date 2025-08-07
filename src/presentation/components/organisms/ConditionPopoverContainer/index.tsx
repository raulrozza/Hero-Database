'use client';

import React from 'react';

import { api } from '@/infra/http/api';
import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import ConditionItem from '@/presentation/components/molecules/ConditionItem';

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
        <PopoverContainer.Span>Loading...</PopoverContainer.Span>
      </PopoverContainer>
    );

  if (!query.data) return null;

  return (
    <PopoverContainer>
      <ConditionItem
        condition={query.data}
        showComponents={false}
        showTooltip={false}
      />
    </PopoverContainer>
  );
};

export default ConditionPopoverContainer;
