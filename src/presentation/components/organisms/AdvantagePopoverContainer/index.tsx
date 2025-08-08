'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import AdvantageItem from '@/presentation/components/molecules/AdvantageItem';
import {
  advantageQueries,
  advantageService,
} from '@/presentation/services/advantages';

interface IAdvantagePopoverContainerProps {
  entityKey: string;
}

const AdvantagePopoverContainer: React.FC<IAdvantagePopoverContainerProps> = ({
  entityKey,
}) => {
  const query = useQuery({
    queryKey: advantageQueries.findByKey(entityKey),
    queryFn: advantageService.findByKey(entityKey),
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
