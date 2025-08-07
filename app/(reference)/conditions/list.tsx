'use client';

import React, { Fragment } from 'react';

import { capitalize } from 'lodash';
import { usePathname, useRouter } from 'next/navigation';

import { ICondition } from '@/domain/entities';
import Table from '@/presentation/components/atoms/Table';
import { useListSorter } from '@/presentation/hooks';

interface IListProps {
  conditions: ICondition[];
}

const List: React.FC<IListProps> = ({ conditions }) => {
  const sortedQuery = useListSorter(conditions, {
    sortKeys: ['name', 'source'],
  });
  const route = useRouter();
  const pathname = usePathname();

  const { basic, combined } = sortedQuery.items.reduce(
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
      data: basic,
    },
    {
      title: 'Combined conditions',
      data: combined,
    },
  ];

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

          {section.data.map(condition => (
            <Table.Row
              key={condition.key}
              items={[
                {
                  key: 'name',
                  content: condition.name,
                  span: 2,
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
              onClick={() => route.push(`/conditions/${condition.key}`)}
              highlighted={pathname?.includes(condition.key)}
            />
          ))}
        </Fragment>
      ))}
    </Table>
  );
};

export default List;
