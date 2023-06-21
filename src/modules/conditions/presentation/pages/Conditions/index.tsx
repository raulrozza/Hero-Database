import { FC } from 'react';

import dynamic from 'next/dynamic';

import { NavBar } from '@/shared/presentation/components/organisms';

import { Condition } from './components';
import { Container } from './styles';

const List = dynamic(() => import('./components/List'), { ssr: false });

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
