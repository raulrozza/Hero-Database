import React from 'react';

import { ModifierItem } from '@/modules/powers/presentation/components/molecules';
import PopoverContainer from '@/presentation/components/atoms/PopoverContainer';

interface IModifierPopoverContainerProps {
  entityKey: string;
}

const ModifierPopoverContainer: React.FC<IModifierPopoverContainerProps> = ({
  entityKey,
}) => {
  const query: any = {};

  if (query.isLoading)
    return (
      <PopoverContainer>
        <PopoverContainer.Span>Loading...</PopoverContainer.Span>
      </PopoverContainer>
    );

  if (!query.data) return null;

  return (
    <PopoverContainer>
      <ModifierItem {...query.data} showTooltip={false} />
    </PopoverContainer>
  );
};

export default ModifierPopoverContainer;
