'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { IModifier } from '@/domain/entities';
import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import ModifierItem from '@/presentation/components/molecules/ModifierItem';

interface IModifierPopoverContainerProps {
  entityKey: string;
}

const ModifierPopoverContainer: React.FC<IModifierPopoverContainerProps> = ({
  entityKey,
}) => {
  const query = useQuery({
    queryKey: ['modifiers', entityKey],
    queryFn: async () => {
      const result = await fetch(`/api/modifiers/${entityKey}`);
      const data = await result.json();

      return data as IModifier;
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
      <ModifierItem modifier={query.data} showTooltip={false} />
    </PopoverContainer>
  );
};

export default ModifierPopoverContainer;
