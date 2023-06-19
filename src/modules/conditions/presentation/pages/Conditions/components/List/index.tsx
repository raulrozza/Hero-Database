import React from 'react';

import { capitalize } from 'lodash';

import { api } from '@/shared/infra/http/api';
import { Table } from '@/shared/presentation/components/atoms';

// import { Container } from './styles';

const List: React.FC = () => {
  const query = api.conditions.getAll.useQuery();

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
        },
        {
          title: 'Source',
        },
      ]}
    >
      {query.data?.map(condition => (
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
        />
      ))}
    </Table>
  );
};

export default List;
