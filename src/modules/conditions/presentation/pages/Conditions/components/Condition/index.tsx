import React from 'react';

import { Container } from './styles';

const Condition: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Compelled</h1>

        <h2>Basic</h2>
      </header>

      <div className="content">
        <p>
          A compelled character is directed by an outside force, but struggling
          against it; the character is limited to free actions and a single
          standard action per turn, chosen by another, controlling, character.
          As usual, this standard action can be traded for a move or even free
          action. Controlled supersedes compelled.
        </p>
      </div>

      <footer>
        <strong>Source: </strong>
        HH
      </footer>
    </Container>
  );
};

export default Condition;
