import React from 'react';

import ItemContent from '@/shared/presentation/components/atoms/ItemContent';
import ItemHeader from '@/shared/presentation/components/atoms/ItemHeader';

interface IEmptyItemCardProps {
  title: string;
  text: string;
}

const EmptyItemCard: React.FC<IEmptyItemCardProps> = ({ title, text }) => (
  <div className="w-full bg-neutral-50">
    <ItemHeader title={title} />

    <ItemContent description={[text]} />
  </div>
);

export default EmptyItemCard;
