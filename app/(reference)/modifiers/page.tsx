import { Metadata } from 'next';

import ReferenceItemContainer from '@/presentation/components/atoms/ReferenceItemContainer';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';

export const metadata: Metadata = {
  title: 'Modifiers',
};

export default function Page() {
  return (
    <ReferenceItemContainer>
      <EmptyItemCard
        title="Modifier"
        text="Please, select a modifier from the options"
      />
    </ReferenceItemContainer>
  );
}
