import { FC } from 'react';

import dynamic from 'next/dynamic';

import { NavBar } from '@/shared/presentation/components/organisms';

import { Container } from './styles';

/* import { Condition } from './components';
 */

const List = dynamic(() => import('./components/List'), { ssr: false });

const Advantages: FC = () => {
  return (
    <Container>
      <NavBar />

      <main>
        <List />

        {/*
        <Condition /> */}
      </main>
    </Container>
  );
};

export default Advantages;
