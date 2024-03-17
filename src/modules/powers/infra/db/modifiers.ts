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
  [
    'Affects Corporeal',
    {
      name: 'Affects Corporeal',
      type: 'extra',
      description: [
        'An incorporeal being can use an effect with this extra on the corporeal world (see @{Effect|Insubstantial}). When an effect is used against a corporeal target, the effect’s rank is equal to the rank of this extra, up to a maximum of the effect’s full rank. Characters with lower ranks 1–3 of Insubstantial do not require this extra for their effects to work on the physical world, although they can apply it to their Strength rank to allow them to exert some Strength while Insubstantial.',
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Affects Insubstantial',
    {
      name: 'Affects Insubstantial',
      type: 'extra',
      description: [
        'An effect with this extra works on @{Effect|Insubstantial|insubstantial} targets, in addition to having its normal effect on corporeal targets. Rank 1 allows the effect to work at half its normal rank against insubstantial targets (rounded down); rank 2 allows the effect to function at its full rank against them.',
      ],
      cost: {
        costs: [1],
        maxRanks: 2,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
]);
