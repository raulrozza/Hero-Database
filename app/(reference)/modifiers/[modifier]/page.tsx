import { redirect } from 'next/navigation';

import { makeModifiersRepository } from '@/infra/repositories';
import ReferenceItemContainer from '@/presentation/components/atoms/ReferenceItemContainer';
import ModifierItem from '@/presentation/components/molecules/ModifierItem';
import { HydrationContext } from '@/presentation/contexts/HydrationContext';

interface ModifierProps {
  params: {
    modifier: string;
  };
}

export function generateMetadata({ params }: ModifierProps) {
  return {
    title: `${decodeURI(params.modifier)} - Modifiers`,
  };
}

export default async function Modifier({ params }: ModifierProps) {
  const modifier = await makeModifiersRepository().findByKey(
    decodeURI(params.modifier),
  );

  if (!modifier) redirect('/modifiers');

  return (
    <HydrationContext>
      <ReferenceItemContainer>
        <ModifierItem modifier={modifier} />
      </ReferenceItemContainer>
    </HydrationContext>
  );
}
