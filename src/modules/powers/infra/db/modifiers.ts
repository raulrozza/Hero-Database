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
        'An incorporeal being can use an effect with this extra on the corporeal world (see @{Effect|Insubstantial}). When an effect is used against a corporeal target, the effect’s rank is equal to the rank of this extra, up to a maximum of the effect’s full rank. Characters with lower ranks 1–3 of Insubstantial do not require this extra for their effects to work on the physical world, although they can apply it to their @{Ability|Strength} rank to allow them to exert some Strength while Insubstantial.',
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
  [
    'Affects Objects',
    {
      name: 'Affects Objects',
      type: 'extra',
      description: [
        'This modifier allows effects normally resisted by @{Defense|Fortitude} to work on non-living objects (those with no @{Ability|Stamina}). Generally, this extra applies to effects like @{Effect|Heal} or @{Effect|Weaken}, allowing them to work on objects in the same way as they do living creatures. If the effect <strong>Affects Only Objects</strong>, working on objects but not on living creatures, it has a net modifier of +0.',
        'Objects do not get resistance checks; the effect works on the targeted object at its maximum degree of success. At the GM’s discretion, someone holding, carrying, or wearing an object can make a @{Defense|Dodge} resistance check against the effect, representing pulling the object out of the way at the last moment.',
      ],
      cost: {
        costs: [0, 1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Affects Others',
    {
      name: 'Affects Others',
      type: 'extra',
      description: [
        'This extra allows you to give someone else use of a personal effect. You must touch the subject as a standard action, and they have control over their use of the effect, although you can withdraw it when you wish as a free action. If you are unable to maintain the effect, it stops working, even if someone else is using it. Both you and your subject(s) can use the effect simultaneously.',
        'If the effect <strong>Affects Only Others</strong>, and not you, it has a net modifier of +0.',
      ],
      cost: {
        costs: [0, 1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Alternate Effect',
    {
      name: 'Alternate Effect',
      type: 'extra',
      description: [
        'This modifier allows you to “swap-out” the effect for an entire other, alternate, effect! For example, a @{Effect|Damage} effect with the descriptor of “laser” might have a visual @{Power|Dazzle} as an Alternate Effect: the same light beam can be used to damage or blind a target, just not both at once. Think of Alternate Effects as different “settings” for a power. (For combinations of effects that work simultaneously, see the @{Modifier|Linked} modifier in this section.) A set of Alternate Effects is called an <strong>array</strong>.',
        'An Alternate Effect can have any rank, or combination of modifiers. Alternate Effects may also have different descriptors, usually thematically linked, within reason. This allows you to have two versions of a Damage effect, for example: such as a fire blast and an ice blast. Permanent effects cannot have Alternate Effects, nor can they be Alternate Effects (since they can’t be turned on and off).',
        'An Alternate Effect can have a total cost in character points no greater than the primary effect. So a rank 10 primary effect costing 2 points per rank, for a total of 20, can have any Alternate Effect with a cost of 20 character points or less. This cost does not include the cost of the Alternate Effect modifier itself. So if the 20-point power has 5 Alternate Effects (making the final cost 25 points), each Alternate Effect is still limited to a total value of 20 points (including any modifiers it may have), that of the base effect. Essentially, each Alternate Effect has to have all of the others as Alternate Effects. Since the modifier applies equally to all effects in the array, its cost is discounted in terms of the “free” points they have to spend.',
        'Like any power, an Alternate Effect may be made up of two or more effects, but their total cost cannot exceed the cost of the primary effect.',
        'Alternate Effects cannot be used or maintained at the same time as other Alternates in the same array; they are mutually exclusive. Switching between Alternates requires a free action and can be done once per turn. If anything disables, nullifies, or drains any power in an array, all of them are affected in the same way.',
        {
          type: 'section',
          title: 'Dynamic Alternate Effect',
          description: [
            'For 2 character points an Alternate Effect is <strong>dynamic</strong>; it can share character points with other Dynamic Alternate Effects, allowing them all to operate at the same time, but at reduced effectiveness (so you must have two Dynamic Alternate Effects for this option to be useful). You decide how many character points are allocated to the effects once per turn as a free action. Making the base effect of an array Dynamic requires 1 character point.',
          ],
        },
      ],
      cost: {
        costs: [1],
        maxRanks: 2,
        type: 'flat',
      },
      source: 'HH',
    },
  ],
  [
    'Alternate Resistance',
    {
      name: 'Alternate Resistance',
      type: 'extra',
      description: [
        'An effect with this modifier has a different resistance than usual. The resistance check difficulty class remains the same, only the resistance differs. If the change is to a generally lower (and therefore more advantageous) resistance, this extra increases cost per rank by +1. If, in the GM’s opinion, there is no real increase in effectiveness, just a chance to the resistance, it has a net modifier of +0.',
      ],
      cost: {
        costs: [0, 1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
]);
