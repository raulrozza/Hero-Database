import { FC } from 'react';

import { NavBar } from '@/shared/presentation/components/organisms';

import { List } from './components';
import { Container } from './styles';

const Conditions: FC = () => {
  return (
    <Container>
      <NavBar />

      <main>
        <List />
      </main>
    </Container>
  );
};

export default Conditions;
