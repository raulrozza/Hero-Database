'use client';

import React from 'react';

import { capitalize } from 'lodash';
import { usePathname, useRouter } from 'next/navigation';

import { IEffect } from '@/domain/entities';
import Table from '@/presentation/components/atoms/Table';
import getCostText from '@/presentation/helpers/getCostText';
import { useListSorter } from '@/presentation/hooks';

interface IListProps {
  effects: IEffect[];
}

const List: React.FC<IListProps> = ({ effects }) => {
  const sortedQuery = useListSorter(effects, {
    sortKeys: ['name', 'source'],
  });
  const route = useRouter();
  const pathname = usePathname();

  const labels = [
    {
      title: 'Name',
      span: 4,
      onClick: () => sortedQuery.sortBy('name'),
      sortingKey: 'name',
      active: sortedQuery.currentKey === 'name',
      sorting: sortedQuery.order,
    },
    {
      title: 'Type',
      span: 2,
    },
    {
      title: 'Cost',
      span: 2,
    },
    {
      title: 'Source',
      onClick: () => sortedQuery.sortBy('source'),
      sortingKey: 'source',
      active: sortedQuery.currentKey === 'source',
      sorting: sortedQuery.order,
    },
  ];

  return (
    <Table className="w-full grow-0 md:max-w-198 md:max-h-100%" labels={labels}>
      {sortedQuery.items.map(effect => (
        <Table.Row
          key={effect.key}
          items={[
            {
              key: 'name',
              content: effect.name,
              span: 4,
            },
            {
              key: 'type',
              content: capitalize(effect.cost.type),
              span: 2,
            },
            {
              key: 'cost',
              content: getCostText(effect.cost, { showPositiveSign: false }),
              span: 2,
            },
            {
              key: 'source',
              content: effect.source,
            },
          ]}
          onClick={() => route.push(`/effects/${effect.key}`)}
          highlighted={pathname?.includes(effect.key)}
        />
      ))}
    </Table>
  );
};

export default List;
