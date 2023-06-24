import React from 'react';

import { ConditionItem } from '@/modules/conditions/presentation/components/molecules';
import { api } from '@/shared/infra/http/api';

import { Container } from './styles';

interface IConditionPopoverContainerProps {
  entityKey: string;
}

const ConditionPopoverContainer: React.FC<IConditionPopoverContainerProps> = ({
  entityKey,
}) => {
  const query = api.conditions.getByKey.useQuery({ key: entityKey });

  if (query.isLoading)
    return (
      <Container>
        <span>Loading...</span>
      </Container>
    );

  if (!query.data)
    return (
      <Container>
        <span>Not found</span>
      </Container>
    );

  return (
    <Container>
      <ConditionItem {...query.data} />
    </Container>
  );
};

export default ConditionPopoverContainer;
