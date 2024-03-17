import { ModifierType, Source } from '@/shared/domain/entities';
import { ItemContent, RankCost } from '@/shared/domain/valueObjects';

export type MetaModifier = {
  name: string;
  type: ModifierType;
  description: ItemContent[];
  cost: RankCost;
  source: Source;
};

export const modifiers = new Map<string, MetaModifier>([
  [
    'Accurate',
    {
      name: 'Accurate',
      type: 'extra',
      description: [
        'An effect with this extra is especially accurate; you get +2 per Accurate rank to attack checks made with it. The power level limits maximum attack bonus with any given effect.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
]);
