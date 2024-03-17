import React, { Fragment, useEffect, useRef } from 'react';

import { capitalize } from 'lodash';

import { getCostText } from '@/modules/powers/presentation/helpers';
import { IModifier } from '@/shared/domain/entities';
import { api } from '@/shared/infra/http/api';
import { Table } from '@/shared/presentation/components/atoms';
import { useListSorter } from '@/shared/presentation/hooks';

import { useModifierState } from '../../store';

const List: React.FC = () => {
  const [selectedModifier, setModifier] = useModifierState();
  const hasInitialized = useRef(false);

  const query = api.modifiers.getAll.useQuery(undefined, {
    initialData: [],
  });

  const hash = location.hash;

  useEffect(() => {
    if (!query.data.length) return;

    hasInitialized.current = true;

    const hashKey = location.hash.substring(1);

    if (!hashKey) return;

    const modifier = query.data.find(
      modifier => modifier.key === decodeURI(hashKey),
    );

    if (modifier) setModifier(modifier);
  }, [query.data, setModifier, hash]);

  const sortedQuery = useListSorter(query.data, {
    sortKeys: ['name', 'source', 'type'],
  });

  if (query.isLoading) return <div>Loading...</div>;

  const modifiers = sortedQuery.items.reduce(
    (acc, modifier) => {
      const list = acc[modifier.type];
      list.push(modifier);

      return {
        ...acc,
        [modifier.type]: list,
      };
    },
    {
      extra: [] as IModifier[],
      flaw: [] as IModifier[],
    },
  );

  const sections = [
    {
      title: 'Extras',
      data: modifiers.extra,
    },
    {
      title: 'Flaws',
      data: modifiers.flaw,
    },
  ];

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
          onClick: () => sortedQuery.sortBy('type'),
          sortingKey: 'type',
          active: sortedQuery.currentKey === 'type',
          sorting: sortedQuery.order,
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
      {sections.map(section => (
        <Fragment key={section.title}>
          <Table.Section title={section.title} />

          {section.data.map(modifier => (
            <Table.Row
              key={modifier.key}
              items={[
                {
                  key: 'name',
                  content: modifier.name,
                },
                {
                  key: 'type',
                  content: capitalize(modifier.cost.type),
                },
                {
                  key: 'cost',
                  content: getCostText(modifier.cost),
                },
                {
                  key: 'source',
                  content: modifier.source,
                },
              ]}
              onClick={() => setModifier(modifier)}
              highlighted={selectedModifier?.key === modifier.key}
            />
          ))}
        </Fragment>
      ))}
    </Table>
  );
};

export default List;
