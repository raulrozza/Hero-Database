import React, { FC, Fragment } from 'react';

import Link from 'next/link';

import Tooltip from '@/presentation/components/atoms/Tooltip';
import { PopovableEntity } from '@/presentation/models';

const ENTITY_TO_PAGE: Record<PopovableEntity, string> = {
  Advantage: 'advantages',
  Condition: 'conditions',
  Modifier: 'modifiers',
};

interface IEntityLinkProps {
  type: string;
  entityKey: string;
  tooltipComponent?: FC<{ entityKey: string }>;
  children?: React.ReactNode;
}

const EntityLink: React.FC<IEntityLinkProps> = ({
  entityKey,
  type,
  children,
  tooltipComponent: TooltipComponent,
}) => {
  if (!(type in ENTITY_TO_PAGE)) return <Fragment>{children}</Fragment>;

  const path = `/${ENTITY_TO_PAGE[type as PopovableEntity]}/${entityKey}`;
  const title = `${type}: ${entityKey}`;

  const linkClassName =
    'no-underline font-extrabold text-contrast-500 transition-all hover:text-contrast-300';

  if (TooltipComponent)
    return (
      <Tooltip content={<TooltipComponent entityKey={entityKey} />}>
        <span>
          <Link href={path} title={title} className={linkClassName}>
            {children}
          </Link>
        </span>
      </Tooltip>
    );

  return (
    <span>
      <Link href={path} title={title} className={linkClassName}>
        {children}
      </Link>
    </span>
  );
};

export default EntityLink;
