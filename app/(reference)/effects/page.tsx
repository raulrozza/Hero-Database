import { Metadata } from 'next';

import ReferenceItemContainer from '@/presentation/components/atoms/ReferenceItemContainer';
import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';

export const metadata: Metadata = {
  title: 'Effects',
};

export default function Page() {
  return (
    <ReferenceItemContainer>
      <EmptyItemCard
        title="Effect"
        text="Please, select an effect from the options"
      />
    </ReferenceItemContainer>
  );
}
