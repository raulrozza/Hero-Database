import React, { Fragment } from 'react';

import { capitalize } from 'lodash';

import { ICondition } from '@/shared/domain/entities';
import { api } from '@/shared/infra/http/api';
import { Table } from '@/shared/presentation/components/atoms';

import { useConditionState } from '../../store';

// import { Container } from './styles';

const List: React.FC = () => {
  const [selectedCondition, setCondition] = useConditionState();

  const query = api.conditions.getAll.useQuery(undefined, {
    initialData: [],
  });

  if (query.isLoading) return <div>Loading...</div>;

  const conditions = query.data.reduce(
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
        },
        {
          title: 'Type',
        },
        {
          title: 'Source',
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
