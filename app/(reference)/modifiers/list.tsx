'use client';

import React, { Fragment } from 'react';

import { capitalize } from 'lodash';
import { usePathname, useRouter } from 'next/navigation';

import { IModifier } from '@/domain/entities';
import Table from '@/presentation/components/atoms/Table';
import getCostText from '@/presentation/helpers/getCostText';
import { useListSorter } from '@/presentation/hooks';

interface IListProps {
  modifiers: IModifier[];
}

const List: React.FC<IListProps> = ({ modifiers }) => {
  const sortedQuery = useListSorter(modifiers, {
    sortKeys: ['name', 'source'],
  });
  const route = useRouter();
  const pathname = usePathname();

  const { extra, flaw } = sortedQuery.items.reduce(
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
      data: extra,
    },
    {
      title: 'Flaws',
      data: flaw,
    },
  ];

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

  const totalSpan = labels
    .map(label => (label.span ? label.span : 1))
    .reduce((acc, actual) => acc + actual, 0);

  return (
    <Table className="w-full grow-0 md:max-w-198 md:max-h-100%" labels={labels}>
      {sections.map(section => (
        <Fragment key={section.title}>
          <Table.Section title={section.title} span={totalSpan} />

          {section.data.map(modifier => (
            <Table.Row
              key={modifier.key}
              items={[
                {
                  key: 'name',
                  content: modifier.name,
                  span: 4,
                },
                {
                  key: 'type',
                  content: capitalize(modifier.cost.type),
                  span: 2,
                },
                {
                  key: 'cost',
                  content: getCostText(modifier.cost),
                  span: 2,
                },
                {
                  key: 'source',
                  content: modifier.source,
                },
              ]}
              onClick={() => route.push(`/modifiers/${modifier.key}`)}
              highlighted={pathname?.includes(encodeURI(modifier.key))}
            />
          ))}
        </Fragment>
      ))}
    </Table>
  );
};

export default List;
