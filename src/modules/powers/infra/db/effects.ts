import { IEffect } from '@/shared/domain/entities';

export type MetaEffect = Omit<IEffect, 'key'>;

export const effects = new Map<string, MetaEffect>([
  [
    'Affliction',
    {
      name: 'Affliction',
      type: 'attack',
      action: 'standard',
      duration: 'instant',
      range: 'close',
      cost: { type: 'standard', costs: [1], maxRanks: -1 },
      description: [
        'You can impose some debilitating condition or conditions on a target by making a close attack. You set the conditions your Affliction causes at each degree when you acquire it and they may not be changed. Higher degree conditions replace lower degree conditions and do not stack with them.',
        'See the possible conditions for each degree under the <strong>Affliction Resistance Check</strong> table. The target resists with @{Defense|Fortitude} or @{Defense|Will} defense (chosen when you take the effect): ',
        { type: 'heading', variant: 'h1', text: 'Affliction Resistance Check' },
      ],
      source: 'HH',
    },
  ],
]);
