'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { IAdvantage } from '@/domain/entities';
import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import AdvantageItem from '@/presentation/components/molecules/AdvantageItem';

interface IAdvantagePopoverContainerProps {
  entityKey: string;
}

const AdvantagePopoverContainer: React.FC<IAdvantagePopoverContainerProps> = ({
  entityKey,
}) => {
  const query = useQuery({
    queryKey: ['advantages', entityKey],
    queryFn: async () => {
      const result = await fetch(`/api/advantages/${entityKey}`);
      const data = await result.json();

      return data as IAdvantage;
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
      <AdvantageItem advantage={query.data} showTooltip={false} />
    </PopoverContainer>
  );
};

export default AdvantagePopoverContainer;
