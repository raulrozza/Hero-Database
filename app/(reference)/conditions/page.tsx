import { Metadata } from 'next';

import ReferenceItemContainer from '@/presentation/components/atoms/ReferenceItemContainer';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';

export const metadata: Metadata = {
  title: 'Conditions',
};

export default function Page() {
  return (
    <ReferenceItemContainer>
      <EmptyItemCard
        title="Condition"
        text="Please, select a condition from the options"
      />
    </ReferenceItemContainer>
  );
}
