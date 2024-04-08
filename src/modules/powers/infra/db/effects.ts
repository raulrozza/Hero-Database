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
        'An effect with this extra is especially accurate; you get +2 per Accurate rank to attack checks made with it. The power level limits maximum attack bonus with any given effect.',
      ],
      source: 'HH',
    },
  ],
]);
