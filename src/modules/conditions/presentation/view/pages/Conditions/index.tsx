import { FC } from 'react';

import { api } from '@/shared/infra/http/api';

const Conditions: FC = () => {
  const query = api.conditions.getAll.useQuery();

  return (
    <div>
      <h1>Conditions</h1>

      <ul>
        {query.data?.map(condition => (
          <li key={condition.key}>
            <strong>{condition.name}</strong>

            <p>{condition.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conditions;
