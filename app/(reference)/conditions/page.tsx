import { Metadata } from 'next';

import EmptyItemCard from '@/shared/presentation/components/molecules/EmptyItemCard';

export const metadata: Metadata = {
  title: 'Conditions',
};

export default function Page() {
  return (
    <div className="w-full md:w-114 max-h-100% no-scrollbar">
      <EmptyItemCard
        title="Condition"
        text="Please, select a condition from the options"
      />
    </div>
  );
}
