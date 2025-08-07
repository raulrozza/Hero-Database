import { redirect } from 'next/navigation';

import { makeConditionsRepository } from '@/modules/conditions/infra/repositories';
import ConditionItem from '@/presentation/components/molecules/ConditionItem';

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
    <div className="w-full md:w-114 max-h-100% no-scrollbar">
      <ConditionItem condition={condition} />
    </div>
  );
}
