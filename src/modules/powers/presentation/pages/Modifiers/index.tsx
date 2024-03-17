import { FC } from 'react';

import dynamic from 'next/dynamic';

import { NavBar } from '@/shared/presentation/components/organisms';

import { Modifier } from './components';
import { Container } from './styles';

const List = dynamic(() => import('./components/List'), { ssr: false });

const Modifiers: FC = () => {
  return (
    <Container>
      <NavBar />

      <main>
        <List />

        <Modifier />
      </main>
    </Container>
  );
};

export default Modifiers;
