import { ExtractStrategy, TextElement } from '../models';

export const referenceStrategy: ExtractStrategy = {
  extract(text: string) {
    const references = extractReferences(text);

    if (!references) return null;

    const splittenText = splitByReferences(text, references);

    const elements: TextElement[] = [];

    while (splittenText.length) {
      const text = splittenText.pop();
      const reference = references.pop();

      if (text) elements.push({ type: 'text', text });
      if (reference) elements.push({ type: 'reference', reference });
    }

    return elements.reverse();
  },
};

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
