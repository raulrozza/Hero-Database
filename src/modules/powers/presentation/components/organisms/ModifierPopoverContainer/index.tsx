import React from 'react';

import { ModifierItem } from '@/modules/powers/presentation/components/molecules';
import { api } from '@/shared/infra/http/api';

import { Container } from './styles';

interface IModifierPopoverContainerProps {
  entityKey: string;
}

const ModifierPopoverContainer: React.FC<IModifierPopoverContainerProps> = ({
  entityKey,
}) => {
  const query = api.modifiers.getByKey.useQuery({ key: entityKey });

  if (query.isLoading)
    return (
      <Container>
        <span>Loading...</span>
      </Container>
    );

  if (!query.data) return null;

  return (
    <Container>
      <ModifierItem {...query.data} showTooltip={false} />
    </Container>
  );
};

export default ModifierPopoverContainer;
