import { redirect } from 'next/navigation';

import { makeAdvantagesRepository } from '@/infra/repositories';
import ReferenceItemContainer from '@/presentation/components/atoms/ReferenceItemContainer';
import AdvantageItem from '@/presentation/components/molecules/AdvantageItem';
import { HydrationContext } from '@/presentation/contexts/HydrationContext';

interface AdvantageProps {
  params: {
    advantage: string;
  };
}

export function generateMetadata({ params }: AdvantageProps) {
  return {
    title: `${decodeURI(params.advantage)} - Advantages`,
  };
}

export default async function Advantage({ params }: AdvantageProps) {
  const advantage = await makeAdvantagesRepository().findByKey(
    decodeURI(params.advantage),
  );

  if (!advantage) redirect('/advantages');

  return (
    <HydrationContext>
      <ReferenceItemContainer>
        <AdvantageItem advantage={advantage} />
      </ReferenceItemContainer>
    </HydrationContext>
  );
}
