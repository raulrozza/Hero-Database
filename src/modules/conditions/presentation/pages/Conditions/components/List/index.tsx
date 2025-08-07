import React, { Fragment, useEffect, useRef, useState } from 'react';

import { capitalize } from 'lodash';

import { ICondition } from '@/domain/entities';
import { useListSorter } from '@/presentation/hooks';
import { api } from '@/shared/infra/http/api';
import { Table } from '@/shared/presentation/components/atoms';

const List: React.FC = () => {
  const [selectedCondition, setCondition] = useState<ICondition>();
  const hasInitialized = useRef(false);

  const query = api.conditions.getAll.useQuery(undefined, {
    initialData: [],
  });

  const hash = location.hash;

  useEffect(() => {
    if (!query.data.length) return;

    hasInitialized.current = true;

    const hashKey = location.hash.substring(1);

    if (!hashKey) return;

    const condition = query.data.find(condition => condition.key === hashKey);

    if (condition) setCondition(condition);
  }, [query.data, setCondition, hash]);

  const sortedQuery = useListSorter(query.data, {
    sortKeys: ['name', 'source'],
  });

  if (query.isLoading) return <div>Loading...</div>;

  const conditions = sortedQuery.items.reduce(
    (acc, condition) => {
      const list = acc[condition.type];
      list.push(condition);

      return {
        ...acc,
        [condition.type]: list,
      };
    },
    {
      basic: [] as ICondition[],
      combined: [] as ICondition[],
    },
  );

  const sections = [
    {
      title: 'Basic conditions',
      data: conditions.basic,
    },
    {
      title: 'Combined conditions',
      data: conditions.combined,
    },
  ];

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
      {sections.map(section => (
        <Fragment key={section.title}>
          <Table.Section title={section.title} />

          {section.data.map(condition => (
            <Table.Row
              key={condition.key}
              items={[
                {
                  key: 'name',
                  content: condition.name,
                },
                {
                  key: 'type',
                  content: capitalize(condition.type),
                },
                {
                  key: 'source',
                  content: condition.source,
                },
              ]}
              onClick={() => setCondition(condition)}
              highlighted={selectedCondition?.key === condition.key}
            />
          ))}
        </Fragment>
      ))}
    </Table>
  );
};

export default List;
