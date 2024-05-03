import React from 'react';

import { ModifierItem } from '@/modules/powers/presentation/components/molecules';
import { api } from '@/shared/infra/http/api';
import { PopoverContainer } from '@/shared/presentation/components/atoms';

interface IModifierPopoverContainerProps {
  entityKey: string;
}

const ModifierPopoverContainer: React.FC<IModifierPopoverContainerProps> = ({
  entityKey,
}) => {
  const query = api.modifiers.getByKey.useQuery({ key: entityKey });

  if (query.isLoading)
    return (
      <PopoverContainer>
        <span>Loading...</span>
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
