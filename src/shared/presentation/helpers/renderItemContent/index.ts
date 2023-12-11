import React, { FC, Fragment } from 'react';

import { ConditionPopoverContainer } from '@/modules/conditions/presentation/components/organisms';
import { EntityLink } from '@/shared/presentation/components/molecules';

import { referenceStrategy } from './strategies/references';

const ENTITY_TOOLTIP_COMPONENTS: Record<string, FC<{ entityKey: string }>> = {
  Condition: ConditionPopoverContainer,
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
  const strategy = referenceStrategy;
  const textElements = strategy.extract(text);

  if (!textElements) return [createTextElement({ text, key: 0 })];

  return textElements.map((element, index) => {
    if (element.type === 'text')
      return createTextElement({ text: element.text, key: index });

    if (element.type === 'reference')
      return parseReference(element.reference, index, config);

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
    ? ENTITY_TOOLTIP_COMPONENTS[type]
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
