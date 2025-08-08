import React, { useEffect, useRef, useState } from 'react';

import { capitalize } from 'lodash';

import { IAdvantage } from '@/domain/entities';
import { api } from '@/infra/http/api';
import { useListSorter } from '@/presentation/hooks';
import { Table } from '@/shared/presentation/components/atoms';

import { getRanksTextFromMaxRanks } from './helpers';

const List: React.FC = () => {
  const [selectedAdvantage, setAdvantage] = useState<IAdvantage>();
  const hasInitialized = useRef(false);

  const query = api.advantages.getAll.useQuery(undefined, {
    initialData: [],
  });

  const sortedQuery = useListSorter(query.data, {
    sortKeys: ['name', 'type', 'maxRanks', 'source'],
  });

  const hash = location.hash;

  useEffect(() => {
    if (!query.data.length) return;

    hasInitialized.current = true;

    const hashKey = location.hash.substring(1);

    if (!hashKey) return;

    const advantage = query.data.find(advantage => advantage.key === hashKey);

    if (advantage) setAdvantage(advantage);
  }, [query.data, setAdvantage, hash]);

  if (query.isLoading) return <div>Loading...</div>;

  return (
    <Table
      labels={[
        {
          title: 'Name',
          span: 6,
          onClick: () => sortedQuery.sortBy('name'),
          sortingKey: 'name',
          active: sortedQuery.currentKey === 'name',
          sorting: sortedQuery.order,
        },
        {
          title: 'Type',
          span: 2,
          onClick: () => sortedQuery.sortBy('type'),
          sortingKey: 'type',
          active: sortedQuery.currentKey === 'type',
          sorting: sortedQuery.order,
        },
        {
          title: 'Ranks',
          span: 2,
          onClick: () => sortedQuery.sortBy('maxRanks'),
          sortingKey: 'maxRanks',
          active: sortedQuery.currentKey === 'maxRanks',
          sorting: sortedQuery.order,
        },
        {
          title: 'Source',
          span: 2,
          onClick: () => sortedQuery.sortBy('source'),
          sortingKey: 'source',
          active: sortedQuery.currentKey === 'source',
          sorting: sortedQuery.order,
        },
      ]}
    >
      {sortedQuery.items.map(advantage => (
        <Table.Row
          key={advantage.key}
          items={[
            {
              key: 'name',
              content: advantage.name,
            },
            {
              key: 'type',
              content: capitalize(advantage.type),
            },
            {
              key: 'ranks',
              content: getRanksTextFromMaxRanks(advantage.maxRanks),
            },
            {
              key: 'source',
              content: advantage.source,
            },
          ]}
          onClick={() => setAdvantage(advantage)}
          highlighted={selectedAdvantage?.key === advantage.key}
        />
      ))}
    </Table>
  );
};

export default List;
