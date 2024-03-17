import { FC } from 'react';

import { NavBar } from '@/shared/presentation/components/organisms';

import { List, Modifier } from './components';
import { Container } from './styles';

const Modifiers: FC = () => (
  <Container>
    <NavBar />

    <main>
      <List />

      <Modifier />
    </main>
  </Container>
);

export default Modifiers;
