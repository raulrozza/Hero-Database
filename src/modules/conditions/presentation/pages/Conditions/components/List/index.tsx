import React from 'react';

import { api } from '@/shared/infra/http/api';

// import { Container } from './styles';

const List: React.FC = () => {
  const query = api.conditions.getAll.useQuery();

  if (query.isLoading) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <tr>Name</tr>
          <tr>Type</tr>
          <tr>Source</tr>
        </tr>
      </thead>

      <tbody>
        {query.data?.map(condition => (
          <tr key={condition.key}>
            <td>{condition.name}</td>
            <td>{condition.type}</td>
            <td>{condition.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
