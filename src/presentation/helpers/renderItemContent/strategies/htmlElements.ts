import { ExtractStrategy, TextElement } from '../models';

const validElements = ['strong', 'i'];

export const htmlElementStrategy: ExtractStrategy = {
  extract(text: string, next) {
    const tag = extractTag(text);

    if (!tag) return textIntoTextElement(text, next);

    const { afterElementText, beforeElementText, element, elementText } = tag;

    return [
      ...htmlElementStrategy.extract(beforeElementText, next),
      { type: 'html', element, children: [elementText] },
      ...htmlElementStrategy.extract(afterElementText, next),
    ];
  },
};

function extractTag(text: string) {
  const startTagMatch = text.match(/(.*)<(\w*)>(.*)/);

  if (!startTagMatch) return null;

  const [, beforeElementText, element, textWithEndingTag] = startTagMatch;

  if (!validElements.includes(element)) return null;

  const endTagMatch = textWithEndingTag.match(
    new RegExp(`(.*)</${element}>(.*)`),
  );

  if (!endTagMatch) return null;

  const [, elementText, afterElementText] = endTagMatch;

  return {
    beforeElementText,
    element,
    elementText,
    afterElementText,
  };
}

function textIntoTextElement(
  text: string,
  next?: ExtractStrategy['extract'],
): TextElement[] {
  if (!next) return [{ type: 'text', text }];

  return next(text);
}
