'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';
import ModifierItem from '@/presentation/components/molecules/ModifierItem';
import { useTRPC } from '@/presentation/contexts/HttpContext';

interface IModifierPopoverContainerProps {
  entityKey: string;
}

const ModifierPopoverContainer: React.FC<IModifierPopoverContainerProps> = ({
  entityKey,
}) => {
  const trpc = useTRPC();
  const query = useQuery(
    trpc.modifiers.getByKey.queryOptions({ key: entityKey }),
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
      <ModifierItem modifier={query.data} showTooltip={false} />
    </PopoverContainer>
  );
};

export default ModifierPopoverContainer;
