import { FC } from 'react';

import dynamic from 'next/dynamic';

import NavBar from '@/presentation/components/organisms/NavBar';

import { Advantage } from './components';
import { Container } from './styles';

const List = dynamic(() => import('./components/List'), { ssr: false });

const Advantages: FC = () => {
  return (
    <Container>
      <NavBar />

      <main>
        <List />

        <Advantage />
      </main>
    </Container>
  );
};

export default Advantages;
