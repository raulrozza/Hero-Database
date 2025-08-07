import React, { FC, Fragment, ReactNode } from 'react';

import { AdvantagePopoverContainer } from '@/modules/advantages/presentation/components/organisms';
import { ConditionPopoverContainer } from '@/modules/conditions/presentation/components/organisms';
import { ModifierPopoverContainer } from '@/modules/powers/presentation/components/organisms';
import { EntityLink } from '@/shared/presentation/components/molecules';
import { PopovableEntity } from '@/presentation/models';

import { htmlElementStrategy } from './strategies/htmlElements';
import { referenceStrategy } from './strategies/references';

const ENTITY_TOOLTIP_COMPONENTS: Record<
  PopovableEntity,
  FC<{ entityKey: string }>
> = {
  Advantage: AdvantagePopoverContainer,
  Condition: ConditionPopoverContainer,
  Modifier: ModifierPopoverContainer,
};

export type RenderItemContentConfig = {
  showTooltip?: boolean;
};

export default function renderItemContent(
  description: string,
  config: RenderItemContentConfig = { showTooltip: true },
) {
  return toElementsArray(description, config);
}

function toElementsArray(text: string, config: RenderItemContentConfig) {
  const textElements = htmlElementStrategy.extract(
    text,
    referenceStrategy.extract, // eslint-disable-line @typescript-eslint/unbound-method
  );

  return textElements.map((element, index) => {
    if (element.type === 'text')
      return createTextElement({ text: element.text, key: index });

    if (element.type === 'reference')
      return parseReference(element.reference, index, config);

    if (element.type === 'html')
      return parseHtml(element.element, index, element.children);

    return null;
  });
}

function createTextElement(params: { text: string; key: number }) {
  return React.createElement(Fragment, { key: params.key }, params.text);
}

const REPLACE_REGEX = /^@{|}$/g;

function parseReference(
  reference: string,
  reactKey: number,
  config: RenderItemContentConfig,
) {
  const cleanReference = reference.replace(REPLACE_REGEX, '');
  const [type, key, text] = cleanReference.split('|');

  const children = text || key;

  const tooltipComponent = config.showTooltip
    ? ENTITY_TOOLTIP_COMPONENTS[type as PopovableEntity]
    : undefined;

  return React.createElement(
    EntityLink,
    {
      type,
      key: reactKey,
      entityKey: key,
      tooltipComponent,
    },
    children,
  );
}

function parseHtml(element: string, reactKey: number, children: ReactNode[]) {
  return React.createElement(element, { key: reactKey }, children);
}
