import React from 'react';

import { capitalize } from 'lodash';

import { Container } from './styles';
import { useConditionValue } from '../../store';

const Condition: React.FC = () => {
  const condition = useConditionValue();

  if (!condition)
    return (
      <Container>
        <div className="content">
          <p>Please, select a condition from the options</p>
        </div>
      </Container>
    );

  return (
    <Container>
      <header>
        <h1>{condition.name}</h1>

        <h2>{capitalize(condition.type)}</h2>
      </header>

      <div className="content">
        {condition.description.split('\n').map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <footer>
        <strong>{'Source: '}</strong>
        {condition.source}
      </footer>
    </Container>
  );
};

export default Condition;
