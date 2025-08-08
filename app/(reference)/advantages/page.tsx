import { Metadata } from 'next';

import EmptyItemCard from '@/presentation/components/molecules/EmptyItemCard';

export const metadata: Metadata = {
  title: 'Advantages',
};

export default function Page() {
  return (
    <div className="w-full md:w-114 max-h-100% no-scrollbar">
      <EmptyItemCard
        title="Advantage"
        text="Please, select an advantage from the options"
      />
    </div>
  );
}
