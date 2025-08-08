import { redirect } from 'next/navigation';

import { makeEffectsRepository } from '@/infra/repositories';
import ReferenceItemContainer from '@/presentation/components/atoms/ReferenceItemContainer';
import EffectItem from '@/presentation/components/molecules/EffectItem';
import { HydrationContext } from '@/presentation/contexts/HydrationContext';

interface EffectProps {
  params: {
    effect: string;
  };
}

export function generateMetadata({ params }: EffectProps) {
  return {
    title: `${params.effect} - Effects`,
  };
}

export default async function Effect({ params }: EffectProps) {
  const effect = await makeEffectsRepository().findByKey(params.effect);

  if (!effect) redirect('/effects');

  return (
    <HydrationContext>
      <ReferenceItemContainer>
        <EffectItem effect={effect} />
      </ReferenceItemContainer>
    </HydrationContext>
  );
}
