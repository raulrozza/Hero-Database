import { redirect } from 'next/navigation';

import { makeConditionsRepository } from '@/infra/repositories';
import ReferenceItemContainer from '@/presentation/components/atoms/ReferenceItemContainer';
import ConditionItem from '@/presentation/components/molecules/ConditionItem';
import { HydrationContext } from '@/presentation/contexts/HydrationContext';

interface ConditionProps {
  params: {
    condition: string;
  };
}

export function generateMetadata({ params }: ConditionProps) {
  return {
    title: `${params.condition} - Conditions`,
  };
}

export default async function Condition({ params }: ConditionProps) {
  const condition = await makeConditionsRepository().findByKey(
    params.condition,
  );

  if (!condition) redirect('/conditions');

  return (
    <HydrationContext>
      <ReferenceItemContainer>
        <ConditionItem condition={condition} />
      </ReferenceItemContainer>
    </HydrationContext>
  );
}
