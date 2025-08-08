'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import ConditionItem from '@/presentation/components/molecules/ConditionItem';
import { useTRPC } from '@/presentation/contexts/HttpContext';

interface IConditionPopoverContainerProps {
  entityKey: string;
}

const ConditionPopoverContainer: React.FC<IConditionPopoverContainerProps> = ({
  entityKey,
}) => {
  const trpc = useTRPC();
  const query = useQuery(
    trpc.conditions.getByKey.queryOptions({ key: entityKey }),
  );

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
