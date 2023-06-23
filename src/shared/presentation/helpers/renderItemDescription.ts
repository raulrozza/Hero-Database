import React, { Fragment, ReactElement } from 'react';

import Link from 'next/link';

const ENTITY_TO_PAGE: Record<string, string> = {
  Condition: 'conditions',
};

export default function renderItemDescription(description: string) {
  const paragraphs = description.split('\n');

  return paragraphs.map((paragraph, index) =>
    React.createElement('p', { key: index }, toElementsArray(paragraph)),
  );
}

function toElementsArray(text: string) {
  const references = extractReferences(text);

  if (!references) return [createTextElement({ text, key: 0 })];

  const splittenText = splitByReferences(text, references);

  const elements: ReactElement[] = [];

  while (splittenText.length) {
    const text = splittenText.pop();
    const reference = references.pop();

    if (text) elements.push(createTextElement({ text, key: elements.length }));
    if (reference) elements.push(parseReference(reference, elements.length));
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

function parseReference(reference: string, reactKey: number) {
  const cleanReference = reference.replace(REPLACE_REGEX, '');
  const [type, key, text] = cleanReference.split('|');

  return assembleLinkElement(type, key, text, reactKey);
}

function assembleLinkElement(
  type: string,
  key: string,
  text: string | undefined,
  reactKey: number,
) {
  const children = text || key;

  if (!(type in ENTITY_TO_PAGE))
    return createTextElement({ text: children, key: reactKey });

  const path = `${ENTITY_TO_PAGE[type]}/#${key}`;
  const title = `${type}: ${key}`;

  return React.createElement(
    Link,
    { href: path, title, key: reactKey },
    children,
  );
}
