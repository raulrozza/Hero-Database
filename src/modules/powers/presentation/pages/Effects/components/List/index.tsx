import React, { useEffect, useRef, useState } from 'react';

import { capitalize } from 'lodash';

import { getCostText } from '@/modules/powers/presentation/helpers';
import { IEffect } from '@/domain/entities';
import { api } from '@/infra/http/api';
import { Table } from '@/shared/presentation/components/atoms';
import { useListSorter } from '@/presentation/hooks';

const List: React.FC = () => {
  const [selectedEffect, setEffect] = useState<IEffect>();
  const hasInitialized = useRef(false);

  const query = api.effects.getAll.useQuery(undefined, {
    initialData: [],
  });

  const hash = location.hash;

  useEffect(() => {
    if (!query.data.length) return;

    hasInitialized.current = true;

    const hashKey = location.hash.substring(1);

    if (!hashKey) return;

    const effect = query.data.find(effect => effect.key === decodeURI(hashKey));

    if (effect) setEffect(effect);
  }, [query.data, setEffect, hash]);

  const sortedQuery = useListSorter(query.data, {
    sortKeys: ['name', 'source'],
  });

  if (query.isLoading) return <div>Loading...</div>;

  return (
    <Table
      labels={[
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
      ]}
    >
      {sortedQuery.items.map(effect => (
        <Table.Row
          key={effect.key}
          items={[
            {
              key: 'name',
              content: effect.name,
            },
            {
              key: 'type',
              content: capitalize(effect.cost.type),
            },
            {
              key: 'cost',
              content: getCostText(effect.cost, { showPositiveSign: false }),
            },
            {
              key: 'source',
              content: effect.source,
            },
          ]}
          onClick={() => setEffect(effect)}
          highlighted={selectedEffect?.key === effect.key}
        />
      ))}
    </Table>
  );
};

export default List;
