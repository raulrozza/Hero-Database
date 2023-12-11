import { ExtractStrategy } from '@/shared/presentation/helpers/renderItemContent/models';

export const htmlElementStrategy: ExtractStrategy = {
  extract(text: string) {
    const startTagMatch = text.match(/(.*)<(\w*)>(.*)/);

    if (!startTagMatch) return [{ type: 'text', text }];

    const [, beforeElementText, element, textWithEndingTag] = startTagMatch;

    const endTagMatch = textWithEndingTag.match(
      new RegExp(`(.*)</${element}>(.*)`),
    );

    if (!endTagMatch) return [{ type: 'text', text }];

    const [, elementText, afterElementText] = endTagMatch;

    return [
      { type: 'text', text: beforeElementText },
      { type: 'html', element, children: [elementText] },
      { type: 'text', text: afterElementText },
    ];
  },
};

const testItems = [
  '<strong>Alternate Identity:</strong> You have an alternate identity, complete with legal paperwork (driver’s license, birth certificate, etc.). This is different from a costumed identity, which doesn’t necessarily have any special legal status (but may in some settings).',
  '<strong>Diplomatic Immunity: By dint of your diplomatic <i>status, you cannot be prosecuted</i> for crimes in nations other than your own.</strong> All another nation can do is deport you to your home nation.',
  'Security Clearance: You have access to classified government information, installations, and possibly equipment and personnel.',
];
testItems.forEach(item => console.log(htmlElementStrategy.extract(item)));
