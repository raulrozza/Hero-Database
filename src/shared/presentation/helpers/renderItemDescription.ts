import React, { FC, Fragment, ReactElement } from 'react';

import { ConditionPopoverContainer } from '@/modules/conditions/presentation/components/organisms';
import { EntityLink } from '@/shared/presentation/components/molecules';

const ENTITY_TOOLTIP_COMPONENTS: Record<string, FC<{ entityKey: string }>> = {
  Condition: ConditionPopoverContainer,
};

type TRenderConfig = {
  showTooltip?: boolean;
};

export default function renderItemDescription(
  description: string,
  config: TRenderConfig = { showTooltip: true },
) {
  const paragraphs = description.split('\n');

  return paragraphs.map((paragraph, index) =>
    React.createElement(
      'p',
      { key: index },
      toElementsArray(paragraph, config),
    ),
  );
}

function toElementsArray(text: string, config: TRenderConfig) {
  const references = extractReferences(text);

  if (!references) return [createTextElement({ text, key: 0 })];

  const splittenText = splitByReferences(text, references);

  const elements: ReactElement[] = [];

  while (splittenText.length) {
    const text = splittenText.pop();
    const reference = references.pop();

    if (text) elements.push(createTextElement({ text, key: elements.length }));
    if (reference)
      elements.push(parseReference(reference, elements.length, config));
  }

  return elements.reverse();
}

function createTextElement(params: { text: string; key: number }) {
  return React.createElement(Fragment, { key: params.key }, params.text);
}

const CAPTURE_REGEX = /@{(.*?)}/g;

function extractReferences(text: string) {
  return text.match(CAPTURE_REGEX);
}

function splitByReferences(text: string, references: string[]) {
  const escapedReferences = references.map(reference =>
    reference.replaceAll('|', '\\|'),
  );

  const splitRegex = new RegExp(escapedReferences.join('|'), 'g');

  return text.split(splitRegex);
}

const REPLACE_REGEX = /^@{|}$/g;

function parseReference(
  reference: string,
  reactKey: number,
  config: TRenderConfig,
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
