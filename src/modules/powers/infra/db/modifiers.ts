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
  [
    'Area',
    {
      name: 'Area',
      type: 'extra',
      description: [
        'This extra allows an effect that normally works on a single target to affect an area. No attack check is needed; the effect simply fills the designated area, based on the type of modifier. Potential targets in the area are permitted a @{Resistance|Dodge} resistance check (DC 10 + effect rank) to avoid some of the effect (reflecting ducking for cover, dodging out of the way, and so forth). A successful resistance check reduces the Area effect to half its normal rank against that target (round down, minimum of 1 rank).',
        {
          type: 'section',
          title: 'Shape',
          description: [
            'Choose one of the following options:',
            '<strong>Burst:</strong> The effect fills a sphere with a 30-foot radius (distance rank 0). Bursts on level surfaces (like the ground) create hemispheres 30 feet in radius and height.',
            '<strong>Cloud:</strong> The effect fills a sphere with a 15-foot radius (distance rank –1) that lingers in that area for one round after its duration expires (affecting any targets in the area normally during the additional round). Clouds on level surfaces (like the ground) create hemispheres 15 feet in radius and height.',
            '<strong>Cone:</strong> The effect fills a cone with a length, width, and height of 60 feet (distance rank 1), spreading out from the effect’s starting point. Cones on a level surface halve their final height.',
            '<strong>Cylinder:</strong> The effect fills a cylinder 30 feet in radius and height (distance rank 0).',
            '<strong>Line:</strong> The effect fills a path 5 feet wide and 30 feet long (distance rank 0) in a straight line.',
            '<strong>Perception:</strong> The effect works on anyone able to perceive the target point with a particular sense, chosen when you apply this extra, like a @{Modifier|Sense-Dependent} effect. Targets get a @{Resistance|Dodge} resistance check, as usual, but if the check is successful suffer no effect (rather than half). Concealment that prevents a target from perceiving the effect also blocks it. This modifier includes the Sense-Dependent flaw so it cannot be applied again. If it is applied to an already Sense-Dependent effect, it costs 2 points per rank rather than 1.',
            '<strong>Shapeable:</strong> The effect fills a volume of 30 cubic feet (volume rank 5), and you may shape the volume as you wish, so long as it all remains contiguous.',
            'Each +1 point increase in cost per rank moves the area’s distance rank up by 1. So a Burst Area with +2 cost per rank has a 60-foot radius (distance rank 1), a 120-foot radius at +3 cost per rank (distance rank 2), and so forth.',
          ],
        },
        {
          type: 'section',
          title: 'Range',
          description: [
            'The Area modifier interacts with different ranges as follows:',
            '<strong>Close:</strong> An effect must be at least close range in order to apply Area (personal range effects work only on the user by definition). A Close Area effect originates from the user and expands to fill the affected area; the user is not affected by it. So, for example, Close Burst Area Damage does not damage the user, who is at the center of the burst. This immunity does not apply to other effects, nor does it extend to anyone else: for that, apply the Selective extra. If the user wants to be affected at the same time, increase cost per rank by +1. An example would be a Close Burst Area Healing effect that included the user along with everyone else in the area. This is the equivalent of the +1 Affects Others modifier.',
            '<strong>Ranged:</strong> A ranged area effect can be placed anywhere within the effect’s range, extending to fill the area’s volume from the origin point.',
            '<strong>Perception:</strong> A perception area effect can be placed anywhere the user can accurately perceive. Perception area effects neither require an attack check nor allow a @{Resistance|Dodge} resistance check, although targets still get a normal resistance check against the effect. Perception area effects are blocked by either concealment or cover; choose one when acquiring the effect. For concealment, if the attacker can’t accurately perceive a target in the area, it is unaffected. Thus even heavy smoke or darkness can block the effect. Effects blocked by cover are much like conventional area effects: solid barriers interfere with the effect, even if they are transparent, but the effect ignores concealment like darkness, shadows, or smoke. Only targets behind total cover are unaffected.',
          ],
        },
      ],
      cost: {
        costs: [1],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
  [
    'Attack',
    {
      name: 'Attack',
      type: 'extra',
      description: [
        'This extra applies to personal range effects, making them into attack effects. Examples include @{Effect|Shrinking} and @{Effect|Teleport}, causing a target to shrink or teleport away, respectively. Unlike most extras, the effect’s cost does not change, although it does work differently.',
        'The effect no longer works on you (so a Teleport Attack can’t be used to teleport yourself, for example). It affects one creature of any size or 50 lbs. of inanimate mass. The effect has close range and requires a standard action and an attack check to touch the subject. Its range can be improved with the @{Modifier|Range} extra while its required action can be changed with the Action modifier. The target gets a resistance check, determined when the effect is made into an attack. Generally @{Resistance|Dodge} or @{Resistance|Will} is the most appropriate. A successful check negates the effect.',
        'You must also define reasonably common circumstances that negate an Attack effect entirely, such as force fields or the ability to teleport blocking a Teleport Attack. You control the effect, and maintain it, if it has a duration longer than instant.',
        'If you want both versions of an Attack effect, such as being able to Teleport yourself and Teleport others as an attack, take both as @{Modifier|Alternate Effect|Alternate Effects}. For the ability to use both options simultaneously — to teleport a target and yourself at the same time, for example — take the effects as separate powers.',
      ],
      cost: {
        costs: [0],
        maxRanks: -1,
        type: 'standard',
      },
      source: 'HH',
    },
  ],
]);
