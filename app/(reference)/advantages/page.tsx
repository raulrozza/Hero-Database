import { Metadata } from 'next';

import ReferenceItemContainer from '@/presentation/components/atoms/ReferenceItemContainer';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';

export const metadata: Metadata = {
  title: 'Advantages',
};

export default function Page() {
  return (
    <ReferenceItemContainer>
      <EmptyItemCard
        title="Advantage"
        text="Please, select an advantage from the options"
      />
    </ReferenceItemContainer>
  );
}
