'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { ICondition } from '@/domain/entities';
import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import ConditionItem from '@/presentation/components/molecules/ConditionItem';

interface IConditionPopoverContainerProps {
  entityKey: string;
}

const ConditionPopoverContainer: React.FC<IConditionPopoverContainerProps> = ({
  entityKey,
}) => {
  const query = useQuery({
    queryKey: ['conditions', entityKey],
    queryFn: async () => {
      const result = await fetch(`/api/conditions/${entityKey}`);
      const data = await result.json();

      return data as ICondition;
    },
  });

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
