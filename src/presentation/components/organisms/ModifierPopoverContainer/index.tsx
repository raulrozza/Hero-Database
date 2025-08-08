'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import ModifierItem from '@/presentation/components/molecules/ModifierItem';
import {
  modifierQueries,
  modifierService,
} from '@/presentation/services/modifiers';

interface IModifierPopoverContainerProps {
  entityKey: string;
}

const ModifierPopoverContainer: React.FC<IModifierPopoverContainerProps> = ({
  entityKey,
}) => {
  const query = useQuery({
    queryKey: modifierQueries.findByKey(entityKey),
    queryFn: modifierService.findByKey(entityKey),
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
      <ModifierItem modifier={query.data} showTooltip={false} />
    </PopoverContainer>
  );
};

export default ModifierPopoverContainer;
