import React from 'react';

import { AdvantageItem } from '@/modules/advantages/presentation/components/molecules';
import { api } from '@/shared/infra/http/api';

import { Container } from './styles';

interface IAdvantagePopoverContainerProps {
  entityKey: string;
}

const AdvantagePopoverContainer: React.FC<IAdvantagePopoverContainerProps> = ({
  entityKey,
}) => {
  const query = api.advantages.getByKey.useQuery({ key: entityKey });

  if (query.isLoading)
    return (
      <Container>
        <span>Loading...</span>
      </Container>
    );

  if (!query.data) return null;

  return (
    <Container>
      <AdvantageItem {...query.data} showTooltip={false} />
    </Container>
  );
};

export default AdvantagePopoverContainer;
