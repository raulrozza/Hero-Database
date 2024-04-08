import { FC } from 'react';

import dynamic from 'next/dynamic';

import { NavBar } from '@/shared/presentation/components/organisms';

import { Effect } from './components';
import { Container } from './styles';

const List = dynamic(() => import('./components/List'), { ssr: false });

const Effects: FC = () => {
  return (
    <Container>
      <NavBar />

      <main>
        <List />

        <Effect />
      </main>
    </Container>
  );
};

export default Effects;
