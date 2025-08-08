'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import AdvantageItem from '@/presentation/components/molecules/AdvantageItem';
import { useTRPC } from '@/presentation/contexts/HttpContext';

interface IAdvantagePopoverContainerProps {
  entityKey: string;
}

const AdvantagePopoverContainer: React.FC<IAdvantagePopoverContainerProps> = ({
  entityKey,
}) => {
  const trpc = useTRPC();
  const query = useQuery(
    trpc.advantages.getByKey.queryOptions({ key: entityKey }),
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
      <AdvantageItem advantage={query.data} showTooltip={false} />
    </PopoverContainer>
  );
};

export default AdvantagePopoverContainer;
