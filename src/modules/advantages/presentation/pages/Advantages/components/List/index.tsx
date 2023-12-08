import React, { useEffect, useRef } from 'react';

import { capitalize } from 'lodash';

import { api } from '@/shared/infra/http/api';
import { Table } from '@/shared/presentation/components/atoms';

import { getRanksTextFromMaxRanks } from './helpers';
import { useAdvantageState } from '../../store';

const List: React.FC = () => {
  const [selectedAdvantage, setAdvantage] = useAdvantageState();
  const hasInitialized = useRef(false);

  const query = api.advantages.getAll.useQuery(undefined, {
    initialData: [],
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
        },
        {
          title: 'Type',
          span: 2,
        },
        {
          title: 'Ranks',
          span: 2,
        },
        {
          title: 'Source',
          span: 2,
        },
      ]}
    >
      {query.data.map(advantage => (
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
