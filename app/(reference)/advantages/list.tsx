'use client';

import React from 'react';

import { capitalize } from 'lodash';
import { usePathname, useRouter } from 'next/navigation';

import { IAdvantage } from '@/domain/entities';
import Table from '@/presentation/components/atoms/Table';
import { useListSorter } from '@/presentation/hooks';

import { getRanksTextFromMaxRanks } from './helpers';

interface IListProps {
  advantages: IAdvantage[];
}

const List: React.FC<IListProps> = ({ advantages }) => {
  const sortedQuery = useListSorter(advantages, {
    sortKeys: ['name', 'type', 'maxRanks', 'source'],
  });
  const route = useRouter();
  const pathname = usePathname();

  const labels = [
    {
      title: 'Name',
      span: 2,
      onClick: () => sortedQuery.sortBy('name'),
      sortingKey: 'name',
      active: sortedQuery.currentKey === 'name',
      sorting: sortedQuery.order,
    },
    {
      title: 'Type',
      onClick: () => sortedQuery.sortBy('type'),
      sortingKey: 'type',
      active: sortedQuery.currentKey === 'type',
      sorting: sortedQuery.order,
    },
    {
      title: 'Ranks',
      onClick: () => sortedQuery.sortBy('maxRanks'),
      sortingKey: 'maxRanks',
      active: sortedQuery.currentKey === 'maxRanks',
      sorting: sortedQuery.order,
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
      {sortedQuery.items.map(advantage => (
        <Table.Row
          key={advantage.key}
          items={[
            {
              key: 'name',
              content: advantage.name,
              span: 2,
            },
            {
              key: 'ranks',
              content: getRanksTextFromMaxRanks(advantage.maxRanks),
            },
            {
              key: 'type',
              content: capitalize(advantage.type),
            },
            {
              key: 'source',
              content: advantage.source,
            },
          ]}
          onClick={() => route.push(`/advantages/${advantage.key}`)}
          highlighted={pathname?.includes(encodeURI(advantage.key))}
        />
      ))}
    </Table>
  );
};

export default List;
