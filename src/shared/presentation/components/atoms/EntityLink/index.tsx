import React, { Fragment } from 'react';

import Link from 'next/link';

import { Container } from './styles';

const ENTITY_TO_PAGE: Record<string, string> = {
  Condition: 'conditions',
};

interface IEntityLinkProps {
  type: string;
  entityKey: string;
}

const EntityLink: React.FC<IEntityLinkProps> = ({
  entityKey,
  type,
  children,
}) => {
  if (!(type in ENTITY_TO_PAGE)) return <Fragment>{children}</Fragment>;

  const path = `${ENTITY_TO_PAGE[type]}/#${entityKey}`;
  const title = `${type}: ${entityKey}`;

  return (
    <Container>
      <Link href={path} title={title}>
        {children}
      </Link>
    </Container>
  );
};

export default EntityLink;
