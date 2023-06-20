import { FC } from 'react';

import { NavBar } from '@/shared/presentation/components/organisms';

import { Condition, List } from './components';
import { Container } from './styles';

const Conditions: FC = () => {
  return (
    <Container>
      <NavBar />

      <main>
        <List />

        <Condition />
      </main>
    </Container>
  );
};

export default Conditions;
