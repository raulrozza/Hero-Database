import { FC } from 'react';

import { api } from '@/shared/infra/http/api';
import { NavLink } from '@/shared/presentation/components/atoms';

const Conditions: FC = () => {
  const query = api.conditions.getAll.useQuery();

  return (
    <div>
      <h1>Conditions</h1>

      <NavLink href="/" active>
        Condition
      </NavLink>
      <NavLink href="/">Condition</NavLink>

      <ul>
        {query.data?.map(condition => (
          <li key={condition.key}>
            <strong>{condition.name}</strong>

            {condition.description.split('\n').map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            {condition.type === 'combined' && (
              <p>
                Components:{' '}
                {condition.components
                  .map(component => component.name)
                  .join(', ')}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conditions;
